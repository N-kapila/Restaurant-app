import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";

import { Colors } from '@/constants/Colors';
import { SPECIAL_ITEMS } from '@/constants/SpecialItems';
import SPECIAl_IMAGES from '@/constants/SpecialImages';

export default function SpecialScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const footerComp = <Text style={{ color: theme.text }}></Text>;

    return (
        <Container>
            <FlatList
                data={SPECIAL_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={[styles.menuItemName, styles.menuItemText]}>{item.name}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                            <Text style={styles.menuItemPrice}>{item.price}</Text>
                        </View>
                        <Image
                            source={SPECIAl_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        footerComp: {
            marginHorizontal: 'auto',
            marginBottom: 80,
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 180,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
            justifyContent: "space-around",
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 180,
            height: 180,
        },
        menuItemPrice: {
            fontSize: 20,
            color: theme.text,
            fontWeight: 'bold',
        },
        menuItemName: {
            fontSize: 15,
            fontWeight: 'bold',
            color: theme.text,
        },
    });
}
