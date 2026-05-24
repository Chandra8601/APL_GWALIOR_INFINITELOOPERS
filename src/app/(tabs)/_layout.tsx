import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00E5FF',
        tabBarInactiveTintColor: '#888888',
        tabBarStyle: {
          backgroundColor: '#0B0B14',
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          height: Platform.OS === 'ios' ? 85 : 65,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Live',
          tabBarIcon: ({ color }) => <Ionicons name="radio-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: 'Hub',
          tabBarIcon: ({ color }) => <Ionicons name="play-circle-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="party"
        options={{
          title: 'Party',
          tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chatbot"
        options={{
          title: 'AI',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
