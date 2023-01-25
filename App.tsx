import React from 'react';
import Step1 from './src/Views/Step1/Step1'
import Step2 from './src/Views/Step2/Step2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuccessScreen from './src/Views/Success/Success';
const Stack = createNativeStackNavigator();

export type Props = {
};

const App: React.FC<Props> = ({ }) => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Home">
        <Stack.Screen  name="Home" component={Step1} />
        <Stack.Screen  name="preview"  component={Step2}/>
        <Stack.Screen  name="success"  component={SuccessScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;