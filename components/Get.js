import React, { Component, useEffect, useState } from "react"; 
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"; 
import { StatusBar } from "expo-status-bar"; 
//import { View, StyleSheet } from "react-native";
import styles from "../styles"; 

// create a component
const Get = ({ navigation }) => {
  const [user, setUser] = useState();

  const GetEmployees = async () => {
    try {
      //This is to send a request to the Frontend by Networking
      let response = await fetch(
        "http://localhost:44350/helloworldWebService1.asmx/GetBooks"
      );
      let json = await response.json();
      setUser(json);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    GetEmployees();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            item: item,
          })
        }
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white"}}>{item.Id}</Text>
          <Text style={{color: "white"}}>{item.Name}</Text>
          <Text style={{color: "white"}}>{item.Phone}</Text>
          <Text style={{color: "white"}}>{item.Department.Name}</Text>
          {/* <Text style={{color: "white"}}>{item.Street}</Text>
          <Text style={{color: "white"}}>{item.City}</Text>
          <Text style={{color: "white"}}>{item.State}</Text>
          <Text style={{color: "white"}}>{item.ZIP}</Text>
          <Text style={{color: "white"}}>{item.Country}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={user}
          renderItem={renderItem}
          keyExtractor={(item) => item.Id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

//This is export default on what appears in this screen
export default Get;