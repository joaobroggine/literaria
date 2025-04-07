import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Cadastro() {

    const [nome, setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    async function Salvar() {

      if (!nome || !email || !senha) {
        Alert.alert("Insira as informações corretamente.")
        return
      }

      try {
        const dados = {nome, email, senha}
        await AsyncStorage.setItem("usuario", JSON.stringify(dados))
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!")
        console.log(dados)
      } catch (error) {
        Alert.alert("Erro", "Usuário não conseguiu se cadastrar.")
      }
    }

  return (
    <View style={styles.container}>
        <Text style = {{fontSize: 35, borderBottomWidth: 1, paddingBottom: 10, width: 300, textAlign: 'center'}}
        >Cadastro</Text>
        <StatusBar style="auto" />
        <View style = {{paddingVertical: 20}}>
          <TextInput style={styles.input}
          placeholder='Digite seu nome'
          value={nome}
          onChangeText={(value) => setNome(value)}
          />
          <TextInput style={styles.input}
          placeholder='Digite seu email'
          value={email}
          onChangeText={(value) => setEmail(value)}
          />
          <TextInput style={styles.input}
          placeholder='Digite sua senha'
          value={senha}
          onChangeText={(value) => setSenha(value)}
          />
        </View>
        <TouchableOpacity style={styles.button}
        onPress={Salvar}>
          <Text style = {{color: 'white', fontSize: 15}}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },

  input: {
    height: 50,
    width: 250,
    backgroundColor: ' #E9DFC3',
    borderWidth: 2,
    borderColor: 'rgb(224, 214, 190)',
    borderRadius: 10,
    marginTop: 30,
  },

  button: {
    marginVertical: 20,
    backgroundColor: '#1B56FD',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1B56FD',
    borderRadius: 20,
  },
})
