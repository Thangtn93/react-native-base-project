import React, { Component } from "react";
import { Platform, View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ImageBackground, Button } from "react-native";
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions/index';
import { bindActionCreators } from 'redux';
class Setting extends React.Component {
  
  
//   handleIncrease = () => {
//     this.props.counterIncrease();
// };

  render() {
      return (
        <View >
          
          <Text onPress={()=>this.props.actions.changeCondition({ isLoading: false })}>CLICK ME </Text>
       <Text >{this.props.userData.isLoading===true?'1':'2'}</Text>
       <Text>Setting </Text>
       
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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);