import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const BISAbotButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      {/* Chat Icon */}
      <View style={styles.iconWrapper}>
        <Image
          source={require("../assets/chat.png")} // put your chat.svg converted to png in assets
          style={styles.icon}
          resizeMode="contain"
        />
      </View>

      {/* BISAbot Text */}
      <Text style={styles.text}>BISAbot</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#5785FF",
  },
  iconWrapper: {
    width: 24,
    height: 24,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 18,
    height: 18,
  },
  text: {
    color: "#5785FF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.42,
  },
});

export default BISAbotButton;

