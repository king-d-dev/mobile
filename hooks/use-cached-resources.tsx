import { useFonts } from 'expo-font';

export function useCachedResources() {
  const [loaded] = useFonts({
    Nunito: require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito 600': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito 700': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito 800': require('../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito 900': require('../assets/fonts/Nunito-Black.ttf'),
  });

  return loaded;
}
