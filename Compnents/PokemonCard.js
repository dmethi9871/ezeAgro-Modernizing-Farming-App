import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

export default function PokemonCard({ name, video, type, weakness, hp, moves}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = async () => {
    await videoRef.current.setIsMutedAsync(!isMuted);
    setIsMuted(!isMuted);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>Type: {type}</Text>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={video}
          style={styles.video}
          resizeMode="cover"
          shouldPlay={false}
          isLooping={true}
          onPlaybackStatusUpdate={(status) => setIsPlaying(status.isPlaying)}
        />
        <View style={styles.controlsContainer}>
          <TouchableOpacity onPress={handlePlayPause}>
            <Ionicons name={isPlaying ? "pause" : "play"} size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMuteUnmute}>
            <Ionicons name={isMuted ? "volume-mute" : "volume-high"} size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subtitle}>Weakness: {weakness}</Text>
      <Text style={styles.subtitle}>HP: {hp}</Text>
      <Text style={styles.moves}>Moves: {moves}</Text>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    margin: 16,
    width: windowWidth - 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  videoContainer: {
    position: "relative",
    marginBottom: 16,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  controlsContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
    padding: 8,
  },
  moves: {
    fontSize: 16,
    color: "#444",
  },
});
