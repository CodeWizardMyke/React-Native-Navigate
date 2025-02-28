import {React} from 'react';
import {View, Text} from "react-native";
import { Button } from 'react-native-web';

export default props => (
    <View style={{flex:1}}>
        <View>
            { props.avancar 
                ?   <Button 
                        title='Avancar'
                        onPress={()=> props.navigation.navigate(props.avancar) }
                    /> 
                : false 
            }
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View> 
    </View>
)