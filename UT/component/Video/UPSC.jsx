import { StyleSheet, Text, View, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback, useRef } from "react";
import data from "./Data";

const UPSC = () => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const getRandomColor = () => {
      const colors = [
        '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', 
        '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3', 
        '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#CFD8DC'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
  return (
    <View className="pb-[300px]">
    <View className="p-2 bg-[#f44336] ">
      <Text className="font-serif font-bold  text-xl ">If You Focus You Will Learn, Without Focusing you can't learn, if You learn You can grow, Without learning you can't grow, if you Grow you can enjoy, without growing you shouldn't enjoy Reapet</Text>
    </View>
    <View>
      <ScrollView   showsVerticalScrollIndicator
   >
        {data.map((item, key) => (
          <View className=" flex flex-col p-2 " key={item.id}>
          <View className="p-1 m-auto border rounded   "style={[ { backgroundColor: getRandomColor() }]} >
          <YoutubePlayer
              height={260}
              width={370}
              videoId={item.video_link}
            />
            <Text>v</Text>
          </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
  )
}

export default UPSC

const styles = StyleSheet.create({})