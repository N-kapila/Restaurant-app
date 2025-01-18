import { Image, StyleSheet, Pressable, Text, ImageBackground, View } from "react-native";
import { Link } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import specialImg from "@/assets/images/food-three.png";
import menuImg from "@/assets/images/food-four.jpg";
import offerImg from "@/assets/images/food-five.png";
import contactImg from "@/assets/images/food-seven.png";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#ffffff" }}
      headerImage={
        <Image
          source={require("@/assets/images/food-two.jpg")}
          style={styles.coverImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the</ThemedText>
        <Text style={styles.highlight}>Spicy World!</Text>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ImageBackground source={specialImg} resizeMode="cover" style={styles.image}>
          <Link href={"/special"} style={{ marginHorizontal: "auto" }} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>🌟 Today's Special 🌟</Text>
            </Pressable>
          </Link>
        </ImageBackground>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ImageBackground source={menuImg} resizeMode="cover" style={styles.image}>
          <Link href={"/menu"} style={{ marginHorizontal: "auto" }} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Menu 🍽️</Text>
            </Pressable>
          </Link>
        </ImageBackground>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ImageBackground source={offerImg} resizeMode="cover" style={styles.image}>
          <Link href={"/offers"} style={{ marginHorizontal: "auto" }} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Offers 🎉</Text>
            </Pressable>
          </Link>
        </ImageBackground>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ImageBackground source={contactImg} resizeMode="cover" style={styles.image}>
          <Link href={"/contact"} style={{ marginHorizontal: "auto" }} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Us 📞</Text>
            </Pressable>
          </Link>
        </ImageBackground>
      </ThemedView>

      <ThemedView style={styles.footerContainer}>
        <View style={styles.line} />
        <Text style={styles.footerText}>
          <Text style={styles.footerHighlight}>@2025 Spicy World. All Rights Reserved.</Text> {'\n '}{'\n '}
          Designed by: <Text style={styles.name}>Nirmal Kapilarathne</Text>
        </Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 8,
  },
  highlight: {
    fontWeight: "bold",
    color: "red",
    fontSize: 50,
  },
  stepContainer: {
    height: 200,
    width: "auto",
    gap: 8,
    marginBottom: 8,
  },
  myImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: 'rgba(34, 33, 33, 0.5)',
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
  },
  footerContainer: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 5,
    marginTop: 20,
  },
  line: {
    borderBottomColor: "rgba(229, 227, 227, 0.5)",
    borderBottomWidth: 1,
    width: '100%',
    maxWidth: 300,
    marginHorizontal: 'auto',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#bdbdbd',
    textAlign: 'center',
  },
  footerHighlight: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  name: {
    color: '#00bcd4',
    fontStyle: 'italic',
    fontWeight: '600',
  },
});
