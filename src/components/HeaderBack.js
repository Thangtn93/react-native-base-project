import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Platform,
    TextInput, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from "react-native-router-flux";

const HeaderBack = props => {
    const {
        headerName,
        renderLeft,
        renderRight,
        backPress,
        icon
    } = props;

    return (
        <View >
            <View style={styles.statusBar}>

            </View>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    {!renderLeft && <View style={{ flex:1,paddingLeft: 8 }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={backPress !== undefined ?
                                backPress.bind(this)
                                :
                                () => Actions.pop()}
                            style={styles.button}
                        >
                            <Icon
                                name={(icon !== undefined) ? icon : "arrow-left"}
                                style={styles.iconHeader}
                                size={24}
                                color={'white'}
                            />
                        </TouchableOpacity>

                    </View>}
                    <View style={{ flex:1,paddingLeft: 8 }}>
                        {renderLeft}
                    </View>
                    <View style={{ flex:16, justifyContent: "flex-start", alignItems: "center" }}>
                        <Text style={styles.title}>
                            {headerName}
                        </Text>
                    </View>
              
                    <View style={{flex:1, paddingRight: 8 }}>
                        {renderRight}
                    </View>
                    {!renderRight && <View style={{ flex:1,paddingRight: 8 }}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={
                                () => Actions.settings()}
                            style={styles.button}
                        >
                            <Icon
                                name={(icon !== undefined) ? icon : "gear"}
                                style={styles.iconHeader}
                                size={24}
                                color={'white'}
                            />
                        </TouchableOpacity>

                    </View>}         
                </View>
             
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        height: 32,
        backgroundColor: '#60AE34',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#60AE34',
        height: 48,
        paddingLeft: 8,
        paddingRight: 8,
        elevation: 5,
        // marginTop :Platform.OS === 'ios'? 24 :0
    },
    iconHeader: {
        fontSize: 24,

    },
    title: {
        color: '#ffffff',
        marginLeft: 10,
        fontSize: 16,

    },
    button: {
        width: 24,
    },
});

export default HeaderBack;
