import { Image, StyleSheet, Pressable, Text, ImageBackground} from "react-native";
import { Link } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import foodImg from "@/assets/images/food-six.jpg";
import beveImg from "@/assets/images/food-eight.jpg";

export default function MenuScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#ffffff" }}
      headerImage={
        <Image
          source={require("@/assets/images/food-one.png")}
          style={styles. coverImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">Discover the flavors of our</ThemedText> 
        <Text style={styles.highlight}>Signature Dishes!</Text>
      </ThemedView>

       <ThemedView style={styles.stepContainer}>
         <ImageBackground
        source={foodImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Link href={"/foodMenu"} style={{marginHorizontal:"auto"}} asChild>
        <Pressable style={styles.button}>
           <Text style={styles.buttonText}>Foods 🍜</Text> 
        </Pressable>
        </Link>  
        </ImageBackground>
      </ThemedView>

       <ThemedView style={styles.stepContainer}>
        <ImageBackground
        source={beveImg}
        resizeMode="cover"
        style={styles.image}
      >
        <Link href={"/beverageMenu"} style={{marginHorizontal:"auto"}} asChild>
        <Pressable style={styles.button}>
           <Text style={styles.buttonText}>Beverages 🍹</Text> 
        </Pressable>
        </Link>  
        </ImageBackground>
      </ThemedView>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    flex: 1,
    height: "100%",
    width:"100%",
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
    color: "#00AEEF",
    fontSize: 40,
  },
  stepContainer: {
    height: 200,
    width: "auto",
   
    gap: 8,
    marginBottom: 8,
  },
  button:{
    width: "100%",
    height: 50,
    backgroundColor: 'rgba(67, 67, 67, 0.5)',
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    borderRadius: 10,
  },
  buttonText:{
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
  },
   image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
  },
});
