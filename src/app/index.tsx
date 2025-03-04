import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paulo Fiuza, Full Stack Developer</Text>
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