import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Provider} from 'react-redux'
import store from './src/redux/store'

import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';


const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}