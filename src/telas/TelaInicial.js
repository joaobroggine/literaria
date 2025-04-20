import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function TelaInicial({navigation}) {
  return (
    <View style={styles.container}> 
        <Image
          source={require('../../assets/images/people.png')}
          style={{ width: 300, height: 300 }}
        />
        <Text style={styles.text}>
          Organize seus estudos, acompanhe seu progresso e alcance seus objetivos de forma inteligente e eficiente.
        </Text>
        <View style={styles.buttonArea}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("TelaCadastro")}
          >
            <Text style={styles.text2}>INGRESSAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate("TelaLogin")}
          >
            <Text style={styles.text3}>EU JÁ TENHO UMA CONTA</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#410445',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 10
  },
  text2: {
    color: '#F6DC43',
    fontSize: 20,
    fontFamily: 'Poppins',
    textAlign: 'center',
    padding: 10
  },
  text3: {
    color: '#F6DC43',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20
  },
  buttonArea: {
    marginTop: 50,
    marginVertical: 50,
    marginTop: 100
  },

  button: {
    backgroundColor: '#A5158C',
    borderWidth: 1,
    borderColor: '#410445',
    borderRadius: 10,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
