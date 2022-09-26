// screens/UserScreen.js
import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { ListItem } from "react-native-elements";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class UserScreen extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection("baghdad");
    this.state = {
      isLoading: true,
      userArr: [],
    };
  }
  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
    });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size={50} animating={true} color={Colors.blue300} />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {this.state.userArr.map((item, i) => {
          return (
            <ListItem
              key={i}
              bottomDivider
              onPress={() => {
                this.props.navigation.navigate("UserDetailScreen", {
                  userkey: item.key,
                });
              }}
            >
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
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
  container: {
    flex: 1,
    paddingBottom: 22,
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
export default UserScreen;
