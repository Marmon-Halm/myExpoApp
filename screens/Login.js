import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import googleLogo from "../assets/googleLogo.png";
import { TextInput } from 'react-native-gesture-handler';




export default function Login(params) {
    const navigation = params.navigation;
   
  return (
    <View style={styles.container}>





     <View style={styles.view3}>
        <Text style={styles.text2}>EYE</Text>
        <Text style={styles.text3}>WEAR</Text>
     </View>

      <View style={{  marginBottom: 30,}}>
        <Text style={styles.textHey}>Hey,</Text>
        <Text style={styles.textLoginNow}>Login Now.</Text>
      </View>
     
      <TextInput style={styles.textInput} placeholder={'Email'}/>

      <TextInput style={styles.textInput} placeholder={'Password'}/>

      
      <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("Home")
        }}>
          <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>


        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 22, fontWeight: '600', marginTop: 15, marginBottom: 15, color: 'gray'}}>or</Text>
        </View>

      <TouchableOpacity style={styles.button1} onPress={() => {
            navigation.navigate("Home")
        }}>
         
        <Image style={styles.imageStyle} source={googleLogo} />
          <Text style={styles.button1Text}>Continue with Google</Text>
      </TouchableOpacity>
     
    
      <TouchableOpacity style={styles.button2} onPress={() => {
            navigation.navigate("Home")
        }}>
          <AntDesign name="apple1" size={20} color="white"/>
          <Text style={styles.button2Text}>Continue with Apple</Text>
      </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>
            Don't have an account?, <Text style={{color: '#02c38e'}} onPress={() => {
            navigation.navigate("signUp")
        }}>Register</Text> 
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
           <Text style={{fontSize: 20, fontWeight: '500', color: '#02c38e'}}>Forgot your password?</Text>
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
  textHey: {
      fontSize: 40,
      fontWeight: "700",
      color: `black`,
  },
  textLoginNow: {
      fontSize: 40,
      fontWeight: "700",
      color: `#02c38e`,
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
  button1: {
    flexDirection: 'row',
    backgroundColor: `#E8E8E8`,
    padding: 15,
    borderRadius: 8,
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: `#02c38e`,
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    width: '100%',
  },
  textInput: {
    backgroundColor: `#F5F5F5`,
    padding: 15,
    borderRadius: 8,
    fontSize: 20,
    color: `#585858`,
    width: '100%',
    marginBottom: 15,
  },
  button2: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 28,
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
