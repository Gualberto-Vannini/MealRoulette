import * as React from 'react';
import {TextComponent, TextType} from "../components/TextComponent";
import {Container} from "../components/Container";

export default function TabTwoScreen() {
    return (
        <Container style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <TextComponent textType={TextType.Title}text={'Setting Page'} />
            <TextComponent textType={TextType.Paragraph}text={"I kept the bottom tab navigation because it was already included in the boilerplate. It could be useful for a settings page or for additional information about the app. "} />

        </Container>
    );
}
