// screens/AddUserScreen.js
import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Text } from "../../components/typography/text.components";
import { colors } from "../../infrastructure/theme/colors";
import { RestButton, RestInput, EntryRestList } from "../styles/addrest.styles";
import { SafeArea } from "../../components/utility/safe-area.component";
class AddUserScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection("baghdad");
    this.state = {
      name: "",
      email: "",
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
      alert("قم بأدخال اسم على الاقل");
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          name: this.state.name,
          email: this.state.email,
        })
        .then((res) => {
          this.setState({
            name: "",
            email: "",
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
      <SafeArea>
        <EntryRestList>
          <RestInput
            placeholder={"اسم المطعم"}
            placeholderTextColor={colors.text.primary}
            value={this.state.name}
            textContentType="string"
            autoCapitalize="none"
            onChangeText={(val) => this.inputValueUpdate(val, "name")}
          />
          <RestInput
            placeholder={"البريد الالكتروني"}
            placeholderTextColor={colors.text.primary}
            value={this.state.email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(val) => this.inputValueUpdate(val, "email")}
          />
          <RestButton mode="contained" onPress={() => this.storeUser()}>
            <Text variant="textButton">اضف معلومات المطعم</Text>
          </RestButton>
        </EntryRestList>
      </SafeArea>
    );
  }
}
const styles = StyleSheet.create({
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
