import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Cadastro() {

    const [email,SetEmail] = useState("")
    const [senha,SetSenha] = useState("")

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Cadastro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
