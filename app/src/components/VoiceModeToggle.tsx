import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface VoiceModeToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const VoiceModeToggle: React.FC<VoiceModeToggleProps> = ({ isEnabled, onToggle }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onToggle}>
      <Text style={styles.label}>Voice Mode</Text>
      <View style={[styles.toggle, isEnabled && styles.toggleEnabled]}>
        <View style={[styles.toggleHandle, isEnabled && styles.toggleHandleEnabled]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginRight: 12,
  },
  toggle: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  toggleEnabled: {
    backgroundColor: '#007AFF',
  },
  toggleHandle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  toggleHandleEnabled: {
    alignSelf: 'flex-end',
  },
});

export default VoiceModeToggle;