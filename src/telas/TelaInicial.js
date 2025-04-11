import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TelaInicial({navigation}) {

  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const dados = await AsyncStorage.getItem("usuario")
        if (dados) {
          setUsuario(JSON.parse(dados))
        }
      } catch (error) {
        console.error('Erro ao carregar os dados', error);
      }
    }
    carregarUsuario()
  }, [])

  function VerificarUsuario() {

    if (!usuario) {
      Alert.alert("Erro", "Dados do usuário não carregados.");
      return;
    }

    if (emailInput === usuario.email && senhaInput === usuario.senha){
      navigation.navigate("TelaPrincipal")
    } else {
      Alert.alert('Erro', 'E-mail ou senha incorretos.');
    }

  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Literária</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input}
          placeholder='Endereço de e-mail'
          value={emailInput}
          onChangeText={setEmailInput}
          keyboardType="email-address"
      />
      <TextInput style={styles.input}
          placeholder='Senha'
          value={senhaInput}
          onChangeText={setSenhaInput}
      />
      <View style={styles.escolha}>
          <TouchableOpacity style={styles.button}
            onPress={VerificarUsuario} >
            <Text style = {{color: 'white', fontSize: 15}}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.cadastro}>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("TelaCadastro")}>
                <Text style = {{color: 'white', fontSize: 15}}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style= {styles.esqueci}>
          <Text>
            Esqueceu sua senha? <Text onPress={() => navigation.navigate("TelaRedefinirSenha")}
                                      style={{color: '#7eaaff'}}
                                >Clique aqui!</Text>
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70
  },
  
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium'
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

  escolha: {
    marginTop: 10
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

  cadastro: {
    borderTopWidth: 1,
    borderColor: 'gray',
  },

  esqueci: {
    top: 100,
  }
});
