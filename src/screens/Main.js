import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, Platform } from 'react-native';
import TabIcon from '../components/TabIcon';
import AppColors from '../utils/theme/AppColors';

import Messages from '../utils/constant/Messages';
import Home from './home/Home';


const initRoute = [

    { key: Messages.findYard, title: Messages.findYard, component: <Home />, iconName: 'location' },



]
class Main extends Component {
    constructor() {
        super();
        this.state = {
            mainContent: <Home />
        }
    }

    renderTabBar() {
        return <View style={styles.containerTabBar}>
            {initRoute.map((route, index) => {
                return <TabIcon
                    iconActive={route.iconName}
                    title={route.title}
                    onPress={() => { this.setState({ mainContent: route.component, index }) }}
                    isSelected={this.state.index === index}
                />
            })}
        </View>
    }
    render() {
        return (

            <View style={styles.container}>
      
                {this.state.mainContent}

                {this.renderTabBar()}


            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    iconHeader: {
        color: 'black',
        fontSize: 24
    },
    title: {
        color: '#ffffff',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        marginRight: 10,
    },

    ImageComponentStyle: {
        width: 150,
        height: 150
    },
    ItemTextStyle: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    containerTabBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 55,
        borderTopWidth: 1,
        borderColor: AppColors.gray,

    }
});

function mapStateToProps(state) {
    return {
        condition: state.condition
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);