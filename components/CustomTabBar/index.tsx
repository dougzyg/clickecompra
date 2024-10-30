import React from "react";
import { Text, View } from 'react-native';
import { style } from "./style";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';



const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation, descriptors }) => {
    return (
        <View style={style.tabArea}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        style={style.tabItem}
                        onPress={onPress}
                    >
                        {route.name === 'List' && (
                            <AntDesign name="bars" style={{ fontSize: 32 }} color={isFocused ? 'blue' : 'gray'} />
                        )}
                        {route.name === 'User' && (
                            <Entypo name="plus" style={{ fontSize: 32 }} color={isFocused ? 'blue' : 'gray'} />
                        )}
                        {route.name === 'Anuncio' && (
                            <FontAwesome name= "bars" style={{ fontSize: 32 }} color={isFocused ? 'blue' : 'gray'} />
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;
