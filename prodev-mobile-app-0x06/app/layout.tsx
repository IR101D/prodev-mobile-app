import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/index" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
        <Tabs.Screen name="profile" options={{
        title: 'Profile',
         headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />
      }} />
    </Stack>
  );
}