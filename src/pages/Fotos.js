import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
const templateBase = require('./base.html');
import { Dimensions } from 'react-native';
const LARGURA = Dimensions.get('screen').width;

export default function Fotos() {
    return(
        <View style={styles.container}>
            <WebView source={{ uri: 'localhost:3333/sobre-o-cvte.html'}} 
            style={styles.webView} />
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
    },
    webView: {
        width: LARGURA
    }
});