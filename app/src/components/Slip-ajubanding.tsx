import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

interface DocumentCardProps {
  title: string;
  onPress?: () => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, onPress }) => {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Upload Placeholder */}
      <View style={styles.uploadBox}>
        <View style={styles.uploadIconWrapper}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
              stroke="#444"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      </View>

      {/* Details Button */}
      <TouchableOpacity style={styles.detailButton} onPress={onPress}>
        <Text style={styles.detailText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const DocumentCards: React.FC = () => {
  return (
    <View style={styles.container}>
      <DocumentCard
        title="Slip Digital"
        onPress={() => console.log("Slip Digital pressed")}
      />
      <DocumentCard
        title="Aju Banding"
        onPress={() => console.log("Aju Banding pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  card: {
    width: 174,
    height: 210,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#B2E3FF",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2E2E30",
    textAlign: "center",
    marginTop: 5,
  },
  uploadBox: {
    width: 151,
    height: 113,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadIconWrapper: {
    width: 39,
    height: 35,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  detailButton: {
    width: "90%",
    paddingVertical: 10,
    backgroundColor: "#005D85",
    borderRadius: 8,
    alignItems: "center",
  },
  detailText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
});

export default DocumentCards;

