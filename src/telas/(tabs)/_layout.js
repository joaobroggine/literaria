import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaPrincipal from "./TelaPrincipal";
import Opcoes from "./Opcoes";
import Entypo from "react-native-vector-icons/Entypo"
import Perfil from "./Perfil";
import Fontisto from "react-native-vector-icons/Fontisto"
import Ionicons from "react-native-vector-icons/Ionicons"
import Creditos from "./Creditos";

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#F6DC43',
                borderTopWidth: 0,
                position: 'absolute',
                marginHorizontal: '11%',
                bottom: 50,
                borderRadius: 100,
                height: 60,
                width: 300,
                paddingTop: 2
            },
            tabBarActiveTintColor: '#FF2DF1',
            tabBarInactiveTintColor: '#410445',
            tabBarLabelStyle: {
                fontSize: 12,
              },
        }}
    >
      <Tab.Screen name="Início" component={TelaPrincipal}
        options={{tabBarIcon: ({color, size}) => {
            return <Entypo name="home" size={20} color={'black'}/>
                }}}/>
      <Tab.Screen name="Perfil" component={Perfil} 
        options={{tabBarIcon: ({color, size}) => {
            return <Ionicons name="people" size={20} color={'black'}/>
                }}}/>
      <Tab.Screen name="Configurações" component={Opcoes} 
        options={{tabBarIcon: ({color, size}) => {
            return <Fontisto name="player-settings" size={20} color={'black'}/>
                }}}/>
      <Tab.Screen name="Criador" component={Creditos} 
        options={{tabBarIcon: ({color, size}) => {
            return <Entypo name="info" size={20} color={'black'}/>
                }}}/>
    </Tab.Navigator>
  );
}