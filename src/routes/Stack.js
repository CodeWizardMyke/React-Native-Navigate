import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

import PassoStack from "../components/PassoStack";

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA" >
        <Stack.Screen 
            name="TelaA"
            options={{title:'informaçoes iniciais'}}
        >
            {
                props => (
                    <PassoStack {...props} avancar="TelaB" >
                        <TelaA {...props} />
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaB" >
            {
                props => (
                    <PassoStack {...props} avancar="TelaC" voltar>
                        <TelaB {...props} />
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaC"  voltar >
            {
                props => (
                    <PassoStack {...props}  >
                        <TelaC {...props} />
                    </PassoStack>
                )
            }
        </Stack.Screen>
    </Stack.Navigator>
);
 