import { View, Text,FlatList, Image, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'



const ListView = ({navigation}) => {
  console.log(">>>>>",navigation)

  const [product, setProduct] = useState([
    {
      id:1,
      imageUrl: require('../assets/tshirt.jpg'),
      name: "Men's Casual T-Shirt",
      description: "A comfortable and stylish t-shirt for everyday wear.",
      price: 15,
      sizes: "Free Size"
    },
    {
      id:2,
      imageUrl: require('../assets/floraldress.jpg'),
      name: "Women's Floral Dress",
      description: "A beautiful floral dress for any occasion.",
      price: 60,
      sizes: "Free Size"
    },
    {
      id:3,
      imageUrl: require('../assets/jeans.jpg'),
      name: "Men's Classic Denim Jeans",
      description: "Timeless denim jeans for a classic look.",
      price: 50,
      sizes:"Free Size",
    },
    {
      id:4,
      imageUrl: require('../assets/sunglasses.jpg'),
      name: "Women's Sunglasses",
      description: "Stylish sunglasses for sun protection and fashion.",
      price: 80,
      sizes: "Free Size"
    },
    {
      id:5,
      imageUrl: require('../assets/formalsuit.jpg'),
      name: "Men's Formal Suit",
      description: "Elegant suit for formal occasions.",
      price: 20,
      sizes: "Free Size"
    },
    {
      id:6,
      imageUrl: require('../assets/coat.jpg'),
      name: "Women's Winter Coat",
      description: "Warm and stylish coat for cold weather.",
      price: 90,
      sizes: "Free Size"
    },
    {
      id:7,
      imageUrl: require('../assets/shoes.jpeg'),
      name: "Men's Shoes",
      description: "Lightweight and comfortable shoes.",
      price: 80,
      sizes: "Free Size"
    },
    
  ])

  const renderItem = ({ item }) => (
       <TouchableOpacity
      style={styles.productContainer}
      onPress={() =>navigation.navigate('Detail', {product:item})}     
    >
      <View>
      <Image source={item.imageUrl} style={styles.productImage} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>Price: £{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
    
  return (
    <>
   <ScrollView>
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>My Clothing Products</Text>
      <FlatList
      data={product}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={renderItem}
      />
    </View>
    <View>
    <Button
     name={"ADD PRODUCT"}
     style={{width:200, alignSelf:"center"}}
    onPress={() => 
      navigation.navigate('AddProduct',{setProduct})
    }
    
    
     />
    </View>
     </ScrollView>
     </>
    
  );
}
const styles = StyleSheet.create({
  mainContainer:{
    marginHorizontal:12,
    marginVertical:15,
    
  },
  heading:{
    fontWeight:"bold",
    fontSize:26,
    marginVertical:"8%"
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    marginBottom: 16,
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 200, 
    borderTopLeftRadius: 8, //it rounded the upper left corner of image
    borderTopRightRadius: 8, //it rounded the upper right corner of image
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fb5b5a"
  },
});

export default ListView