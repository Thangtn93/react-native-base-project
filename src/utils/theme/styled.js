import React from 'react';
import styled from 'styled-components/native';
import AppColors from './AppColors';
import { Text } from 'react-native'
import AppFonts from './AppFonts';
const colors = {
  abi_blue: '#1B64B0',
  abi_blue_light: '#5c91e2',
  abi_blue_dark: '#003b80',
  abi_blue_opacity: '#407CBA',
  abi_yellow: '#FEC413',
  abi_green: '#1DBECF',
  abi_white: 'white',
  opacity: 1,
  header_row: '#B9B6D3',
  lightgray: '#efefef',
};

const Container = styled.View`

`;
const ContainerRow = styled.View`
  flexDirection: row
`;
const Item = styled.View`

`;
const Profile = styled.View`
width: 200;
position: absolute;
alignSelf: center;
marginTop: 40;
marginBottom: 10;
alignItems: center;
justifyContent: center;

`;
const PanelStyle = styled.TouchableOpacity`
flexDirection: row;
height: 45;
paddingLeft: 16;
justifyContent: space-between;
alignItems: center;
width: 100%;
backgroundColor: #F2F2F3
`;
const PanelStyleView = styled.View`
flexDirection: row;
height: 48;
paddingLeft: 16;
justifyContent: space-between;
alignItems: center;
width: 100%;
backgroundColor: #5c91e2
`;
const Avatar = styled.Image`
height: 100;
width: 100
`;

// Font style

const Label = {
  fontSize: 12,
  opacity: 0.87
}
const Required = {
  fontSize: 12,
  color: 'red',
  opacity: 0.87,
  fontFamily: AppFonts.base.family,

}


const CardTitle = {
  fontSize: 16,
  color: '#ffffff',
  fontWeight: '400',
  opacity: 0.87
}


const TableContent = {
  fontSize: 13,
  color: AppColors.spaceGrey,
  fontWeight: '400',
  opacity: 0.87,
  marginLeft: 8
}
const ColumnHeader = {
  fontSize: 12,
  color: '#000000',
  fontWeight: '400',
  opacity: 0.54,

}

const H0 = {
  fontSize: 18,
  color: '#FFFFFF',
  fontWeight: '400',
  fontFamily: AppFonts.base.family,

}
const H1M = {
  fontSize: 18,
  color: AppColors.spaceGrey,
  fontWeight: '400',
  fontFamily: AppFonts.base.family,
  // opacity: 0.87,
}

const H1 = {
  fontSize: 16,
  color: AppColors.abi_blue,
  // fontWeight: '500',
  fontFamily: AppFonts.base.family,

  // opacity: 0.87,
}
const H2 = {
  fontSize: 14,
  color: AppColors.spaceGrey,
  fontWeight: '400',
  fontFamily: AppFonts.base.family,

  // opacity: 0.87
}
const H3 = {
  fontSize: 12,
  color: AppColors.abi_blue,
  fontWeight: '400',
  opacity: 0.38,
  fontFamily: AppFonts.base.family,

}
const H4 = {
  fontSize: 20,
  color: AppColors.order_dark,
  paddingBottom: 16,
  fontFamily: AppFonts.base.family,

  //fontWeight: '400',
  //opacity: 0.38
}
// FX STYLED FUNC
const LabelS = ({ text, required }) => (
  <ContainerRow >
    <Text style={Label}>{text}</Text>
    {
      required && <Text style={Required}> (*)</Text>
    }
  </ContainerRow>
);

export {
  colors,
  Container,
  Profile, Avatar,
  Item,
  PanelStyle,
  PanelStyleView,
  Label,
  LabelS,
  CardTitle, ColumnHeader, TableContent,
  H0, H1, H1M, H2, H3, H4,
  Required,
};
