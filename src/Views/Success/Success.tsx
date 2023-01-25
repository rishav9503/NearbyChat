import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
export interface AppProps {
}

export interface AppState {
}

export default class SuccessScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
         <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
               <Icon name={'check'} color='#188748' size={70} />
          </View>
                
         </View>

         <Text style={styles.successText}>Onboarding Successfull</Text>
      </View>
    );
  }
}
const styles =StyleSheet.create({
    MainContainer:{
        backgroundColor:'#188748',
        flex: 1,
        justifyContent:'center',
        alignItems:'center'

    },
    outerContainer:{
            height:120,
            width:120,
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            borderRadius:60,
            justifyContent:'center',
            alignItems:'center',
    },
    innerContainer:{
      height:90,
      width:90,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ffffff',
      borderRadius:45
    },
    successText:{
      marginTop:24,
      color:'#ffffff',
      fontWeight:'400',
      fontSize:20,
    }
})
