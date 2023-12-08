import { View, Text, StyleSheet } from 'react-native'

export default function DiaEspacial() {
    const conectado_a_rede = false

    if(!conectado_a_rede) {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Voce nao esta conectado à rede local do CVT-E
                </Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Aqui serao exibidas as ferramentas a serem usadas pelos alunos durante Dias Espaciais.
                Para acessar essa tela, haverá uma condicional conferindo se o dispositivo está conectado à rede local do CVT-E.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f8f8f8',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      fontFamily: 'Rawline_400',
      fontSize: 14,
      color: '#333333'
    }});