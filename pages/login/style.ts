import { Dimensions, StyleSheet, TextInput } from "react-native";
import {themas} from '../../global/themes'

export const style = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: "center",
        justifyContent: 'flex-end',
        backgroundColor: '#00008b',
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
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
        height: Dimensions.get('window').height/4,
        width: '30%',
        alignItems: "center",
        
    },
    Logo:{ width: 150,
        height: 360,
        //alignContent: 'center',

    },
    text:{
        fontWeight: 'condensed',
        marginTop: 15,
        fontSize: 18,
        color: '#00ced1',
        
        
    },
 
    textbutton:{
        fontSize: 10,
        color: '#00bfff',
        fontWeight: 'bold',
    },
    textcriar:{
        fontSize: 20,
        color: '#00ffff',
    
    }

})