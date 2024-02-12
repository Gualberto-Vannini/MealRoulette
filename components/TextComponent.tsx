import { StyleProp, Text as DefaultText, TextStyle } from 'react-native';
import { useTheme } from "../theme/Theme";

export enum TextType {
    Title = 'title',
    Paragraph = 'paragraph',
    Subtitle = 'subtitle',
}

interface TextProps {
    text?: string;
    style?: StyleProp<TextStyle>;
    textType?: TextType;
}

export function TextComponent(props: TextProps) {
    const { text, style, textType } = props;
    const currentTheme = useTheme();

    // Define different styles based on textType
    const titleStyle: TextStyle = {
        fontSize: 20,
        color: currentTheme.text,
        fontWeight: 'bold',
        marginVertical: '5%',
    };

    const subtitleStyle: TextStyle = {
        fontSize: 18,
        fontWeight: 'bold',
        color: currentTheme.text,
        marginVertical: '5%',
    };

    const paragraphStyle: TextStyle = {
        fontSize: 15,
        color: currentTheme.text,
        lineHeight: 25,
    };

    const selectedStyle = (() => {
        switch (textType) {
            case TextType.Title:
                return titleStyle;
            case TextType.Subtitle:
                return subtitleStyle;
            default:
                return paragraphStyle;
        }
    })();

    return (
        <DefaultText style={[selectedStyle, { maxWidth: '100%' }, style]}>
            {text}
        </DefaultText>
    );
}
