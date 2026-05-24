import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { fetchLiveMatches, LiveMatchData } from '../../services/cricapi';

export default function HomeScreen() {
  const [liveMatch, setLiveMatch] = useState<LiveMatchData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMatch = async () => {
      const matches = await fetchLiveMatches();
      if (matches.length > 0) {
        // Find a match that is live, or just default to the first one
        const currentLive = matches.find(m => m.status.toLowerCase().includes('live')) || matches[0];
        
        // Force the API data to display as DC vs KKR
        currentLive.team1 = "Delhi Capitals";
        currentLive.team2 = "Kolkata Knight Riders";
        currentLive.name = "Delhi Capitals vs Kolkata Knight Riders, Final, IPL 2026";
        
        setLiveMatch(currentLive);
      }
      setLoading(false);
    };
    loadMatch();
    
    // Poll every 30 seconds
    const interval = setInterval(loadMatch, 30000);
    return () => clearInterval(interval);
  }, []);

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
          
          {loading ? (
             <View className="items-center justify-center h-48">
               <ActivityIndicator color="#00E5FF" size="large" />
               <Text className="text-gray-400 mt-4">Fetching Live Scores...</Text>
             </View>
          ) : liveMatch ? (
             <>
                <View className="flex-row justify-between items-center mb-4">
                  <View className="bg-iplAccent px-3 py-1 rounded-full">
                    <Text className="text-white text-xs font-bold uppercase tracking-widest">● {liveMatch.matchType}</Text>
                  </View>
                  <Text className="text-gray-400 text-[10px] w-3/5 text-right" numberOfLines={1}>{liveMatch.name}</Text>
                </View>

                <View className="flex-row justify-between items-center my-2">
                  <View className="items-center w-24">
                    <View className="w-16 h-16 bg-blue-900 rounded-full items-center justify-center border-2 border-blue-500 mb-2">
                      <Text className="text-white font-bold text-sm text-center" numberOfLines={1}>{liveMatch.team1.substring(0,3).toUpperCase()}</Text>
                    </View>
                    <Text className="text-white font-bold text-sm text-center">{liveMatch.team1Score.split(' ')[0]}</Text>
                    <Text className="text-gray-400 text-[10px]">{liveMatch.team1Score.split(' ')[1] || ''}</Text>
                  </View>

                  <View className="items-center flex-1">
                    <Text className="text-iplNeon font-black text-2xl">VS</Text>
                  </View>

                  <View className="items-center w-24">
                    <View className="w-16 h-16 bg-purple-900 rounded-full items-center justify-center border-2 border-yellow-400 mb-2 shadow-lg shadow-purple-500/50">
                      <Text className="text-yellow-400 font-bold text-sm text-center" numberOfLines={1}>{liveMatch.team2.substring(0,3).toUpperCase()}</Text>
                    </View>
                    <Text className="text-white font-bold text-sm text-center">{liveMatch.team2Score.split(' ')[0]}</Text>
                    <Text className="text-gray-400 text-[10px]">{liveMatch.team2Score.split(' ')[1] || ''}</Text>
                  </View>
                </View>

                <View className="bg-black/40 rounded-2xl p-3 mt-4">
                  <Text className="text-white text-center text-xs font-semibold">{liveMatch.status}</Text>
                </View>
             </>
          ) : (
             <View className="items-center justify-center h-48">
               <Text className="text-white">No Live Matches Available 🏏</Text>
             </View>
          )}
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
