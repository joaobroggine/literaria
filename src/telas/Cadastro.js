import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleLink = () => Linking.openURL("https://github.com/joaobroggine/literaria")

  async function Salvar() {
    if (!nome || !email || !senha) {
      Alert.alert('Insira as informações corretamente.', 'Todos os campos são obrigatórios.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('E-mail inválido.', 'Por favor, insira um e-mail válido.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Senha muito curta.', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    try {
      const dados = { nome, email, senha };
      await AsyncStorage.setItem('usuario', JSON.stringify(dados));
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate("TelaLogin", {email, senha})
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário.');
      console.error('Erro ao cadastrar:', error);
    }
  }

  return (
    <LinearGradient
      colors={['#A5158C', '#410445', '#2B022E']}
      style={[styles.container]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      >
      <Text style={styles.title}>Criar Conta</Text>
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Nome Completo'
          value={nome}
          onChangeText={(value) => setNome(value)}
          placeholderTextColor="#757575"
        />
        <TextInput
          style={styles.input}
          placeholder='Endereço de e-mail'
          value={email}
          onChangeText={(value) => setEmail(value)}
          keyboardType='email-address'
          placeholderTextColor="#757575"
        />
        <TextInput
          style={styles.input}
          placeholder='Senha (mínimo 6 caracteres)'
          value={senha}
          onChangeText={(value) => setSenha(value)}
          secureTextEntry={true}
          placeholderTextColor="#757575"
        />
      </View>
      <TouchableOpacity style={styles.buttonCadastrar} onPress={Salvar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.secondaryButtonText}>JÁ TENHO UMA CONTA</Text>
      </TouchableOpacity>
      <View style={styles.termos}>
      <Text style={styles.textContainer}>
        Ao criar a conta, você concorda com os{' '}
        <TouchableOpacity onPress={handleLink}>
          <Text style={styles.linkText}>Termos de Serviço<Text style={styles.textContainer}> e a </Text> </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLink}>
          <Text style={styles.linkText}>Política de Privacidade<Text style={styles.textContainer}> da </Text></Text>
        </TouchableOpacity>
        {'Literária'}
      </Text>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginTop: 100,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
    paddingVertical: 20,
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
  buttonCadastrar: {
    backgroundColor: '#F6DC43',
    borderRadius: 12,
    paddingVertical: 15,
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
  secondaryButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.6,
  },
  termos: {
    width: '100%',
  },
  textContainer: {
    color: 'white',
    opacity: 0.6,
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'none',
  },
  linkText: {
    color: 'white',
    opacity: 0.6,
    textDecorationLine: 'underline',
  },
});