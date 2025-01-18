import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";

import { Colors } from '@/constants/Colors';
import { OFFER_ITEMS } from '@/constants/Offers'
import OFFER_IMAGES from '@/constants/OfferImages'

export default function OffersScreen() {
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />

    const footerComp = <Text style={{ color: theme.text }}></Text>

    return (
        <Container>
            <FlatList
                data={OFFER_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            {Array.isArray(item.includes) && item.includes.length > 0 && (
                                <View style={styles.includesList}>
                                    <Text style={styles.menuItemText}>Includes:</Text>
                                    {item.includes.map((include, index) => (
                                        <Text key={index} style={styles.includeItem}> 
                                            • {include}
                                        </Text>
                                    ))}
                                </View>
                            )}
                            <View style={styles.priceContainer}>
                                <Text style={styles.oldPrice}>{item.price.split(" ")[0]}</Text>
                                <Text style={styles.newPrice}>{item.price.split(" ")[1]}</Text>
                            </View>
                        </View>
                        <Image
                            source={OFFER_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: "transparent",
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : "#000",
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footerComp: {
            marginHorizontal: 'auto',
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
            justifyContent:"space-around"
        },
        menuItemTitle: {
            fontSize: 25,
            fontWeight: 'bold',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 180,
            height: 180,
        },
        includesList: {
            marginTop: 10,
        },
        includeItem: {
            paddingLeft: 20,
            color: theme.text,
        },
        priceContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 3,
            paddingLeft: 20,
        },
        oldPrice: {
            textDecorationLine: "line-through", 
            color: "gray",
            marginRight: 8, 
            fontSize: 14,
        },
        newPrice: {
            color: "green", 
            fontWeight: "bold",
            fontSize: 20,
        },
    })
}