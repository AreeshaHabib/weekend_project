import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({name,onPress,style}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[styles.buttonStyle, style]}
    activeOpacity={0.4}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonStyle:{
    width:"100%",
    backgroundColor:"#fb5b5a",
    borderRadius: 9,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:60,
    marginBottom:10
    },
    btnText:{
      fontWeight:"bold",
      fontSize:18,
      color:"#fff"
    }

})


