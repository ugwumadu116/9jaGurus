import React from 'react';
import { Text, View, StyleSheet } from "react-native";



const Advert = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>Extra Lives make it easier to win </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
    
  },
  textContainer: {
      color: "white",
      fontSize: 30,
      fontWeight: "600",
      textAlign: "center"
  }
});
 
export default Advert;
