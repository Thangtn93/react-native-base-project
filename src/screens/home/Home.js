import React, { Component } from "react";
import { Platform, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ImageBackground, Button } from "react-native";
export default class Home extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Icon name="rocket" size={30} color="#900" />
        </View>
      );
    }
  }