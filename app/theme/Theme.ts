import {useColorScheme, ColorSchemeName} from 'react-native';
import {LightTheme, DarkTheme} from '../theme/Colors';

export const themeColors = {
    light: LightTheme.colors,
    dark: DarkTheme.colors,
};

export function useTheme() {
    const themeMode: ColorSchemeName = useColorScheme() || 'light';
    return themeColors[themeMode];
}

export default themeColors;
