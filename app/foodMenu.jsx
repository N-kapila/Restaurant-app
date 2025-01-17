import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, SectionList } from "react-native";

import { Colors } from '@/constants/Colors';
import { FOOD_SECTIONS } from '@/constants/FoodMenu'
import FOOD_MENU_IMAGES from '@/constants/FoodMenuImages'

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const footerComp = <Text style={{ color: theme.text }}></Text>

    return (
        <Container>
            <SectionList
            contentContainerStyle={styles.contentContainer}
            ListFooterComponent={footerComp}
            ListFooterComponentStyle={styles.footerComp}
            ListEmptyComponent={<Text>No items</Text>}
            sections={FOOD_SECTIONS}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.row}>
                     <View style={styles.menuTextRow}>
                        <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                        <Text style={styles.menuItemText}>{item.description}</Text>
                        <Text style={styles.menuItemPrice}>{item.price}</Text>
                     </View>
                    <Image
                     source={FOOD_MENU_IMAGES[item.id - 1]}
                    style={styles.menuImage}
                     />
                </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
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
            backgroundColor: theme.background,
        },
      
        footerComp: {
            marginHorizontal: 'auto',
            marginBottom: 70,
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 120,
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
            fontSize: 18,
            fontWeight: 'bold',
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 120,
            height: 120,
        },
         sectionHeader: {
            fontSize: 24,
            fontWeight: 'bold',
            backgroundColor: theme.background,
            color: theme.text,
            padding: 10,
            textAlign: 'center',
        },
        menuItemPrice: {
            fontSize: 20,
            color: theme.text,
            fontWeight: 'bold',
        },
    })
}