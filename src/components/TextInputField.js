// import { View, Text, TextInput, StyleSheet } from 'react-native'
// import React from 'react'

// const TextInputField = ({heading, ...props}) => {
//   return (
//     <View style={styles.inputContainer}>
//     <Text style={styles.labels}>{heading}</Text>
//     <View>
//     <TextInput style={styles.inputStyle} 
//     autoCapitalize='none'
//     autoCorrect={false}
//     {...props}
//     />
//     </View>
//   </View>
//   )
// }

// export default TextInputField

// const styles = StyleSheet.create({
//     inputContainer:{
      
//       },
//       labels:{
//         fontSize: 18,
//         letterSpacing:0.6,
//         fontWeight:'bold',
//         color: "#7d7d7d",
//         marginTop: 10,
//         marginBottom: 5,
//         lineHeight: 25,
//       },
//       inputStyle:{
//         borderWidth: 1,
//         borderRadius:10,
//         height:50,
//         borderColor: "rgba(0,0,0,0.3)",
//         paddingHorizontal: 15,
//         paddingVertical: 7,
//         fontSize: 18
//       },
// })

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class TextInputField extends Component {
  render() {
    const { heading, ...props } = this.props;

    return (
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>{heading}</Text>
        <View>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            {...props}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {},
  labels: {
    fontSize: 18,
    letterSpacing: 0.6,
    fontWeight: 'bold',
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 18
  },
});

export default TextInputField;
