// screens/AddUserScreen.js
import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
} from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBw57HB-LOOYY4GfM8GnzPEKS6LeoscOn0",
  authDomain: "foody-b06dc.firebaseapp.com",
  projectId: "foody-b06dc",
  storageBucket: "foody-b06dc.appspot.com",
  messagingSenderId: "14316139209",
  appId: "1:14316139209:web:93a007783f4b6923941318",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class AddUserScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection("baghdad");
    this.state = {
      name: "",
      isLoading: false,
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  storeUser() {
    if (this.state.name === "") {
      alert("Fill at least your name!");
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          name: this.state.name,
        })
        .then((res) => {
          this.setState({
            name: "",

            isLoading: false,
          });
          this.props.navigation.navigate("UserScreen");
        })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={"Name"}
            value={this.state.name}
            onChangeText={(val) => this.inputValueUpdate(val, "name")}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="ادخل معلومات مطعم جديد"
            onPress={() => this.storeUser()}
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddUserScreen;
