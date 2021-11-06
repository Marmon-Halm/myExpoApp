import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login.js";
import Home from "./screens/Home.js";
import ProductDetails from "./screens/ProductDetails";
import glass2Details from "./screens/glass2Details";
import glass3Details from "./screens/glass3Details";
import glass4Details from "./screens/glass4Details";
import glass5Details from "./screens/glass5Details";
import glass6Details from "./screens/glass6Details";
import glass7Details from "./screens/glass7Details";
import glass8Details from "./screens/glass8Details";
import glass9Details from "./screens/glass9Details";
import Cart from "./screens/Cart.js";
import signUp from './screens/signUp.js';


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
          <MainNavigator.Screen name="glass2Details" component={glass2Details} />
          <MainNavigator.Screen name="glass3Details" component={glass3Details} />
          <MainNavigator.Screen name="glass4Details" component={glass4Details} />
          <MainNavigator.Screen name="glass5Details" component={glass5Details} />
          <MainNavigator.Screen name="glass6Details" component={glass6Details} />
          <MainNavigator.Screen name="glass7Details" component={glass7Details} />
          <MainNavigator.Screen name="glass8Details" component={glass8Details} />
          <MainNavigator.Screen name="glass9Details" component={glass9Details} />
          <MainNavigator.Screen name="Cart" component={Cart} />
          <MainNavigator.Screen name="signUp" component={signUp} />

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
