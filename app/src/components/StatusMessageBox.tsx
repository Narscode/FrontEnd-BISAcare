import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusMessageBoxProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  actionText?: string;
}

const StatusMessageBox: React.FC<StatusMessageBoxProps> = ({
  type,
  title,
  message,
  actionText,
}) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb',
          iconColor: '#28a745',
          icon: '✅',
        };
      case 'warning':
        return {
          backgroundColor: '#fff3cd',
          borderColor: '#ffeaa7',
          iconColor: '#ffc107',
          icon: '⚠️',
        };
      case 'error':
        return {
          backgroundColor: '#f8d7da',
          borderColor: '#f5c6cb',
          iconColor: '#dc3545',
          icon: '❌',
        };
      case 'info':
      default:
        return {
          backgroundColor: '#d1ecf1',
          borderColor: '#bee5eb',
          iconColor: '#17a2b8',
          icon: 'ℹ️',
        };
    }
  };

  const typeStyles = getTypeStyles();

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: typeStyles.backgroundColor,
        borderColor: typeStyles.borderColor,
      }
    ]}>
      <Text style={styles.icon}>{typeStyles.icon}</Text>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        {actionText && (
          <Text style={[styles.actionText, { color: typeStyles.iconColor }]}>
            {actionText}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default StatusMessageBox;