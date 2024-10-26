import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './teste';
import {styles} from './style'; 

export default function CreateProduct() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState<string | null>(null);

 
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    };

    const handleCreateProduct = () => {
        console.log({ productName, description, price, username, image });
        navigation.navigate('List'); 
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Text style={styles.imagePlaceholder}>Clique para adicionar imagem</Text>
                )}
            </TouchableOpacity>
            
            <TextInput
                style={styles.input}
                placeholder="Nome do Usuário"
                value={username}
                onChangeText={setUsername}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={productName}
                onChangeText={setProductName}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            
            <TextInput
                style={styles.input}
                placeholder="Preço"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />

            <Button title="Criar Produto" onPress={handleCreateProduct} />
        </View>
    );
}
