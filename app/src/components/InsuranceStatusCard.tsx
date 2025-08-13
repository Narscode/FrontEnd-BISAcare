import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface PercentageCardProps {
  title: string;
  percentage: number; // e.g., 80 means 80%
  onDetailPress?: () => void;
}

const PercentageCard: React.FC<PercentageCardProps> = ({
  title,
  percentage,
  onDetailPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Percentage */}
      <Text style={styles.percentage}>{percentage}%</Text>

      {/* Detail Button */}
      <TouchableOpacity style={styles.detailButton} onPress={onDetailPress}>
        <Text style={styles.detailText}>Detail</Text>
      </TouchableOpacity>

      {/* Circular Background (two layers) */}
      <View style={[styles.circle, styles.circleLight]} />
      <View style={[styles.circle, styles.circleDark]} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 171,
    height: 120,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(217, 217, 217, 0.14)',
    position: 'relative',
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2E2E30',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  percentage: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    lineHeight: 40,
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  detailButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#005D85',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    shadowColor: '#101828',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  detailText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    lineHeight: 20,
    fontFamily: 'Inter',
  },
  circle: {
    width: 58,
    height: 58,
    borderRadius: 9999,
    position: 'absolute',
    top: 39,
    right: 15,
    transform: [{ rotate: '48deg' }],
  },
  circleLight: {
    backgroundColor: '#F7F2FF',
  },
  circleDark: {
    backgroundColor: '#BB94FF',
  },
});

export default PercentageCard;
