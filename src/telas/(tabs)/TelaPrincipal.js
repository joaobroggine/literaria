import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function TelaPrincipal({navigation}) {

  const [nomeInput, setNomeInput] = useState('');
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const dados = await AsyncStorage.getItem("usuario")
        if (dados) {
          const userData = JSON.parse(dados);
          setUsuario(userData);
          setNomeInput(userData.nome);
        }
      } catch (error) {
        console.error('Erro ao carregar os dados', error);
      }
    }
    carregarUsuario()
  }, [])

  return (  
      <LinearGradient
        colors={['#A5158C', '#410445', '#2B022E']}
        style={[styles.container]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View>
          <Text style={styles.title}>Olá {nomeInput}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Geografia')}>
            <Text>Quiz</Text>
          </TouchableOpacity>
        </View>
        <View>
      
        </View>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }

})
