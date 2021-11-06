import React from 'react';
import { StyleSheet, Text, Image, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';
import glass1 from '../assets/glass1.png';
import glass2 from '../assets/glass2.png';
import glass3 from '../assets/glass3.png';
import glass4 from '../assets/glass4.png';
import glass5 from '../assets/glass5.png';
import glass6 from '../assets/glass6.png';
import glass7 from '../assets/glass7.png';
import glass8 from '../assets/glass8.png';
import glass9 from '../assets/glass9.png';
import glass11 from '../assets/glass11.png';
import glass12 from '../assets/glass12.png';

export {
  glass1,
  glass2,
  glass3,
  glass4,
  glass5,
  glass6,
  glass7,
  glass8,
  glass9,
  glass11,
  glass12,
}



export default function Home(params) {
  const navigation = params.navigation;

  // category
  const categories = ["All", "Newest", "Best sellers", "Urban"];
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoriesList = () => {
    return <View style={styles.categoriesContainer}>
      {categories.map((items, index) => (
        <TouchableOpacity key={index}
          activeOpacity={0.8}
          onPress={() => setCategoryIndex(index)}>
          <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]}>{items}</Text>
        </TouchableOpacity>
      ))}
    </View>;
  };

  return (

    <View style={styles.mainContainer}>


      <View style={styles.container}>

        <View style={{ backgroundColor: '#F8F8F8', paddingTop: 45, marginBottom: 30 }}>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <View style={styles.view3}>
                <Text style={styles.text2}>EYE</Text>
                <Text style={styles.text3}>WEAR</Text>
              </View>

            </View>
            <Ionicons name="person-outline" size={26} color="black" onPress={() => {
              navigation.navigate("Home")
            }} />
          </View>
        </View>


        <CategoriesList />

        <TextInput style={styles.textInput} placeholder={'Search'} />


        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <Animatable.View animation="slideInDown" style={{ height: 700 }}>
            <View style={{ flexDirection: 'row', height: 150, width: '100%', justifyContent: 'space-between', marginBottom: 15 }}>
              <TouchableOpacity style={styles.bikeView1} onPress={() => { navigation.navigate("glass2Details") }}>
                <Image style={styles.imageStyle}
                  source={glass1}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>HIKING M140</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -10, color: `#484848` }}><Text style={{ color: `#02c38e` }}>$</Text>99</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bikeView2} onPress={() => { navigation.navigate("ProductDetails") }}>
                <Image style={styles.imageStyle}
                  source={glass2}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>CYCLING 500</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -10, color: `#484848` }}><Text style={{ color: `#02c38e` }}>$</Text>65</Text>
                </View>
              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', height: 150, width: '100%', justifyContent: 'space-between', marginBottom: 15 }}>
              <TouchableOpacity style={styles.bikeView1} onPress={() => { navigation.navigate("glass3Details") }}>
                <Image style={styles.imageStyle}
                  source={glass3}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>CYCLING C3</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -10, color: `#484848` }}><Text style={{ color: `#02c38e` }}>$</Text>80</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bikeView2} onPress={() => { navigation.navigate("glass4Details") }}>
                <Image style={styles.imageStyle}
                  source={glass4}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>COUNTRY CAT 1</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -10, color: `#484848` }}><Text style={{ color: `#02c38e` }}>$</Text>70</Text>
                </View>
              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', height: 150, width: '100%', justifyContent: 'space-between', marginBottom: 20 }}>
              <TouchableOpacity style={styles.bikeView1} onPress={() => { navigation.navigate("glass5Details") }}>
                <Image style={styles.imageStyle}
                  source={glass5}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>HIKING MH12</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }} onPress={() => {
                    navigation.navigate("ProductDetails")
                  }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -15, color: `#484848` }}><Text style={{ color: `#02c38e` }}>$</Text>119</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bikeView2}   onPress={() => { navigation.navigate("glass6Details") }}>
                <Image style={styles.imageStyle}
                  source={glass6}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>HIKING M130</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -10, color: `#484848` }}><Text style={{ color: `#02c38e` }}>$</Text>60</Text>
                </View>
              </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', height: 150, width: '100%', justifyContent: 'space-between', marginBottom: 15 }}>
              <TouchableOpacity style={styles.bikeView1} onPress={() => { navigation.navigate("glass7Details") }}>
                <Image style={styles.imageStyle}
                  source={glass8}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>CYCLING C3</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -10 }}><Text style={{ color: `#02c38e` }}>$</Text>80</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bikeView2} onPress={() => { navigation.navigate("glass8Details") }}>
                <Image style={styles.imageStyle}
                  source={glass7}
                />

                <View style={{ top: 0, alignItems: 'center' }}>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray' }}>COUNTRY CAT 1</Text>
                  <Text style={{ fontWeight: '600', fontSize: 16, color: 'gray', marginBottom: 5 }}>SUNGLASSES</Text>
                  <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: -10, color: `#484848` }}><Text style={{ color: `#02c38e` }}>$</Text>70</Text>
                </View>
              </TouchableOpacity>

            </View>

            
          </Animatable.View>
        </ScrollView>
        <View style={styles.iconView}>
          <Ionicons name="settings-outline" size={26} color="black" onPress={() => {
            navigation.navigate("Login")
          }} />
          <Ionicons name="home-outline" size={26} color="black" onPress={() => {
            navigation.navigate("ProductDetails")
          }} />
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Ionicons name="cart-outline" size={26} color="black" onPress={() => {
              navigation.navigate("Cart")
            }} />
          </View>
        </View>

      </View>







    </View>




  );


}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F8F8F8',
  },
  view3: {
    flexDirection: 'row',
  },
  text1: {
    fontSize: 25,
    color: `#585858`,
    marginRight: 5,
  },
  text2: {
    fontSize: 30,
    fontWeight: "500",
    color: `black`,
  },
  text3: {
    fontSize: 30,
    fontWeight: '100',
  },
  button1: {
    backgroundColor: `#F8F8F8`,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: `#fff`,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    fontSize: 20,
    color: `gray`,
    width: '100%',
    marginBottom: 15,
  },
  bikeView1: {
    backgroundColor: `#fff`,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '47%',
    height: '100%',
    marginRight: 5,
  },
  bikeView2: {
    justifyContent: 'center',
    backgroundColor: `#fff`,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    width: '47%',
    height: '100%',
  },
  button1Text: {
    color: `#02c38e`,
    fontSize: 22,
  },
  button2Text: {
    color: `gray`,
    fontSize: 22,
  },
  imageStyle: {
    width: "100%",
    height: '40%',
    marginBottom: 20,
  },
  iconView: {
    flexDirection: "row",
    backgroundColor: '#fff',
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 25,
    height: 50,
    // borderWidth: 3,
    // borderColor: 'lightgray',
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 12,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 19,
    fontWeight: "600",
    color: "lightgray",
  },
  categoryTextSelected: {
    color: `#02c38e`,
  },
});