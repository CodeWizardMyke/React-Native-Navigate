import {React} from 'react';
import {View, Text} from "react-native";
import { Button } from 'react-native-web';

export default props => (
    <View style={{flex:1}}>
        <View style={{ flexDirection:'row-reverse', justifyContent:"space-between" }}>
            { props.avancar 
                ?   <Button 
                        title='Avancar'
                        onPress={()=> props.navigation.navigate(props.avancar) }
                    /> 
                : "." 
            }
            { props.voltar 
                ?   <Button 
                        title='Voltar'
                        onPress={()=> props.navigation.navigate(props.voltar) }
                    /> 
                : "."
            }
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View> 
    </View>
)