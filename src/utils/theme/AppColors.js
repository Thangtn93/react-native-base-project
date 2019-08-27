const app = {
  themeApp: '#60AE34',
  baseColor: '#34495e',
  pink: '#F89FA7',
  greySight: '#9E9EA1',
  background: '#FFF',
  cardBackground: '#FFFFFF',
  listItemBackground: '#FFFFFF',
  imageBackground: '#d6d6d6',
  imageIconBackGround: '#A0ABBE',
  white: 'rgba(255,255,255,1)',
  black: 'rgba(0,0,0,1)',
  transparent: 'rgba(0,0,0,0)',
  green: '#6ACB40',
  pink: '#FF5656',
  orange: '#EE8432',
  blue: 'rgba(30, 160, 208, 1)',
  cerulean: '#009BD5',
  red: '#FF203B',
  lightgray: '#efefef',
  lightgraytrans: 'rgba(239, 239,239, 0.2)',
  gray: '#999',
  darkgray: '#333',
  purple: '#DA439F',
  blueBackground: '#42A5F5',
  blueFacebook: '#366AA7',
  blueTwitter: '#55ACEE',
  redGoogle: '#D12122',
  divider: '#d3dfe4',
  iconGray: 'rgba(180,180,180,1)',
  lineGray: 'rgba(237,237,237,1)',
  statusbar: '#2b3545',
  sectionText: '#788793',
  addMoreButton: 'rgba(0, 0, 0, 0.2)',
  abi_blue: '#1B64B0',
  abi_blue_light: '#5c91e2',
  abi_blue_dark: '#003b80',
  abi_blue_opacity: '#407CBA',
  abi_yellow: '#FEC413',
  abi_green: '#1DBECF',
  abi_white: 'white',
  opacity: 1,
  header_row: '#DDDDDD',
  panel_background: '#F2F2F3',
  separator: '#DADADA',
  orange: '#FEC413',
  lightgray: '#efefef',
  hintText: 'rgba(69,90,100,0.5)',
  textColor: '#455a64',
  spaceGrey: '#455A64',
  orangeLight: '#FFB236',
  greenLight: '#4CAF50',
  orderBlueskin:'#2196f3',
  orderOrangerYellow:'#ff9800',
  orderGreen:'#4caf50',
  orderDark: '#455a64',
  orderRed:'#b6292b',
  orderBlack:'rgba(69,90,100,0.38)',
  orangeLight:'#EA8044',
  grayLight:'#A39D9D',
  greenMain:'#60AE34',
  blueFb:'#4267B2',

  
  
};

const brand = {
  brand: {
    primary: '#FFF',
    secondary: '#17233D',
  },
};

const text = {
  textNavbar: '#fff',
  textPrimary: '#131313',
  textSecondary: '#909090',
  textMinor: '#CCCCCC',
  textRed: '#F42F47',
  textBlue: '#00aedd',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary,
  textTitle: '#68737f',
  textContent: 'rgba(52, 64, 82, 1)',
  textSubContent: 'rgba(52, 64, 82, 0.5)',
  regular: '#344052',
  placeHolder: 'rgba(0,0,0,0.3)'
};

const borders = {
  border: '#DFDFDF',
};

const ticked = {
  ticked: '#39CE13',
};

const tabbar = {
  tabbar: {
    background: { active: '#1976d2', inactive: app.abi_blue },
  },
};

const navbar = {
  navbar: {
    background: '#343f51'
  }
}

const searchbar = {
  searchbar: {
    background: '#343f51',
    textInput: '#9FADB4',
    backgroundText: '#434F61',
  }
}

const dialog = {
  dialogBody: 'rgba(238, 241, 242, 1)',
  dialogDivider: 'rgba(205, 217, 223, 1)',
}

export default {
  ...app,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
  ...navbar,
  ...dialog,
  ...searchbar,
  ...ticked,

}; 
