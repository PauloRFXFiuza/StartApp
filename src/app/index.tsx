import {useState} from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import {Button} from '@/components/button';
import {Input} from '@/components/input';

export default function Index() {

    const [name, setName] = useState<string>()

    function handleMessage(){
        const name = "Paulo Fiuza"
        Alert.alert(`Olá ${name}, tudo bem?`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}</Text>

            <Input onChangeText={(text) => setName(text)}/>

            <Button title="Entrar" onPress={handleMessage} activeOpacity={0.3}/>
            <Button title="Sair" onPress={handleMessage} activeOpacity={0.3}/>
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
        gap: 16,
    },
    title:{
        color:"red", 
        fontSize: 24,
        fontWeight: "bold",
    }
})