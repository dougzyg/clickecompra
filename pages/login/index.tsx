import {StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { style } from "./style"
import Logo from '../../assets/logo/logo.png'
export default function Login(){
    return(
        <View style = {style.container}>

        <View style = {style.boxTop}>
        <Image
            source={Logo}
            style ={style.Logo}
            resizeMode='contain'
            />
        </View>
        <Text style={style.text}>CLICK&COMPRA</Text>
        <Text style = {style.text}> Bem vindo de volta </Text>
        <View style = {style.boxMid}>
        <Text style={style.titleInput}>aaaaaaa</Text>
        <TextInput/>
        <Text style={style.titleInput}>aaaaaaa</Text>
        <TextInput/>
        </View>
        <View style ={style.boxBotton}>
            
        </View>
        </View>
    )
}