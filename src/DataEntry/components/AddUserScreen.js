// screens/AddUserScreen.js
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { ActivityIndicator, Colors } from "react-native-paper";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Text } from "../../components/typography/text.components";
import { colors } from "../../infrastructure/theme/colors";
import {
  TitleEntry,
  RestButton,
  DataEntryBack,
  RestInput,
  EntryRestList,
} from "../styles/addrest.styles";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Spacer } from "../../components/spacer/spacer.component";
class AddUserScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection("baghdad");
    this.state = {
      name: "",
      email: "",
      business_status: false,
      vicinity: "",
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
          business_status: this.state.business_status,
          vicinity: this.state.vicinity,
        })
        .then((res) => {
          this.setState({
            name: "",
            email: "",
            business_status: "",
            vicinity: "",
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
          <ActivityIndicator size={50} color={Colors.blue300} animating={true} />
        </View>
      );
    }
    return (
      <DataEntryBack>

      <SafeArea>
        <EntryRestList>

          <TitleEntry>معلومات المطعم

</TitleEntry>
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

<CheckBox
 
  checked={this.state.business_status}
  onPress={() => this.setState({checked: !this.state.business_status})}
/>
           <RestInput
            placeholder={"الموقع"}
            placeholderTextColor={colors.text.primary}
            value={this.state.vicinity}
            textContentType="string"
            autoCapitalize="none"
            onChangeText={(val) => this.inputValueUpdate(val, "vicinity")}
          />

          <Spacer size="large">
            <RestButton mode="contained" onPress={() => this.storeUser()}>
              <Text variant="textButton">ارسال</Text>
            </RestButton>
          </Spacer>

        </EntryRestList>
      </SafeArea>
      </DataEntryBack>

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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
export default AddUserScreen;
