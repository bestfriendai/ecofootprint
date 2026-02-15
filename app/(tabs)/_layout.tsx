import { Tabs } from "expo-router";
import { colors } from "../../src/ui/theme";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textTertiary,
      tabBarStyle: { backgroundColor: colors.background, borderTopColor: colors.border, paddingTop: 4 },
      tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.textInverse,
      headerTitleStyle: { fontWeight: "600", fontSize: 17 },
      headerShadowVisible: false,
    }}>
      <Tabs.Screen name="index" options={{ title: "Dashboard", tabBarIcon: ({ color }) => <Text style={{fontSize:22}}>🏠</Text>, headerTitle: "EcoFootprint" }} />
      <Tabs.Screen name="track" options={{ title: "Track", tabBarIcon: ({ color }) => <Text style={{fontSize:22}}>➕</Text>, headerTitle: "Log Activity" }} />
      <Tabs.Screen name="insights" options={{ title: "Insights", tabBarIcon: ({ color }) => <Text style={{fontSize:22}}>📊</Text>, headerTitle: "Your Impact" }} />
      <Tabs.Screen name="tips" options={{ title: "Tips", tabBarIcon: ({ color }) => <Text style={{fontSize:22}}>💡</Text>, headerTitle: "Eco Tips" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: ({ color }) => <Text style={{fontSize:22}}>⚙️</Text>, headerTitle: "Settings" }} />
    </Tabs>
  );
}

import { View, Text } from "react-native";
