export interface DullColor {
  T50: string;
  T100: string;
  T200: string;
  T300: string;
  T400: string;
  T500: string;
  T600: string;
  T700: string;
  T800: string;
  T900: string;
}

export interface Color extends DullColor {
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export interface TextColor {
  primary: string;
  secondary: string;
  disabled: string;
  dividers: string;
}

export interface IconColor {
  active: string;
  inactive: string;
}

export const Red: Color = {
  T50: '#ffebee',
  T100: '#ffcdd2',
  T200: '#ef9A9A',
  T300: '#e57373',
  T400: '#ef5350',
  T500: '#f44336',
  T600: '#e53935',
  T700: '#d32f2f',
  T800: '#c62828',
  T900: '#b71c1c',
  A100: '#ff8A80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
};

export const Pink: Color = {
  T50: '#fce4ec',
  T100: '#f8bbd0',
  T200: '#f48fb1',
  T300: '#f06292',
  T400: '#ec407A',
  T500: '#e91e63',
  T600: '#d81b60',
  T700: '#c2185b',
  T800: '#Ad1457',
  T900: '#880e4f',
  A100: '#ff80Ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162',
};

export const Purple: Color = {
  T50: '#f3e5f5',
  T100: '#e1bee7',
  T200: '#ce93d8',
  T300: '#bA68c8',
  T400: '#Ab47bc',
  T500: '#9c27b0',
  T600: '#8e24AA',
  T700: '#7b1fA2',
  T800: '#6A1b9A',
  T900: '#4A148c',
  A100: '#eA80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#AA00ff',
};

export const DeepPurple: Color = {
  T50: '#ede7f6',
  T100: '#d1c4e9',
  T200: '#b39ddb',
  T300: '#9575cd',
  T400: '#7e57c2',
  T500: '#673Ab7',
  T600: '#5e35b1',
  T700: '#512dA8',
  T800: '#4527A0',
  T900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200eA',
};

export const Indigo: Color = {
  T50: '#e8eAf6',
  T100: '#c5cAe9',
  T200: '#9fA8dA',
  T300: '#7986cb',
  T400: '#5c6bc0',
  T500: '#3f51b5',
  T600: '#3949Ab',
  T700: '#303f9f',
  T800: '#283593',
  T900: '#1A237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5Afe',
  A700: '#304ffe',
};

export const Blue: Color = {
  T50: '#e3f2fd',
  T100: '#bbdefb',
  T200: '#90cAf9',
  T300: '#64b5f6',
  T400: '#42A5f5',
  T500: '#2196f3',
  T600: '#1e88e5',
  T700: '#1976d2',
  T800: '#1565c0',
  T900: '#0d47A1',
  A100: '#82b1ff',
  A200: '#448Aff',
  A400: '#2979ff',
  A700: '#2962ff',
};

export const LightBlue: Color = {
  T50: '#e1f5fe',
  T100: '#b3e5fc',
  T200: '#81d4fA',
  T300: '#4fc3f7',
  T400: '#29b6f6',
  T500: '#03A9f4',
  T600: '#039be5',
  T700: '#0288d1',
  T800: '#0277bd',
  T900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091eA',
};

export const Cyan: Color = {
  T50: '#e0f7fA',
  T100: '#b2ebf2',
  T200: '#80deeA',
  T300: '#4dd0e1',
  T400: '#26c6dA',
  T500: '#00bcd4',
  T600: '#00Acc1',
  T700: '#0097A7',
  T800: '#00838f',
  T900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4',
};

export const Teal: Color = {
  T50: '#e0f2f1',
  T100: '#b2dfdb',
  T200: '#80cbc4',
  T300: '#4db6Ac',
  T400: '#26A69A',
  T500: '#009688',
  T600: '#00897b',
  T700: '#00796b',
  T800: '#00695c',
  T900: '#004d40',
  A100: '#A7ffeb',
  A200: '#64ffdA',
  A400: '#1de9b6',
  A700: '#00bfA5',
};

export const Green: Color = {
  T50: '#e8f5e9',
  T100: '#c8e6c9',
  T200: '#A5d6A7',
  T300: '#81c784',
  T400: '#66bb6A',
  T500: '#4cAf50',
  T600: '#43A047',
  T700: '#388e3c',
  T800: '#2e7d32',
  T900: '#1b5e20',
  A100: '#b9f6cA',
  A200: '#69f0Ae',
  A400: '#00e676',
  A700: '#00c853',
};

export const LightGreen: Color = {
  T50: '#f1f8e9',
  T100: '#dcedc8',
  T200: '#c5e1A5',
  T300: '#Aed581',
  T400: '#9ccc65',
  T500: '#8bc34A',
  T600: '#7cb342',
  T700: '#689f38',
  T800: '#558b2f',
  T900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17',
};

export const Lime: Color = {
  T50: '#f9fbe7',
  T100: '#f0f4c3',
  T200: '#e6ee9c',
  T300: '#dce775',
  T400: '#d4e157',
  T500: '#cddc39',
  T600: '#c0cA33',
  T700: '#Afb42b',
  T800: '#9e9d24',
  T900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#AeeA00',
};

export const Yellow: Color = {
  T50: '#fffde7',
  T100: '#fff9c4',
  T200: '#fff59d',
  T300: '#fff176',
  T400: '#ffee58',
  T500: '#ffeb3b',
  T600: '#fdd835',
  T700: '#fbc02d',
  T800: '#f9A825',
  T900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffeA00',
  A700: '#ffd600',
};

export const Amber: Color = {
  T50: '#fff8e1',
  T100: '#ffecb3',
  T200: '#ffe082',
  T300: '#ffd54f',
  T400: '#ffcA28',
  T500: '#ffc107',
  T600: '#ffb300',
  T700: '#ffA000',
  T800: '#ff8f00',
  T900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffAb00',
};

export const Orange: Color = {
  T50: '#fff3e0',
  T100: '#ffe0b2',
  T200: '#ffcc80',
  T300: '#ffb74d',
  T400: '#ffA726',
  T500: '#ff9800',
  T600: '#fb8c00',
  T700: '#f57c00',
  T800: '#ef6c00',
  T900: '#e65100',
  A100: '#ffd180',
  A200: '#ffAb40',
  A400: '#ff9100',
  A700: '#ff6d00',
};

export const DeepOrange: Color = {
  T50: '#fbe9e7',
  T100: '#ffccbc',
  T200: '#ffAb91',
  T300: '#ff8A65',
  T400: '#ff7043',
  T500: '#ff5722',
  T600: '#f4511e',
  T700: '#e64A19',
  T800: '#d84315',
  T900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00',
};

export const Brown: DullColor = {
  T50: '#efebe9',
  T100: '#d7ccc8',
  T200: '#bcAAA4',
  T300: '#A1887f',
  T400: '#8d6e63',
  T500: '#795548',
  T600: '#6d4c41',
  T700: '#5d4037',
  T800: '#4e342e',
  T900: '#3e2723',
};

export const Grey: DullColor = {
  T50: '#fAfAfA',
  T100: '#f5f5f5',
  T200: '#eeeeee',
  T300: '#e0e0e0',
  T400: '#bdbdbd',
  T500: '#9e9e9e',
  T600: '#757575',
  T700: '#616161',
  T800: '#424242',
  T900: '#212121',
};

export const BlueGrey: DullColor = {
  T50: '#eceff1',
  T100: '#cfd8dc',
  T200: '#b0bec5',
  T300: '#90A4Ae',
  T400: '#78909c',
  T500: '#607d8b',
  T600: '#546e7A',
  T700: '#455A64',
  T800: '#37474f',
  T900: '#263238',
};

export const DarkText: TextColor = {
  primary: 'rgbA(0, 0, 0, 0.87)',
  secondary: 'rgbA(0, 0, 0, 0.54)',
  disabled: 'rgbA(0, 0, 0, 0.38)',
  dividers: 'rgbA(0, 0, 0, 0.12)',
};

export const LightText: TextColor = {
  primary: 'rgbA(255, 255, 255, 1)',
  secondary: 'rgbA(255, 255, 255, 0.7)',
  disabled: 'rgbA(255, 255, 255, 0.5)',
  dividers: 'rgbA(255, 255, 255, 0.12)',
};

export const DarkIcons: IconColor = {
  active: 'rgbA(0, 0, 0, 0.54)',
  inactive: 'rgbA(0, 0, 0, 0.38)',
};

export const LightIcons: IconColor = {
  active: 'rgbA(255, 255, 255, 1)',
  inactive: 'rgbA(255, 255, 255, 0.5)',
};

export const White: string = '#ffffff';

export const Black: string = '#000000';

export default {
  Red: Red,
  Pink: Pink,
  Purple: Purple,
  DeepPurple: DeepPurple,
  Indigo: Indigo,
  Blue: Blue,
  LightBlue: LightBlue,
  Cyan: Cyan,
  Teal: Teal,
  Green: Green,
  LightGreen: LightGreen,
  Lime: Lime,
  Yellow: Yellow,
  Amber: Amber,
  Orange: Orange,
  DeepOrange: DeepOrange,
  Brown: Brown,
  Grey: Grey,
  BlueGrey: BlueGrey,
  DarkText: DarkText,
  LightText: LightText,
  DarkIcons: DarkIcons,
  LightIcons: LightIcons,
  White: White,
  Black: Black,
};
