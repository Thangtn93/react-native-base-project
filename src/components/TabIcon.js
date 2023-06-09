import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';




const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: '#FF203B',
    paddingLeft: 6,
    paddingRight: 6
  },
  badge: {
    position: 'absolute',
    right: 5,
    top: 5,
  }
});

class TabIcon extends Component {

  render() {
    const { iconActive, title, selected, onPress, isSelected } = this.props;
    console.log(isSelected)
    const colorTheme = isSelected ? '#1B64B0' : '#909090'
    return (
      <TouchableWithoutFeedback onPress={onPress && onPress} style={{ flex: 1, }} >
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flex: 1, }}>
          <Icon
            name={iconActive}
            color={colorTheme}
            size={28}
          />
          <Text style={{ color: colorTheme, fontSize: 12, marginTop: 4 }}>{title}</Text>

        </View>


      </TouchableWithoutFeedback>
    );
  }
};


const mapStateToProps = state => ({

});


const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TabIcon);
// export default TabIcon;
