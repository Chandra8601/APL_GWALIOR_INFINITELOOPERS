import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-iplDark">
      <ScrollView className="flex-1 px-4">
        {/* Header */}
        <View className="flex-row justify-between items-center py-4 mt-2">
          <Text className="text-white text-3xl font-bold tracking-wider">IPL<Text className="text-iplNeon">Verse</Text></Text>
          <View className="bg-iplCard p-2 rounded-full border border-iplPurple/30">
            <Text className="text-white font-semibold px-2">⚽ 2400 pts</Text>
          </View>
        </View>

        {/* Live Match Card */}
        <View className="bg-iplCard rounded-3xl p-5 mb-6 border border-iplPurple/50 shadow-lg shadow-iplNeon/20 mt-4 relative overflow-hidden">
          <View className="absolute top-0 right-0 w-32 h-32 bg-iplNeon/10 rounded-bl-full" />
          <View className="flex-row justify-between items-center mb-4">
            <View className="bg-iplAccent px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-bold uppercase tracking-widest">● Live</Text>
            </View>
            <Text className="text-gray-400 text-xs">Match 45 • Wankhede Stadium</Text>
          </View>

          <View className="flex-row justify-between items-center my-2">
            <View className="items-center">
              <View className="w-16 h-16 bg-blue-900 rounded-full items-center justify-center border-2 border-blue-500 mb-2">
                <Text className="text-white font-bold text-xl">MI</Text>
              </View>
              <Text className="text-white font-bold text-lg">184/4</Text>
              <Text className="text-gray-400 text-xs">18.2 Overs</Text>
            </View>

            <View className="items-center">
              <Text className="text-iplNeon font-black text-2xl">VS</Text>
            </View>

            <View className="items-center">
              <View className="w-16 h-16 bg-yellow-500 rounded-full items-center justify-center border-2 border-yellow-300 mb-2">
                <Text className="text-black font-bold text-xl">CSK</Text>
              </View>
              <Text className="text-white font-bold text-lg">Yet to bat</Text>
            </View>
          </View>
          <View className="flex-row justify-between mt-4 border-t border-white/10 pt-4">
            <View className="items-center">
              <Text className="text-gray-400 text-xs">CRR</Text>
              <Text className="text-white font-bold">9.2</Text>
            </View>
            <View className="items-center">
              <Text className="text-gray-400 text-xs">REQ</Text>
              <Text className="text-white font-bold">10.5</Text>
            </View>
            <View className="items-center">
              <Text className="text-gray-400 text-xs">Partnership</Text>
              <Text className="text-white font-bold">45(22)</Text>
            </View>
          </View>

          <View className="bg-black/40 rounded-2xl p-3 mt-4">
            <Text className="text-white text-center text-sm">MI needs 16 runs in 10 balls to win.</Text>
          </View>
        </View>

        {/* Recent Matches */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-white font-bold text-lg">Recent Matches</Text>
            <Text className="text-iplNeon text-xs">View All</Text>
          </View>
          <View className="bg-iplCard rounded-2xl p-4 border border-white/5">
            <View className="flex-row justify-between border-b border-white/10 pb-2 mb-2">
              <Text className="text-gray-400 text-xs w-1/3">Match</Text>
              <Text className="text-gray-400 text-xs w-1/3 text-center">Result</Text>
              <Text className="text-gray-400 text-xs w-1/3 text-right">MOM</Text>
            </View>
            <View className="flex-row justify-between py-2">
              <Text className="text-white text-xs font-semibold w-1/3">RCB vs KKR</Text>
              <Text className="text-iplNeon text-xs w-1/3 text-center">KKR won by 7 wkts</Text>
              <Text className="text-gray-300 text-xs w-1/3 text-right">S. Narine</Text>
            </View>
            <View className="flex-row justify-between py-2">
              <Text className="text-white text-xs font-semibold w-1/3">RR vs DC</Text>
              <Text className="text-iplNeon text-xs w-1/3 text-center">RR won by 12 runs</Text>
              <Text className="text-gray-300 text-xs w-1/3 text-right">R. Parag</Text>
            </View>
          </View>
        </View>

        {/* Upcoming Matches */}
        <View className="mb-6">
          <Text className="text-white font-bold text-lg mb-3">Upcoming Matches</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {[ { t1: 'SRH', t2: 'GT', date: 'Tomorrow, 7:30 PM' }, { t1: 'PBKS', t2: 'LSG', date: 'Saturday, 3:30 PM' }].map((match, idx) => (
              <View key={idx} className="bg-iplCard w-64 rounded-2xl p-4 mr-4 border border-white/5 flex-row items-center justify-between">
                <View className="items-center">
                  <View className="w-10 h-10 bg-orange-600 rounded-full items-center justify-center mb-1">
                    <Text className="text-white font-bold text-xs">{match.t1}</Text>
                  </View>
                </View>
                <View className="items-center">
                  <Text className="text-iplPurple font-bold text-xs">VS</Text>
                  <Text className="text-gray-400 text-[10px] mt-1">{match.date}</Text>
                </View>
                <View className="items-center">
                  <View className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center mb-1">
                    <Text className="text-white font-bold text-xs">{match.t2}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Prediction Game CTA */}
        <TouchableOpacity className="bg-gradient-to-r from-iplPurple to-blue-600 rounded-2xl p-4 mb-6 items-center border border-iplNeon/30">
          <Text className="text-white font-bold text-lg mb-1">Predict & Win Food Vouchers!</Text>
          <Text className="text-iplNeon text-sm">Who will hit the next Six?</Text>
        </TouchableOpacity>

        {/* Order Food CTA */}
        <View className="mb-8">
          <Text className="text-white font-bold text-xl mb-4">Match Day Combos 🍔</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {[1, 2, 3].map((item) => (
              <View key={item} className="bg-iplCard w-48 rounded-2xl p-4 mr-4 border border-white/10">
                <View className="h-24 bg-gray-800 rounded-xl mb-3 items-center justify-center">
                  <Text className="text-4xl">🍕</Text>
                </View>
                <Text className="text-white font-bold">Sixer Pizza Combo</Text>
                <Text className="text-iplNeon font-bold mt-1">₹399</Text>
                <TouchableOpacity className="bg-white/10 mt-3 py-2 rounded-lg items-center">
                  <Text className="text-white text-xs font-semibold">Order Now</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
