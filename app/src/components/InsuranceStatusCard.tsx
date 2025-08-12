import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InsuranceStatusCardProps {
  status: 'active' | 'inactive' | 'pending' | 'unknown';
  memberNumber?: string;
  groupNumber?: string;
  planName?: string;
}

const InsuranceStatusCard: React.FC<InsuranceStatusCardProps> = ({
  status,
  memberNumber,
  groupNumber,
  planName,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return '#28a745';
      case 'inactive':
        return '#dc3545';
      case 'pending':
        return '#ffc107';
      default:
        return '#6c757d';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'active':
        return 'Active Coverage';
      case 'inactive':
        return 'No Active Coverage';
      case 'pending':
        return 'Coverage Pending';
      default:
        return 'Coverage Status Unknown';
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.statusIndicator, { backgroundColor: getStatusColor() }]} />
      <View style={styles.content}>
        <Text style={styles.statusText}>{getStatusText()}</Text>
        {memberNumber && <Text style={styles.detail}>Member: {memberNumber}</Text>}
        {groupNumber && <Text style={styles.detail}>Group: {groupNumber}</Text>}
        {planName && <Text style={styles.detail}>Plan: {planName}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusIndicator: {
    width: 8,
    borderRadius: 4,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});

export default InsuranceStatusCard;