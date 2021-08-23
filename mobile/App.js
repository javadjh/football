import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import StackNavigation from "./app/containers/StackNavigation";
import {Provider} from "react-redux";
import {store} from "./app/stateManager/store/indexStore";
const App = ()=>{
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigation/>
            </NavigationContainer>
        </Provider>
    );
}

export default App
