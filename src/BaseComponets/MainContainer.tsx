import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
const url ='WWW.jfdifejf/fiej/fejoe..'
export type Props = {

  children: JSX.Element;
};

const MainContainer: React.FC<Props> = ({ children }) => {

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name={'close'} size={24} color="#ffffff" />
        <Text style={{ color: '#ffffff' }}>{url}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Icon name={'share-variant-outline'} color={"#ffffff"} size={20} />

          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={'dots-vertical'} color={"#ffffff"} size={20} style={{ marginLeft: 18 }} />
          </TouchableOpacity>

        </View>
      </View>
      {children}
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#2760B6',
    height:56,
    paddingHorizontal:17,
    width:Dimensions.get('window').width
}
});

export default MainContainer;