import React, {useState} from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPlaying,setCurrentPlaying] = useState(null);

  const item = {
    id: 1,
    title: "KayBlack",
    group: "AC/DC",
    album_image: "https://soumaisfavela.com.br/wp-content/uploads/2023/03/5054197632860-cover-zoom.jpg"
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Minhas Musicas</Text>
      <MusicItem 
      isPlaying={() => currentPlaying == item.id} 
      music={item} 
      navigation={navigation} 
      onPlayPause={() => {}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight:"bold",
    color: "#fff",
    marginBottom:20,
    marginLeft:20,
  },
});
