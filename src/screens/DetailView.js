import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const DetailView = ({route}) => {
 
  const { product } = route.params;
  return (
      <View style={styles.container}>
        <Image source={ product?.imageUrl} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product?.name}</Text>
          <Text style={styles.productDescription}>{product?.description}</Text>
          <Text style={styles.productPrice}>Price: £{product?.price}</Text>
          <Text style={styles.productSizes}>Size:  {product?.sizes}</Text>
        </View>
      </View>
    );
}

export default DetailView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200, 
    borderTopLeftRadius: 8, //it rounded the upper left corner of image
    borderTopRightRadius: 8, //it rounded the upper right corner of i
  },
  productInfo: {
    flex:1,
    padding: 15,
    alignItems:"flex-start"
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 20,
    color: 'black',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fb5b5a"
  },
  productSizes: {
    fontSize: 20,
  },
});