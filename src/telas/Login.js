import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
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
    <LinearGradient
      colors={['#A5158C', '#410445', '#2B022E']}
      style={[styles.container]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
      <Text style={styles.logo}>Login</Text>
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
  },
  input: {
    height: 55,
    backgroundColor: '#F6DC43',
    borderWidth: 1,
    borderColor: '#F6DC43',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#212121',
    elevation: 3
  },
  buttonEntrar: {
    backgroundColor: '#F6DC43',
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 20,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#410445',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 10
  },
  linkText: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
});