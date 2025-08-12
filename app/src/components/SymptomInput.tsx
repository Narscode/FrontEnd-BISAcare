import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface SymptomInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
}

const SymptomInput: React.FC<SymptomInputProps> = ({
  value,
  onChangeText,
  placeholder = "Describe your symptoms...",
  multiline = true,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Symptom Description</Text>
      <TextInput
        style={[styles.input, multiline && styles.multilineInput]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
      <Text style={styles.hint}>
        Be as specific as possible. Include when symptoms started, severity, and any relevant details.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  multilineInput: {
    height: 120,
  },
  hint: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    fontStyle: 'italic',
  },
});

export default SymptomInput;