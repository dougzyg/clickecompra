import { Dimensions, StyleSheet, TextInput } from "react-native";
import {themas} from '../../global/themes'

export const style = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: "center",
        justifyContent: 'flex-end',
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '20%',
        //backgroundColor: 'white',
        alignItems: 'center',
       
    },
    boxMid: {
        height: Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor: 'green',
        paddingHorizontal: 28,
        //alignContent: 'center',
    },
    boxBotton:{
        height: Dimensions.get('window').height/3,
        width: '50%',
        alignItems: "center",
        //backgroundColor: 'blue',
    },
    Logo:{ width: 150,
        height: 360,
        //alignContent: 'center',

    },
    text:{
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 18,
        
        
    },
 
    button:{
        width: 30,
        height: 30,
        alignItems: "center",
        backgroundColor: themas.colors.lightGray,
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
        fontSize: 10,
        color: 'blue',
        fontWeight: 'bold',
    },
    textcriar:{
        fontSize: 20,
        color: 'blue',
    
    }

})