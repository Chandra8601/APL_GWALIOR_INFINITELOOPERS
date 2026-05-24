import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function VideoHubScreen() {
  return (
    <SafeAreaView className="flex-1 bg-iplDark">
      <View className="px-4 py-4 border-b border-white/10">
        <Text className="text-white text-2xl font-bold">Cricket <Text className="text-iplAccent">Rewind</Text></Text>
      </View>
      <ScrollView className="flex-1">
        {/* Featured Video */}
        <View className="p-4">
          <View className="w-full h-56 bg-iplCard rounded-t-2xl overflow-hidden relative border border-iplPurple/30 border-b-0">
            <View className="absolute inset-0 items-center justify-center bg-black/40 z-10">
              <Ionicons name="play-circle" size={64} color="#00E5FF" />
            </View>
            {/* YouTube Player Container (No Overlays allowed per ToS) */}
            <View className="flex-1 bg-gray-800" />
          </View>
          {/* Metadata container safely outside the video player */}
          <View className="w-full p-4 bg-iplCard rounded-b-2xl border border-iplPurple/30 border-t-0 shadow-sm shadow-iplPurple/10">
            <Text className="text-white font-bold text-lg">MS Dhoni's Epic Helicopter Shot</Text>
            <Text className="text-gray-400 text-sm mt-1">Highlights • 2.4M views</Text>
          </View>
        </View>

        {/* Trending Section */}
        <View className="px-4 pb-8">
          <Text className="text-white text-lg font-bold mb-3">Trending Clips</Text>
          <View className="flex-row flex-wrap justify-between">
            {[1, 2, 3, 4].map((i) => (
              <TouchableOpacity key={i} className="w-[48%] mb-4 bg-iplCard rounded-xl overflow-hidden border border-white/5">
                <View className="h-28 bg-gray-700 items-center justify-center">
                  <Ionicons name="play" size={24} color="white" />
                </View>
                <View className="p-2">
                  <Text className="text-white text-xs font-semibold" numberOfLines={2}>Virat Kohli aggressive 100 vs RCB Highlights</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
