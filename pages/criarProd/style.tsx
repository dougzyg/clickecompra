import { Dimensions, StyleSheet, TextInput } from "react-native";
import {themas} from '../../global/themes'



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    imagePicker: {
        alignItems: 'center',
        marginVertical: 15,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    imagePlaceholder: {
        fontSize: 16,
        color: '#aaa',
    },
});
