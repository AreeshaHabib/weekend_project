
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListView from './src/screens/ListView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailView from './src/screens/DetailView';
import AddProduct from './src/screens/AddProduct';


const Stack = createNativeStackNavigator();

function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Products" component={ListView} />
        <Stack.Screen name="Detail" component={DetailView} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
      
     
     {/* <SafeAreaView>
       <View>
     <AddProduct/>
    </View>
     </SafeAreaView>  */}
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  
});

export default App;
