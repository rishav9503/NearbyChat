import * as React from 'react';
import { Image, StyleSheet, View,Text } from 'react-native';

interface AppProps {
    imageHeight:number
}

const Logo: React.FC<AppProps> = ({imageHeight}) => {
  return (
    <View style={styles.logo}>
        <Text style={[styles.logoText,{ height:imageHeight}]}>LOGO</Text>
    </View>
  );
};
export default Logo;
const styles =StyleSheet.create({
    logo:{
       
        width:100,
        backgroundColor:'#D6E6FF',
        // justifyContent:'center',
        alignItems:'center',
    },
    logoText:{
        marginTop:'46%',
        fontSize:20,
        fontWeight:'400',
    }
})