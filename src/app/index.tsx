import { View, Text, StyleSheet, Alert} from 'react-native';
import {Button} from '../components/button';

export default function Index() {

    function handleMessage(){
        const name = "Paulo Fiuza"
        Alert.alert(`Olá ${name}, tudo bem?`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paulo Fiuza, Full Stack Developer</Text>

            <Button/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#453467",
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        color:"red", 
        fontSize: 24,
        fontWeight: "bold",
    }
})