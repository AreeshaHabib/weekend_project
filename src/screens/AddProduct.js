import { View, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import TextInputField from '../components/TextInputField'
import Button from '../components/Button'

const AddProduct = ({route,navigation}) => {
  const {setProduct} = route.params
  console.log("route.....>>>>>>>>>>",route.params)

  const [newProduct, setNewProduct] = useState({});
  


  const handleAddProduct =()=>{
  setProduct((prevProduct)=> [...prevProduct,newProduct])
  navigation.goBack();
}

  return (
    <View style={styles.mainContainer}> 
    <TextInputField
      heading={"ID"}
      placeholder="Enter Id of the "
      onChangeText={(text) => setNewProduct({ ...newProduct, id: text })}
      />
      <TextInputField
      heading={"Image Url"}
      placeholder="Enter image url here"
      onChangeText={(text) => setNewProduct({ ...newProduct, imageUrl: text })}
      />
      <TextInputField
      heading={"Name"}
      placeholder="Enter name of product"
      onChangeText={(text) => setNewProduct({ ...newProduct, name: text })}
      />
      <TextInputField
      heading={"Description"}
      placeholder="Write descripton here"
      onChangeText={(text) => setNewProduct({ ...newProduct, description: text })}
      />
      <TextInputField
      heading={"Price"}
      placeholder="Enter price"
      onChangeText={(number) => setNewProduct({ ...newProduct, price: number })}
      />
      <TextInputField
      heading={"Size"}
      placeholder="Enter size"
      onChangeText={(text) => setNewProduct({ ...newProduct, sizes: text })}
      />
      
      <Button
      name={"Add"}
      style={{width:200, alignSelf:"center"}}
      onPress={handleAddProduct}
      />
    
    </View>
  )
}

export default AddProduct

const styles = StyleSheet.create({
    mainContainer:{
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff"
      },
})
