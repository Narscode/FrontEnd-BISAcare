import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ClaimStepStatus = "completed" | "current" | "pending";

interface ClaimStep {
  id: string;
  label: string;
  status: ClaimStepStatus;
}

interface ClaimTrackerProps {
  steps: ClaimStep[];
}

const ClaimTracker: React.FC<ClaimTrackerProps> = ({ steps }) => {
  const getCircleColor = (status: ClaimStepStatus) => {
    switch (status) {
      case "completed":
        return "#ECF1FF"; // Light blue
      case "current":
        return "#0391CE"; // Bright blue
      case "pending":
        return "#605D64"; // Grey
    }
  };

  const getCheckColor = (status: ClaimStepStatus) => {
    switch (status) {
      case "completed":
        return "#0A3977"; // Dark blue check
      case "current":
        return "#E4F0FF"; // Light check
      case "pending":
        return "#938F96"; // Grey check
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Claim Tracker</Text>
      <View style={styles.trackerRow}>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Circle with checkmark */}
            <View style={[styles.circle, { backgroundColor: getCircleColor(step.status) }]}>
              <View style={[styles.check, { backgroundColor: getCheckColor(step.status) }]} />
            </View>

            {/* Connector line except after last item */}
            {index < steps.length - 1 && <View style={styles.line} />}
          </React.Fragment>
        ))}
      </View>

      {/* Labels */}
      <View style={styles.labelsRow}>
        {steps.map(step => (
          <Text key={step.id} style={styles.label}>{step.label}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF7FF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#003A53",
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    marginBottom: 16,
  },
  trackerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    width: 15,
    height: 11,
    borderRadius: 2,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(97,97,97,0.2)",
  },
  labelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
    flex: 1,
  },
});

export default ClaimTracker;
