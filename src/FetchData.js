import { View, StyleSheet } from "react-native";
import React from "react";
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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import { Component } from "react";
import { ListItem } from "react-native-elements";

import { ScrollView, ActivityIndicator } from "react-native";
export { auth, db };
class FetchData extends Component {
  constructor() {
    super();
    this.docs = firebase.firestore().collection("baghdad");
    this.state = {
      isLoading: true,
      baghdad: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.getStudentsData);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getStudentsData = (querySnapshot) => {
    const baghdad = [];
    querySnapshot.forEach((res) => {
      const { name, business_status } = res.data();
      baghdad.push({
        key: res.id,
        res,
        name,
        business_status,
      });
    });
    this.setState({
      baghdad,
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.wrapper}>
        {this.state.baghdad.map((res, i) => {
          return (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => {
                this.props.navigation.navigate("UserDetailScreen"),
                  {
                    userkey: res.key,
                  };
              }}
            >
              <ListItem.Content>
                <ListItem.Title>{res.name}</ListItem.Title>
                <ListItem.Subtitle>{res.business_status}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron color="black" />
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 22,
  },
  loader: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default FetchData;
