import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login.js";
import Home from "./screens/Home.js";
import ProductDetails from "./screens/ProductDetails.js";
import Cart from "./screens/Cart.js";


export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
      <MainNavigator.Navigator 
      screenOptions={{ headerShown: false , }}
      >
            
          <MainNavigator.Screen name="Login" component={Login}/>
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="ProductDetails" component={ProductDetails} />
          <MainNavigator.Screen name="Cart" component={Cart} />

      </MainNavigator.Navigator>

      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
