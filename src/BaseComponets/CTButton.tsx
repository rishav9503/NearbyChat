import * as React from 'react';
import {TouchableOpacity, TextInput, StyleSheet,View, Text, TouchableOpacityProps} from 'react-native'
type ButtonProps ={
    disabled:boolean
} & TouchableOpacityProps

const CtButton =({disabled, ...props}: ButtonProps)=>{
        return(
              <TouchableOpacity style={[styles.buttonContainer, {backgroundColor:!disabled? '#2760B6':'#EFEFEF'}]} {...props} >
                    <Text style={[styles.buttonLabel, {color:!disabled? '#ffffff':'#646464'}]}>
                        CONTINUE
                    </Text>
              </TouchableOpacity>
        )
}

export default CtButton;
const styles=StyleSheet.create({
    buttonContainer:{
        height:60,
        borderRadius:12,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonLabel:{
        color:'#ffffff',
        fontWeight:'700',
        fontSize:14,

    }

})