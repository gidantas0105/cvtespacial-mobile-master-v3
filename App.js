import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useFonts } from 'expo-font'
//STUDY: expo-font acompanha o processo de carregamento das fontes de texto do sistema
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fotos from './src/pages/Fotos'
import Materiais from './src/pages/MateriaisDidaticos'
import Noticias from './src/pages/Noticias'
import Praticas from './src/pages/Praticas'
import Videos from './src/pages/Videos'
import DiaEspacial from './src/pages/DiaEspacial'
import { Dimensions } from 'react-native';

function HomeScreen({navigation}) {
  const [fontsLoaded] = useFonts({
    'Rawline_400': require('./assets/fonts/rawline-400.ttf')
  })

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Imagem cvt</Text>
        <Image 
          source = {require("./assets/cropped-cvt-branco-3.png")}
          style = {styles.logo}
        />
      </View>
      //Tela de carregamento
    )
  }//TO-DO: este bloco da erro ao ser renderizado. corrigir.

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CVT-Espacial</Text>
      <Button
        title='Fotos'
        color={'#1351B4'}
        onPress={ () => navigation.navigate('Fotos')}
      />
      <Button
        title='Materiais Didáticos'
        color={'#1351B4'}
        onPress={ () => navigation.navigate('Materiais')}
      />
      <Button
        title='Notícias'
        color={'#1351B4'}
        onPress={ () => navigation.navigate('Noticias')}
      />
      <Button
        title='Práticas'
        color={'#1351B4'}
        onPress={ () => navigation.navigate('Praticas')}
      />
      <Button
        title='Vídeos'
        color={'#1351B4'}
        onPress={ () => navigation.navigate('Videos')}
      />
      <Button
        title='Dia Espacial'
        color={'#1351B4'}
        onPress={ () => navigation.navigate('Dia Espacial')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'Tela Inicial'}} />
        <Stack.Screen
          name="Fotos"
          component={Fotos}
        />
        <Stack.Screen
          name="Materiais"
          component={Materiais}
        />
        <Stack.Screen
          name="Noticias"
          component={Noticias}
        />
        <Stack.Screen
          name="Praticas"
          component={Praticas}
        />
        <Stack.Screen
          name="Videos"
          component={Videos}
        />
        <Stack.Screen
          name="Dia Espacial"
          component={DiaEspacial}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flex: 1,
    height: Dimensions.get('screen').height,
    padding: 18, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 200,
    height: 200
  },
  text:{
    fontFamily: 'Rawline_400',
    fontSize: 14,
    color: '#333333'
  }});

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
