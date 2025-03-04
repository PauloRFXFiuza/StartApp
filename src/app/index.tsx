import {useState} from 'react'
import { View, Text, StyleSheet, Alert} from 'react-native'
import {router} from 'expo-router'

import {Button} from '@/components/button'
import {Input} from '@/components/input'

export default function Index() {

    const [name, setName] = useState<string>()

    function handleNext(){
        router.navigate("/dashboard")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}</Text>

            <Input onChangeText={setName}/>

            <Button title="Continuar" onPress={handleNext} activeOpacity={0.3}/>
            
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