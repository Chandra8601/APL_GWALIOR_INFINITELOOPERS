import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef } from 'react';
import { getCricketChatResponse } from '../../services/gemini';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

export default function ChatbotScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hello! I'm your advanced AI Cricket Assistant. Ask me anything about IPL stats, player records, or live match predictions! 🏏", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: inputText.trim(), isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    const aiResponseText = await getCricketChatResponse(userMessage.text);
    
    const aiMessage: Message = { id: (Date.now() + 1).toString(), text: aiResponseText, isUser: false };
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-iplDark">
      <View className="px-4 py-4 flex-row items-center border-b border-white/10 shadow-sm shadow-iplNeon/5 z-10 bg-iplDark">
        <View className="w-10 h-10 bg-iplNeon/20 rounded-full items-center justify-center border border-iplNeon mr-3">
          <Ionicons name="hardware-chip" size={20} color="#00E5FF" />
        </View>
        <View>
          <Text className="text-white text-xl font-bold">Cric<Text className="text-iplNeon">AI</Text></Text>
          <Text className="text-iplNeon text-xs">Online</Text>
        </View>
      </View>

      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView 
          ref={scrollViewRef}
          className="flex-1 p-4"
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((msg) => (
            <View key={msg.id} className={`flex-row mb-4 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              <View className={`p-3 max-w-[80%] ${
                msg.isUser 
                  ? 'bg-iplPurple rounded-2xl rounded-tr-none shadow-md shadow-iplPurple/20' 
                  : 'bg-iplCard rounded-2xl rounded-tl-none border border-iplNeon/30 shadow-lg shadow-iplNeon/10'
              }`}>
                <Text className="text-white text-[15px] leading-5">{msg.text}</Text>
              </View>
            </View>
          ))}
          {isLoading && (
            <View className="flex-row mb-4 justify-start">
              <View className="bg-iplCard p-4 rounded-2xl rounded-tl-none border border-iplNeon/30 w-24 items-center justify-center">
                 <ActivityIndicator color="#00E5FF" size="small" />
              </View>
            </View>
          )}
          <View className="h-6" />
        </ScrollView>

        {/* Input Area */}
        <View className="p-4 bg-iplCard border-t border-white/5 flex-row items-center pb-6">
          <TouchableOpacity className="mr-3">
            <Ionicons name="mic" size={24} color="#00E5FF" />
          </TouchableOpacity>
          <TextInput 
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask AI about IPL..." 
            placeholderTextColor="#888"
            className="flex-1 bg-black text-white px-4 py-3 rounded-2xl border border-white/10"
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity 
            onPress={sendMessage}
            disabled={isLoading || !inputText.trim()}
            className={`ml-3 w-12 h-12 rounded-2xl items-center justify-center ${
              isLoading || !inputText.trim() ? 'bg-iplNeon/50' : 'bg-iplNeon shadow-lg shadow-iplNeon/40'
            }`}
          >
            <Ionicons name="send" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
