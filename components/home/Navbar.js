import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";



// var sharedBlacklist = [
//   /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
//   /website\/node_modules\/.*/,
//   /heapCapture\/bundle\.js/,
//   /.*\/__tests__\/.*/
// ];


{/* <Button
  title="Log in"
  buttonStyle={{
    backgroundColor: "rgba(111, 202, 186, 1)",
    borderRadius: 5
  }}
  titleStyle={{ fontWeight: "bold", fontSize: 23 }}
  containerStyle={{ marginVertical: 10, height: 50, width: 330 }}
  onPress={() => console.log("aye")}
  underlayColor="transparent"
/>; */}



const Navbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button
          title="9"
          icon={{
            name: "heart",
            type: "font-awesome",
            size: 18,
            color: "red"
          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 20,
            backgroundColor: "white",
            width: 70,
            height: 30
          }}
          titleStyle={{ fontSize: 18, color: "red" }}
        />
      </View>
      <View style={styles.flexContainer}>
        <Button
          icon={{
            name: "bell",
            type: "font-awesome",
            size: 14,
            color: "#3597F8"
          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 50,
            backgroundColor: "white",
            width: 40,
            height: 30
          }}
        />
        <Button
          icon={{
            name: "sort-down",
            type: "font-awesome",
            size: 25,
            marginBottom: 10,
            color: "#3597F8"
          }}
          buttonStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 50,
            backgroundColor: "white",
            width: 40,
            height: 30
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    margin: 18,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  flexContainer: {
    flexDirection: "row",
    flex: 0.35,
    justifyContent: "space-between"
  }
});

export default Navbar;
