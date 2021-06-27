import React from 'react';
import { 
    Text, 
    View,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';

import { Background } from '../../components/Background'

import IllustrationIMG from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles'
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export function Signin() {
  const { loading, signIn } = useAuth()

  async function handleSignIn(){
    try{
      await signIn()
    } catch(error){

      Alert.alert(error)
    }
  }

  return (
    <Background>
      <View style={styles.container}>

        <Image 
          source={IllustrationIMG} 
          style={styles.image}
          resizeMode='stretch'
          />

          <View style={styles.content}>
              <Text style={styles.title}>
                  Conecte-se {'\n'}
                  e organize suas {'\n'}
                  jogatinas
              </Text>

              <Text style={styles.subtitle}>
                  Crie grupos para jogar seus games {`\n`}
                  favoritos com seus amigos
              </Text>

              {loading 
              ? 
                < ActivityIndicator color={theme.colors.primary}/> 
              :
                <ButtonIcon 
                  title='Entrar com Discord'
                  onPress={handleSignIn}
                />
              }
          </View>
      </View>
    </Background>
  );
}