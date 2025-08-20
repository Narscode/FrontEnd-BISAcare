import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const BISAbotButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.button}>
      {/* Chat Icon */}
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>💬</Text>
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
    fontSize: 16,
    textAlign: 'center',
  },
  text: {
    color: "#5785FF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.42,
  },
});

export default BISAbotButton;

