import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'phone';
  value: string;
  placeholder?: string;
  required?: boolean;
}

interface SmartFormProps {
  fields: FormField[];
  onFieldChange: (fieldId: string, value: string) => void;
}

const SmartForm: React.FC<SmartFormProps> = ({ fields, onFieldChange }) => {
  const getKeyboardType = (type: string) => {
    switch (type) {
      case 'number':
        return 'numeric';
      case 'email':
        return 'email-address';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default';
    }
  };

  return (
    <View style={styles.container}>
      {fields.map((field) => (
        <View key={field.id} style={styles.fieldContainer}>
          <Text style={styles.label}>
            {field.label}
            {field.required && <Text style={styles.required}> *</Text>}
          </Text>
          <TextInput
            style={styles.input}
            value={field.value}
            onChangeText={(value) => onFieldChange(field.id, value)}
            placeholder={field.placeholder}
            keyboardType={getKeyboardType(field.type)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
});

export default SmartForm;
