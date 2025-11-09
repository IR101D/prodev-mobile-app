import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false
    }} >
      
        <Tabs.Screen name="profile" options={{
        title: 'Profile',
         headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />
      }} />
    </Tabs>
  )
}

export default HomeRootLayout;
