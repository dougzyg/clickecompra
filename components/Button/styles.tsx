import { StyleSheet } from "react-native";
import {themas} from '../../global/themes'

export const style = StyleSheet.create({
    
    button:{
        width: 250,
        height: 50,
        alignItems: "center",
        backgroundColor: '#1e90ff',
        borderRadius: 40,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,

    },
    textbutton:{
        fontSize: 16,
        color: '#4169e1',
        fontWeight: 'bold',
    },
    textButton:{
        color: '#191970',

    }
})
