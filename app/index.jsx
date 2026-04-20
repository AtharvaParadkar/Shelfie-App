import { StyleSheet, Text, View, Image } from 'react-native'
import photo from "../assets/image/logo_dark.png"
import React from 'react'

//? Home component to display the home screen of the app
const home = () => {
  return (
    <View style={design.container}>

      <Image source={photo} style={design.picture}/>

      <Text style={design.t1}>Home</Text>
      <Text style={{ marginTop: 10, marginBottom: 20 }}>
        Hii
      </Text>

      <Text style={[design.t2], {color:"#ff39ae"}}>Welcome to the Home Screen!</Text>

      <View style={design.aCard}>
        <Text>
          A card!
        </Text>
      </View>

    </View>
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
    fontSize: 30
  },
  t2: {
    fontSize: 10,
    marginBottom: 10
  },
  aCard: {
    backgroundColor: '#04f8bf',
    padding: 30,
    borderRadius: 10,
    boxShadow: '4px, 8px, rgba(0,0,0,0.5)'
  },
  picture:{
    marginVertical: 30
  }
})