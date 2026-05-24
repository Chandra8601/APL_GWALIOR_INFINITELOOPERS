import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function WatchPartyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-iplDark">
      <View className="px-4 py-4 flex-row justify-between items-center border-b border-white/10">
        <Text className="text-white text-2xl font-bold">Watch <Text className="text-iplPurple">Together</Text></Text>
        <View className="bg-iplNeon/20 px-3 py-1 rounded-full border border-iplNeon">
          <Text className="text-iplNeon font-bold text-xs">Room: X92-B</Text>
        </View>
      </View>

      <View className="flex-1 p-4">
        {/* Mock Live Stream Video Area */}
        <View className="w-full h-48 bg-black rounded-2xl mb-4 border border-white/20 items-center justify-center relative">
          <Text className="text-white/50 text-xs absolute top-2 right-2">● LIVE</Text>
          <Text className="text-white font-bold">Live Match Streaming</Text>
        </View>

        {/* Mock Google Meet Bubbles */}
        <View className="flex-row justify-between mb-4">
          {[1, 2, 3, 4].map((i) => (
            <View key={i} className="w-16 h-16 bg-gray-800 rounded-full border-2 border-iplPurple items-center justify-center relative overflow-hidden">
              <Ionicons name="person" size={24} color="gray" />
              {i === 1 && (
                <View className="absolute bottom-0 w-full bg-black/60 items-center">
                  <Ionicons name="mic-off" size={10} color="red" />
                </View>
              )}
            </View>
          ))}
          <TouchableOpacity className="w-16 h-16 bg-white/10 rounded-full border border-dashed border-white/30 items-center justify-center">
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Live Chat */}
        <View className="flex-1 bg-iplCard rounded-2xl p-4 border border-white/5">
          <ScrollView className="flex-1 mb-2">
            <View className="mb-3">
              <Text className="text-iplNeon font-bold text-xs">Rahul D.</Text>
              <Text className="text-white text-sm">What a shot by SKY!! 🔥🔥</Text>
            </View>
            <View className="mb-3">
              <Text className="text-iplPurple font-bold text-xs">Priya M.</Text>
              <Text className="text-white text-sm">Definitely crossing 200 today.</Text>
            </View>
          </ScrollView>
          
          <View className="flex-row items-center">
            <TextInput 
              placeholder="Chat with friends..." 
              placeholderTextColor="#888"
              className="flex-1 bg-black text-white px-4 py-2 rounded-full border border-white/10"
            />
            <TouchableOpacity className="ml-2 w-10 h-10 bg-iplPurple rounded-full items-center justify-center">
              <Ionicons name="send" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
