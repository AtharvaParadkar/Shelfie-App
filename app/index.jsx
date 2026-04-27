import { StyleSheet, Text, View, Image, Platform, useColorScheme } from 'react-native'
import { Link } from 'expo-router'

import photo from "../assets/image/logo_dark.png"
import React from 'react'
import { Colors } from '../constants/Colors';
import ThemedView from '../components/ThemedView';

//? Home component to display the home screen of the app
const home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <ThemedView style={[design.container, { backgroundColor: theme.background }]}>

      <Image source={photo} style={design.picture} />

      <Text style={[design.t1, { color: theme.title }]}>The Number 1</Text>


      {/* <Text style={{ marginTop: 10, marginBottom: 20 }}>
        Hii
      </Text> */}

      <Text style={[design.t2, { color: theme.text }]}>Reading List App</Text>

      {/* <View style={design.aCard}>
        <Text>
          A card!
        </Text>
      </View> */}

      <Link href='/about' style={design.link}>About Page</Link>
      <Link href='/contact' style={design.link}>Contact Page</Link>

    </ThemedView>
  )
}

export default home

const design = StyleSheet.create({
  container: {
    backgroundColor: "#017390",
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  t1: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20
  },
  t2: {
    fontSize: 10,
    marginBottom: 10,
    marginBottom: 10
  },
  aCard: {
    backgroundColor: '#04f8bf',
    padding: 30,
    borderRadius: 10,
    // Native shadow properties (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    // Android shadow
    elevation: 8,
  },
  picture: {
    marginVertical: 10
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})