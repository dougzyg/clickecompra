import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login/index';
import BottomRoules from './bottom.routes';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: "#fff"
                    }
                }}
            >
                {/* Define the routes for your screens */}
                <Stack.Screen
                    name="Login"
                    component={Login} // Component that will be rendered
                />
                <Stack.Screen 
                    name="BottomRoules"
                    component={BottomRoules} // Another component
                />
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
}