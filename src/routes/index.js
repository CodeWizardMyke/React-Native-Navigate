import React, { useState } from 'react'

import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Stack from './Stack'
//import Tab from './Tab'

export default props => {
    const [toggleNavigate, setToggleNavigate] = useState('Stack');

    return (
        <SafeAreaView ew style={{flex:1}} >
            <NavigationContainer>
                <Stack/>
            </NavigationContainer>
        </SafeAreaView>
    )
}