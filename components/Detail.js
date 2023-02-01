import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";



const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  const [user, setUser] = useState({
    name: item.Name,
    phone: item.Phone,
    department: item.Department.Id,
    street: item.Street,
    city: item.City,
    state: item.State,
    zip: item.ZIP,
    country: item.Country,
  });

  const onChangeName = (value) => {
    setUser({ ...user, name: value });
  };

  const onChangePhone = (value) => {
    setUser({ ...user, phone: value });
  };

  const onChangeDepartment = (value) => {
    setUser({ ...user, department: value });
  };

  const onChangeStreet = (value) => {
    setUser({ ...user, street: value });
  };

  const onChangeCity = (value) => {
    setUser({ ...user, city: value });
  };

  const onChangeState = (value) => {
    setUser({ ...user, state: value });
  };

  const onChangeZIP = (value) => {
    setUser({ ...user, zip: value });
  };

  const onChangeCountry = (value) => {
    setUser({ ...user, country: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();
    let info = `id=${item.Id}&Name=${user.name}&Phone=${user.phone}&Department=${user.department}&Street=${user.street}&City=${user.city}&State=${user.state}&ZIP=${user.zip}&Country=${user.country}&`;

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    console.log(info);

    fetch("http://localhost:44350/helloworldWebService1.asmx/UpdateBook", {
      method: "POST",
      headers: myHeaders,
      body: info,
    })
      .then((response) => {
        response.text();
        navigation.push("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    let cmd = `id=${item.Id}`;
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    fetch("http://localhost:44350/helloworldWebService1.asmx/DeleteBook", {
      method: "POST",
      headers: myHeaders,
      body: cmd,
    })
      .then((response) => {
        response.text();
        navigation.push("Get");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  
return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Name"}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
        value={user.name}
      />
      <TextInput
        placeholder={"Phone"}
        onChangeText={(value) => onChangePhone(value)}
        style={styles.input}
        value={user.phone}
      />
      <TextInput
        placeholder={"Department"}
        onChangeText={(value) => onChangeDepartment(value)}
        style={styles.input}
        value={user.department}
      />
      <TextInput
        placeholder={"Street"}
        onChangeText={(value) => onChangeStreet(value)}
        style={styles.input}
        value={user.street}
      />
      <TextInput
        placeholder={"City"}
        onChangeText={(value) => onChangeCity(value)}
        style={styles.input}
        value={user.city}
      />
      <TextInput
        placeholder={"State"}
        onChangeText={(value) => onChangeState(value)}
        style={styles.input}
        value={user.state}
      />
      <TextInput
        placeholder={"ZIP"}
        onChangeText={(value) => onChangeZIP(value)}
        style={styles.input}
        value={user.zip}
      />
      <TextInput
        placeholder={"Country"}
        onChangeText={(value) => onChangeCountry(value)}
        style={styles.input}
        value={user.country}
      />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: "blue", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Update Employee
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: "red", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});

export default Detail;