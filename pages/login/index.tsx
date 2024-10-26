import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Logo from '../../assets/logo/logo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themas } from '../../global/themes';
import { style } from "./style";
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            if (!email || !senha) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }

            navigation.navigate("BottomRoules")

            console.log('Logado com sucesso');
            // Adicione aqui a lógica de login (ex: chamada de API)
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }finally{
            setLoading(false)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.Logo}
                    resizeMode='contain'
                />
            </View>
            <Text style={style.text}>CLICK&COMPRA</Text>
            <Text style={style.text}>Bem-vindo de volta</Text>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title = "ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName='email'
                />
                <Input
                    value={senha}
                    onChangeText={setSenha}
                    title='PASSWORD'
                    IconRight={Octicons}
                    IconRightName='eye-closed'
                    secureTextEntry={!mostrarSenha}
                    onIconRightPress={() => setMostrarSenha(!mostrarSenha)}
                    />
             </View>
                <View style={style.boxBotton}>
                <Button
                    text='ENTRAR'
                    loading={loading}
                    onPress={getLogin}
                    />
                </View>
            <View>
                <Text style={style.textcriar}>
                    Não tem conta? <Text style={{ color: themas.colors.gray }}>Crie uma!</Text>
                </Text>
            </View>
        </View>
    ); 
}
