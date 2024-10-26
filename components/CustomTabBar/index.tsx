import React from "react";
import { Text, View } from 'react-native';
import { style } from "./style";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from "react-native-gesture-handler";

// Definindo as props como BottomTabBarProps para incluir 'state' e 'navigation'
const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation, descriptors }) => {
    return (
        <View style={style.tabArea}>
            <TouchableOpacity>
                <Text>
                    Ola
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Ola
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Ola
                </Text>
            </TouchableOpacity>
            
            
        </View>
    );
};

export default CustomTabBar;
