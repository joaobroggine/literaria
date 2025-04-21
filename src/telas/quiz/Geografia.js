import React, { useState, useEffect } from 'react'
import API from '../../API_KEY'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function Geografia() {
  const [questaoAtual, setQuestaoAtual] = useState(null)
  const [opcoes, setOpcoes] = useState([])
  const [pontos, setPontos] = useState(0)

  async function carregarQuestao() {
    const APIUrl = API + "&category=22";
    try {
      const resultado = await fetch(`${APIUrl}`);
      const data = await resultado.json();
      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const questaoAleatoria = data.results[randomIndex];
        setQuestaoAtual(questaoAleatoria);
        const todasOpcoes = [...questaoAleatoria.incorrect_answers, questaoAleatoria.correct_answer];
        setOpcoes(embaralharArray(todasOpcoes));
      } else {
        console.log("Nenhuma questão encontrada na API.");
      }
    } catch (error) {
      console.error("Erro ao carregar a questão:", error);
    }
  }

  function embaralharArray(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    carregarQuestao()
  }, []);

  function handleOpcaoPress(opcaoSelecionada) {
    if (questaoAtual && opcaoSelecionada === questaoAtual.correct_answer) {
      console.log("Resposta Correta!")     
      incrementar()
    } else {
      console.log("Resposta Incorreta!")
    }
    carregarQuestao()
  }

  function incrementar() {
    setPontos(prev => prev + 1)
  }

  if (!questaoAtual) {
    return (
      <LinearGradient
        colors={['#A5158C', '#410445', '#2B022E']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Carregando questão...</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#A5158C', '#410445', '#2B022E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.titleBox}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Geografia</Text>
        </View>
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Pontos: {pontos}</Text>
        </View>
        <View style={styles.textTitleBox}>
          <Text style={styles.questionText}>{questaoAtual.question}</Text>
        </View>
        <View style={styles.optionsContainer}>
          {opcoes.map((opcao, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleOpcaoPress(opcao)}
            >
              <Text style={styles.optionText}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    backgroundColor: 'white',
    width: 340,
    height: 600,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  textTitleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
});