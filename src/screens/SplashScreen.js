// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';



// class SplashScreen extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             // storeRehydrated: props.storeRehydrated

//         }
//     }

//     // componentWillReceiveProps(nextProps) {
//     //     console.log("Splash component will receive props ")

//     //     if (nextProps.storeRehydrated !== this.props.storeRehydrated) {
//     //         this.setState({ storeRehydrated: nextProps.storeRehydrated })
//     //     }
//     // }

//     // componentDidUpdate() {
//     //     console.log("Splash component did update ")

//     //     if (this.state.storeRehydrated) {

//     //         if (this.props.userData && this.props.userData.UID) {
//     //             Actions.replace('main')
    
//     //         } else {
//     //             Actions.replace('loginScreen')
//     //         }
//     //     }
//     // }

    
//     render() {
//         return (
//             <View style={{padding:60}}>
//                 <Text>Splash Screen</Text>
//             </View>
//         );
//     }
// };


// const mapStateToProps = state => ({
//     // userData: state.userData,
//     // storeRehydrated: state._persist.rehydrated

// });


// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
