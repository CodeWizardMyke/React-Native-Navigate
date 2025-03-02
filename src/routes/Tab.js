import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
                case "TelaA":
                    iconName = focused
                    ? 'home-outline'
                    : 'home-outline';
                    break;
                case "TelaB":
                    iconName = focused
                    ? 'timer-outline'
                    : 'timer-outline';
                    break;
                case "TelaC":
                    iconName = focused
                    ? 'pricetags-outline'
                    : 'pricetags-outline';
                    break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}
        tabBarOptions={{
            activeTintColor:"red",
            inactiveTintColor:"blue",
            labelStyle:{fontSize:30}
        }} 
    >
        <Tab.Screen 
            name="TelaA"
            options={{title:'Tela inicial'}}
            component={TelaA} 
        />
        <Tab.Screen 
            name="TelaB" 
            component={TelaB} 
            options={{title:"Tela central"}}
        />
        <Tab.Screen 
            name="TelaC" 
            options={{title:"Tela final"}}
            component={TelaC} 
        />
    </Tab.Navigator>
);
 