import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaPrincipal from "./TelaPrincipal";
import Opcoes from "./Opcoes";
import FontsAwesome from "react-native-vector-icons/FontAwesome5"
import Perfil from "./Perfil";
import Creditos from "./Creditos";

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgb(218, 193, 56)',
          borderTopWidth: 0,
          width: '100%',
          height: 60,
          
        },
        tabBarActiveTintColor: '#FF2DF1',
        tabBarInactiveTintColor: '#410445',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginBottom: 3,
          marginTop: 2
        },
      }}
    >
      <Tab.Screen name="Estudar" component={TelaPrincipal}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontsAwesome name="graduation-cap" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Perfil" component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontsAwesome name="user-alt" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Eventos" component={Creditos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontsAwesome name="bullhorn" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Missões" component={Opcoes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontsAwesome name="trophy" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Assinatura" component={Creditos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontsAwesome name="credit-card" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}