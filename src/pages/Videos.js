import { View, Text, StyleSheet } from 'react-native'

export default function Videos() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Aqui serao exibidas os vídeos
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