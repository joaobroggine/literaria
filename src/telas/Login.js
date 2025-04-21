import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login({ navigation }) {
  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [usuario, setUsuario] = useState(null);

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
      <Text style={styles.logo}>Literária</Text>
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Endereço de e-mail'
          value={emailInput}
          onChangeText={setEmailInput}
          keyboardType="email-address"
          placeholderTextColor="#757575"
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          value={senhaInput}
          onChangeText={setSenhaInput}
          secureTextEntry={true}
          placeholderTextColor="#757575"
        />
      </View>
      <TouchableOpacity style={styles.buttonEntrar} onPress={VerificarUsuario}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Não tem uma conta?{' '}
          <Text onPress={() => navigation.navigate("TelaCadastro")} style={styles.linkText}>
            Cadastre-se
          </Text>
        </Text>
        <Text style={styles.footerText}>
          Esqueceu sua senha?{' '}
          <Text onPress={() => navigation.navigate("TelaRedefinirSenha")} style={styles.linkText}>
            Clique aqui!
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 36,
    color: '#2C3E50',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
  },
  input: {
    height: 55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#212121',
  },
  buttonEntrar: {
    backgroundColor: '#3498DB',
    width: '100%',
    maxWidth: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 10,
  },
  linkText: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
});