import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TelaInicial({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Literária</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input}
          placeholder='Endereço de e-mail'
      />
      <TextInput style={styles.input}
          placeholder='Senha'
      />
      <View style={styles.escolha}>
          <TouchableOpacity style={styles.button}>
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
