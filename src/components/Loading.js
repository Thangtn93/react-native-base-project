import React from 'react';
import {
  View,
  Text,
  NetInfo,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from "react-native-router-flux";
import HeaderBack from './HeaderBack'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;
class Loading extends React.Component {
  constructor() {

    super();

    this.state = {

      connection_Status: false

    }

  }

  componentDidMount() {

    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this._handleConnectivityChange

    );

    NetInfo.isConnected.fetch().done((isConnected) => {

      if (isConnected == true) {
        this.setState({ connection_Status: true })
      }
      else {
        this.setState({ connection_Status: false })
      }

    });
    setTimeout(() => {
      this.setState({ connection_Status: false })
    }, 60000);

  }


  componentWillUnmount() {

    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      this._handleConnectivityChange

    );

  }

  _handleConnectivityChange = (isConnected) => {

    if (isConnected == true) {
      this.setState({ connection_Status: true })
    }
    else {
      this.setState({ connection_Status: false })
    }
  };

  render() {

    return (
      <View>


        <HeaderBack
          headerName={''}
        />

        <View style={{ justifyContent: 'center', alignItems: "center", display: 'flex', marginTop: heightScreen / 3 }}>

        
         

          {this.state.connection_Status ?
           <View>

           <ActivityIndicator
             size="large" color="#60AE34"
           />
            <Text style={styles.textTitlle}>  {"Đang kết nối ..."}  </Text>
            </View> :

          <TouchableOpacity
            onPress={() => { Actions.pop() }}
            style={{ flexDirection: "column" }}
          >
            <Text style={styles.textTitlle}>  {"Lỗi kết nối!"}  </Text>
            <View style={{ justifyContent: 'center', alignItems: "center", display: 'flex' }}>
            <Icon
              name={"exclamation"}
              style={{ fontSize:80 }}
              size={80}
              color={'gray'}
            />
            <Text style={styles.textTitlle}>  {"Ấn vào đây quay lại..."}  </Text>
        
            </View>
          </TouchableOpacity>
        }


        </View>
      </View>



    );

  }

}
const styles = StyleSheet.create({
  textTitlle: {
    fontSize: 20,
    textAlign: 'center',
    color: "#60AE34"
  }
});

export default (Loading);

