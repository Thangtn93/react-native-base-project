import React, { Component } from "react";
import { Platform, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ImageBackground, Button } from "react-native";
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions/index';
import { bindActionCreators } from 'redux';
import {Actions} from 'react-native-router-flux'
class Home extends React.Component {
  
  
//   handleIncrease = () => {
//     this.props.counterIncrease();
// };

  render() {
      return (
        <View >
          
          <Text onPress={()=>this.props.actions.changeCondition({ isLoading: false })}>CLICK ME </Text>
       <Text >{this.props.userData.isLoading===true?'1':'2'}</Text>
       <Text onPress={()=>Actions.setting()}>Change Screen</Text>
        </View>
      );
    }
  }
  function mapStateToProps(state) {
    return {
      userData: state.userData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);