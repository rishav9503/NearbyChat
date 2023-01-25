import * as React from 'react';
import {TextInputProps, TextInput, StyleSheet,View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type InputProps ={
    label:string,
    showCheck?:boolean,
    marginUp?:number

} & TextInputProps;


const CtInput = React.forwardRef<TextInput, InputProps>(({label,marginUp,showCheck=false, ...props }:InputProps, ref) => {
    return (

        <View style={{marginTop:marginUp}}>
            <Text style={styles.label}>{label}</Text>
            <TextInput ref={ref} {...props} />
            {showCheck && (<Icon name="check-circle-outline" size={24} color={'#265F46'} style={{ position: 'absolute', right: 8, top: 30 }} />)}
        </View>


    )})



export default CtInput;
const styles=StyleSheet.create({

    label:{
        fontSize:11,
        color:'#4f4f4f',
        textAlignVertical:'center',
        marginBottom:3
    }

})