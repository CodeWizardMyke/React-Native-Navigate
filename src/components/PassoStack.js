import {React} from 'react';
import {View} from "react-native";
import { Button } from 'react-native-web';

export default props => (
    <View style={{flex:1}}>
        <View style={{ flexDirection:'row-reverse', justifyContent:"space-between" }}>
            { props.avancar 
                ?   <Button 
                        title='Avancar'
                        /*
                            the code navigates through the pages of the stack and received a string as a parameter in props
                            onPress={()=> props.navigation.navigate(props.avancar) }
                        */

                            //add new screen of the same component
                            onPress={()=> props.navigation.navigate(props.avancar) }
                    /> 
                : false
            }
            { props.voltar 
                ?   <Button 
                        title='Voltar'
                       // onPress={()=> props.navigation.navigate(props.voltar) }
                       onPress={() => props.navigation.goBack()}
                    /> 
                : false
            }
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View> 
    </View>
)