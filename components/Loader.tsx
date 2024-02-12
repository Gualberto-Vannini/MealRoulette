import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Container} from "../components/Container";
import {useTheme} from "../theme/Theme";

interface LoaderProps {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({loading}) => {
    const theme = useTheme();
    return (
        <Container>
            {loading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color={theme.tint}/>
                </View>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Loader;
