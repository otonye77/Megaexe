import { StyleSheet, View, Text, TextInput, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Register = () => {
    return (
        <View style={styles.registerContainer}>
            <TextInput placeholder="email"  style={styles.textInput} />
            <Text>THIS IS THE REGISTER PAGE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#F7F8FA',
    },
    textInput: {
        width: width * 0.8, // 80% of the screen width
        height: 40,
        borderColor: "#FFFFFF",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20, 
    },
});

export default Register;
