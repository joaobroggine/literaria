import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function TelaPrincipal({ navigation }) {
  const [nomeInput, setNomeInput] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [moedas, setMoedas] = useState(150);
  const [ofensiva, setOfensiva] = useState(0);

  const VestibularItens = ({ title, iconName, iconType, onPress }) => (
    <TouchableOpacity style={styles.quizItem} onPress={onPress}>
      <View style={styles.quizIcon}>
        {iconType === 'FontAwesome' && <FontAwesome name={iconName} size={30} color={'#fff'} />}
        {iconType === 'MaterialIcons' && <MaterialIcons name={iconName} size={30} color={'#fff'} />}
        {iconType === 'Ionicons' && <Ionicons name={iconName} size={30} color={'#fff'} />}
        {iconType === 'Entypo' && <Entypo name={iconName} size={30} color={'#fff'} />}
        {iconType === 'AntDesign' && <AntDesign name={iconName} size={30} color={'#fff'} />}
      </View>
      <Text style={styles.quizTitle}>{title}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const dados = await AsyncStorage.getItem("usuario");
        if (dados) {
          const userData = JSON.parse(dados);
          setUsuario(userData);
          setNomeInput(userData.nome);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados', error);
      }
    }
    carregarUsuario();
  }, []);

  return (
    <LinearGradient
      colors={['#A5158C', '#410445', '#2B022E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.header}>
        <View style={styles.infobox}>
          <View style={styles.buttonbox}>
            <FontAwesome name='gem' size={24} color={'cyan'} />
            <Text style={styles.infoText}>{moedas}</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.buttonbox2}>
            <FontAwesome name='fire-flame-simple' size={24} color={'gray'} />
            <Text style={styles.infoText}>{ofensiva}</Text>
          </View>
        </View>
        <Text style={styles.greeting}>Olá, {nomeInput || 'Usuário'}!</Text>
      </View>
      <View style={styles.vestibularBox}>
        <Text style={styles.vestibularText}>
          <FontAwesome name='book' size={24} color={'rgb(238, 211, 59)'} />  Vestibular
        </Text>
        <View style={styles.grid}>
          <VestibularItens
            title="Matemática"
            iconName="pi-box"
            iconType="MaterialIcons"
            onPress={() => navigation.navigate('Quiz')}
          />
        </View>
      </View>
    </LinearGradient>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 40,
    },

    header: {
      width: '100%',
      paddingHorizontal: 20,
      marginBottom: 20,
    },

    infobox: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 10,
      paddingVertical: 10,
      marginBottom: 15,
    },

    buttonbox: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    buttonbox2: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10
    },

    infoText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 8,
    },

    separator: {
      width: 2,
      height: '80%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      marginTop: 3.2,
      marginRight: 5
    },

    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
      textAlign: 'center',
    },

    vestibularBox: {
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 10,
      width: '92%',
      height: 300,
      padding: 20,
    },

    vestibularText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25
    },

    grid: {
      flex: 3,
      width:'100%',
      height: '90%',
      backgroundColor: 'red'
    },
  });