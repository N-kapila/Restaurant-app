import React from 'react';
import { StyleSheet, Image, View , Text,Platform} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

const locations = [
  { id: 1, latitude: 40.748817, longitude: -73.985428, title: 'Spicy World NY', description: 'New York, NY' },
  { id: 2, latitude: 34.052235, longitude: -118.243683, title: 'Spicy World LA', description: 'Los Angeles, CA' },
  { id: 3, latitude: 51.507351, longitude: -0.127758, title: 'Spicy Europe', description: 'London, UK' },
];

export default function ContactScreen() {
 
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
              <Image
                source={require("@/assets/images/contactCover.png")}
                style={styles. coverImage}
              />
            }
      >
        <Text type="title" style={styles.highlight}>Spicy World! 🍽️🌶️</Text>
      <ThemedText style={styles.slogan}>Where Every Bite Tells a Flavorful Story!</ThemedText>

      <Collapsible title="🌟 Our Story">
        <ThemedText type="defaultSemiBold">
          Welcome to Spicy World, where passion meets flavor! 🌶️✨{'\n '}{'\n '}
          <ThemedText >We craft mouthwatering dishes with bold spices and fresh ingredients. From sizzling starters to delightful desserts, Spicy World offers a flavorful and unforgettable dining experience.</ThemedText> {'\n '}
        </ThemedText>
       <ThemedText type="defaultSemiBold">Come, savor the spice, and let your taste buds dance! 🍽️🎉</ThemedText>
      </Collapsible>

      <Collapsible title="📞 Get in Touch">
        <ThemedText style={styles.contactInfo}>
          <ThemedText type="defaultSemiBold"> 🏪</ThemedText> 1234 Spicy Street, Flavorville, USA{'\n '}
          <ThemedText type="defaultSemiBold">☎</ThemedText> 123-456-7890{'\n '}
          <ThemedText type="defaultSemiBold">💌</ThemedText> info@spicyworld.com{'\n '}
          <ThemedText type="defaultSemiBold">🕒</ThemedText> Mon-Sun: 11:00 AM - 10:00 PM{'\n '} 
        </ThemedText>
      </Collapsible>

      <Collapsible title="📍 Where to Find Us">
      <View style={{ height: 300, marginTop: 10 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 40.748817,
            longitude: -73.985428,
            latitudeDelta: 30,
            longitudeDelta: 30,
          }}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
              description={location.description}
            />
          ))}
        </MapView>
      </View>
    </Collapsible>

      <Collapsible title="🗣️ Your Voice Matters">
        <ThemedText>
          We value your feedback and suggestions.{'\n '}{'\n '}
          <ThemedText type="defaultSemiBold">Share your thoughts with us at: ✉️ </ThemedText>
           <ExternalLink href="#">
          <ThemedText type="link" > suggestions@spicyworld.com</ThemedText>
        </ExternalLink>
        </ThemedText>
      </Collapsible>

      <Collapsible title="🔒 Your Trust, Our Priority">
        <ThemedText>
          At Spicy World, we are committed to ensuring the privacy and security of your personal information.{'\n '}{'\n '}
          <ThemedText type="defaultSemiBold">For more information, visit our Privacy Policy:</ThemedText>
          <ExternalLink href="#">
          <ThemedText type="link"> spicyworld.com/privacy</ThemedText>
        </ExternalLink>
        </ThemedText>
       
      </Collapsible>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  coverImage: {
    flex: 1,
    height: "100%",
    width:"100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "red",
    fontSize: 40,
  },
  slogan: {
    fontSize: 17,
    color: "rgba(248, 248, 248, 0.5)",
    fontStyle: "italic",
    textAlign: "center",
    margin: 8,
},
 contactInfo: {
  textAlign: "left",
  fontSize: 16,
  margin: 8,
  marginBottom:0,
},
});
