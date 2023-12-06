import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font'
//STUDY: expo-font acompanha o processo de carregamento das fontes de texto do sistema

export default function App () {
  const [fontsLoaded] = useFonts({
    'Rawline_400': require('./assets/fonts/rawline-400.ttf')
  })
  //STUDY: useFonts é uma funcao do expo-font que carrega as fontes a serem usadas, retornando vetor

  if (!fontsLoaded) {
    return (
      <View style={styles.container}><Image 
          source = {require("./assets/logo-cvte.png")}
          style = {styles.logo}
        />
      </View>
      //Tela de carregamento
    )
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>
      Fontes Carregadas!
    </Text>
    </View>
  )
}
//STUDY: 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60
  },
  text:{
    fontFamily: 'Rawline_400',
    fontSize: 14
  }
})

/*
STUDY:
PADROES DESIGN SYSTEM
Permitido colocar logo do proprio servico
Fonte padrao: rawline
Expressas os tamanhos da fonte em px (fonte base) e em (restante dos tamanhos)
Uso, a principio da escala tipografica escolhida pelo Design System
(nao obrigatorio): Minor third (1,2)
*/

/*
STUDY
<View style={styles.container}>
      <Image 
        source = {require("./assets/logo-cvte.png")}
        style = {styles.logo}
      />
      <Text style={styles.text}>
        Aplicativo CVT-E
      </Text>
    </View>*/