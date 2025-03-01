import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Stack from './Stack'
import Tab from './Tab'
import Drawer from './Drawer'

export default function App() {
    const [toggleNavigate, setToggleNavigate] = useState('Stack');
    const [navType, setNavType] = useState(<Stack />);

    useEffect(() => {
        let defaultNavigate = <Stack />

        toggleNavigate === "Stack"  ? defaultNavigate = <Stack />  : "";
        toggleNavigate === "Tab"    ? defaultNavigate = <Tab />    : "";
        toggleNavigate === "Drawer" ? defaultNavigate = <Drawer /> : "";

        setNavType(defaultNavigate);
    }, [toggleNavigate]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={
                    { 
                        backgroundColor: "#DDD", 
                        padding: 10, 
                        alignItems: "center" 
                    }
            }>
                <Text>Seleção da forma de navegação</Text>
                <View style={
                    { 
                        flexDirection: 'row', 
                        justifyContent: 'space-evenly', 
                        width: '100%',
                        paddingTop: 15 
                    }
                }>
                    <Button title='Stack'  onPress={() => setToggleNavigate("Stack")}  />
                    <Button title='Tab'    onPress={() => setToggleNavigate("Tab")}    />
                    <Button title='Drawer' onPress={() => setToggleNavigate("Drawer")} />
                </View>
            </View>

            <NavigationContainer>
                {navType}
            </NavigationContainer>
            
        </SafeAreaView>
    )
}
