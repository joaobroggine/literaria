import React, { use, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

export default function TelaInicial({ navigation }) {

  const gradientStartX = useSharedValue(0)
  const gradientStartY = useSharedValue(0)
  const gradientEndX = useSharedValue(1)
  const gradientEndY = useSharedValue(1)

  useEffect(() => {
    gradientStartX.value = withRepeat(withTiming(1, { duration: 5000, easing: Easing.linear }), -1, true);
    gradientStartY.value = withRepeat(withTiming(1, { duration: 6000, easing: Easing.linear }), -1, true);
    gradientEndX.value = withRepeat(withTiming(0, { duration: 5500, easing: Easing.linear }), -1, true);
    gradientEndY.value = withRepeat(withTiming(0, { duration: 6500, easing: Easing.linear }), -1, true);
  })

  const animatedGradientStyle = useAnimatedStyle(() => ({
    start: { x: gradientStartX.value, y: gradientStartY.value},
    end: { x: gradientEndX.value, y: gradientEndY.value}
  }))

  return (
    <Animated.View style={[styles.container]} >
      <LinearGradient
        colors={['#A5158C', '#410445', '#2B022E']}
        style={[styles.linearGradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/poster.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Organize seus estudos e alcance seus objetivos!
        </Text>
        <Text style={styles.subtitle}>
          Acompanhe seu progresso de forma inteligente e eficiente.
        </Text>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('TelaCadastro')}
        >
          <Text style={styles.primaryButtonText}>COMEÇAR AGORA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
          <Text style={styles.secondaryButtonText}>JÁ TENHO UMA CONTA</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  image: {
    width: 450,
    height: undefined,
    aspectRatio: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#F6DC43',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8,
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#F6DC43',
    borderRadius: 12,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  primaryButtonText: {
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
});