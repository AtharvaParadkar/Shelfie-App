import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView';
import ThemedCard from '../components/ThemedCard';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

//! adb reverse tcp:8081 tcp:8081
//* to run before running in actual device

//? Home component to display the home screen of the app
const home = () => {
  return (
    <ThemedView style={design.container}>

      <ThemedLogo />
      <Spacer />

      <ThemedText style={StyleSheet.title} title={true}>The Number 1</ThemedText>

      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</ThemedText>

      {/* <ThemedCard > <ThemedText> A card! </ThemedText> </ThemedCard> */}

      <Link href='/login' style={design.link}>
        <ThemedText>Loign Page</ThemedText>
      </Link>

      <Link href='/register' style={design.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>

      <Link href='/profile' style={design.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>

    </ThemedView>
  )
}

export default home

const design = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
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
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})