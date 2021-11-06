import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import googleLogo from "../assets/googleLogo.png";
import { TextInput } from 'react-native-gesture-handler';


export default function signUp(params) {
  const navigation = params.navigation;

    return (
      <View style={styles.container}>
  
  
  
  
  
       <View style={styles.view3}>
          <Text style={styles.text2}>EYE</Text>
          <Text style={styles.text3}>WEAR</Text>
       </View>
  
        <View style={{  marginBottom: 30,}}>
          <Text style={styles.textWelcome}>Welcome,</Text>
          <Text style={styles.textSignUp}>Register here.</Text>
        </View>
       
        <TextInput style={styles.textInput} placeholder={'Email'}/>
  
        <TextInput style={styles.textInput} placeholder={'Password'}/>

        <TextInput style={styles.textInput} placeholder={'Confirm Password'}/>
  
        
        <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate("Home")
          }}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
  
  
       
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}} onPress={() => {navigation.navigate("Login")}}>
              Already a member?, <Text style={{color: '#02c38e'}}>Login </Text> 
            </Text>
        </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 30,
    },
    view3: {
      flexDirection: 'row',
      width: '100%',
    },
    textWelcome: {
        fontSize: 40,
        fontWeight: "700",
        color: `black`,
    },
    textSignUp: {
        fontSize: 40,
        fontWeight: "700",
        color: `#02c38e`,
        marginBottom: 10,
    },
    text2: {
      fontSize: 45,
      fontWeight: "500",
      marginTop: 95,
      marginBottom: 50,
      marginLeft: 75,
    },
    text3: {
      fontSize: 45,
      fontWeight: "100",
      marginTop: 95,
      marginBottom: 50,
    },
    button: {
      flexDirection: 'row',
      backgroundColor: `#02c38e`,
      padding: 15,
      borderRadius: 8,
      justifyContent: 'center',
      width: '100%',
      marginBottom: 28,
    },
    textInput: {
      backgroundColor: `#F5F5F5`,
      padding: 15,
      borderRadius: 8,
      fontSize: 20,
      color: `#585858`,
      width: '100%',
      marginBottom: 25,
    },
    buttonText: {
      color: `#fff`,
      fontSize: 20,
      fontWeight: '700',
    },
    button1Text: {
      color: `gray`,
      fontSize: 20,
      fontWeight: '700',
      marginLeft: 44,
    },
    button2Text: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
      marginLeft: 50,
    },
    imageStyle: {
      width: 25,
      marginLeft: -2,
      height: 20,
    },
  });
  