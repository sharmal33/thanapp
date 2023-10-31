import { Platform, StatusBar, Dimensions, PixelRatio, NativeScrollEvent } from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

export const getRemoteConfig = () => {
  return remoteConfig()
    .fetchAndActivate()
    .then(() => {
      const metadata = remoteConfig().getValue('LogoutTimeForInactivity');
      if (metadata && metadata._value) {
        return Number(metadata._value);
      }
      return 0;
    })
    .catch(() => {
      return 0;
    });
};

export const getEnterpriseData = async (keys: string[]) => {
  try {
    await remoteConfig().fetchAndActivate();
    const data: any[] | PromiseLike<any[]> = [];
    keys.forEach((s) => {
      const values = remoteConfig().getValue(s);
      if (values && values.asString().length > 0) {
        data.push(JSON.parse(values.asString()));
      }
    });
    return data;
  } catch (error) {
    console.log('error ',error);
  }

};