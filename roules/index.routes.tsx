import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login/index';
import BottomRoules from './bottom.roules'

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor:"#fff"
                }
            }}
            >
            {/* Defina a rota para suas telas */}
            <Stack.Screen
                name="Login"
                component={Login} // Componente que será renderizado
            />
             <Stack.Screen 
                name="BottomRoules"
                component={BottomRoules} // Outro componente
            />
        </Stack.Navigator>
    );
}
