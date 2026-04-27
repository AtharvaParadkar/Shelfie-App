import { StyleSheet, Text, View, Image, Platform, useColorScheme } from 'react-native'
import { Link } from 'expo-router'

import photo from "../assets/image/logo_dark.png"
import React from 'react'
import { Colors } from '../constants/Colors';
import ThemedView from '../components/ThemedView';
import ThemedCard from '../components/ThemedCard';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';

//? Home component to display the home screen of the app
const home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.dark

  return (
    <ThemedView style={design.container}>

      <ThemedLogo style={design.picture} />

      <ThemedText style={StyleSheet.title} title = {true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</ThemedText>

      <ThemedCard >
        <ThemedText>
          A card!
        </ThemedText>
      </ThemedCard>

      <Link href='/about' style={design.link}>
        <ThemedText>About Page</ThemedText>
      </Link>

      <Link href='/contact' style={design.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>

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