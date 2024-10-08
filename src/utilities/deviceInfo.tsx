import { Platform, Dimensions, StatusBar } from 'react-native';

import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';

const iosHasNotch = Platform.OS === 'ios' && DeviceInfo.hasNotch();

const getSafeAreaTopSpace = () => {
  if (Platform.OS === 'ios' && DeviceInfo.hasDynamicIsland()) return 59;
  if (Platform.OS === 'ios' && DeviceInfo.hasNotch()) return 44;
  if (Platform.OS === 'android') return 0;
  return 20;
};

export const deviceInfo: {
  OS: string;
  size: {
    width: number;
    height: number;
  };
  iosHasNotch: boolean;
  isAndroid: boolean;
  safeAreaTopSpace: number;
  safeAreaBottomSpace: number;
  navigationBarHeight: number;
  androidExtraDimension: {
    statusBarHeight: number;
    navigationBarHeight: number;
  };
  buttonBottomSpace: number;
} = {
  OS: Platform.OS,
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  iosHasNotch: iosHasNotch,
  isAndroid: Platform.OS === 'android',
  safeAreaTopSpace: getSafeAreaTopSpace(),
  safeAreaBottomSpace: iosHasNotch ? 34 : 0,
  navigationBarHeight: Platform.OS === 'android' ? Dimensions.get('screen').height - Dimensions.get('window').height + StatusBar.currentHeight : 0,
  androidExtraDimension: {
    statusBarHeight: Number(StatusBar.currentHeight),
    navigationBarHeight: Dimensions.get('screen').height - Dimensions.get('window').height + StatusBar.currentHeight,
  },
  buttonBottomSpace: iosHasNotch ? 0 : 24,
};
