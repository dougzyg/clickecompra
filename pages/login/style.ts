import { Dimensions, StyleSheet, TextInput } from "react-native";
import {themas} from '../../global/themes'

export const style = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
       
    },
    boxMid: {
        height: Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor: 'green',
        paddingHorizontal: 37,
    },
    boxBotton:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: 'blue',
    },
    Logo:{ width: 150,
        height: 400,

    },
    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,
    },
    titleInput:{
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop: 20,
    }
})