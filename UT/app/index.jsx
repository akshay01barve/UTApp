import { StyleSheet, Text, View } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe"
import React, { useState, useCallback, useRef } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const index = () => {

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  return (
    <View>
      {/* <Tab.Navigator>
      <Tab.Screen name="index" component={index} />
      <Tab.Screen name="video" component={Video} />
    </Tab.Navigator> */}
      
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"fOJlpSioC_U"}
        onChangeState={onStateChange}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})