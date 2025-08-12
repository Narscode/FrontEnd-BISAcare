import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SpeechToTextInputProps {
  onTextReceived: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const SpeechToTextInput: React.FC<SpeechToTextInputProps> = ({
  onTextReceived,
  placeholder = "Tap to start speaking...",
  disabled = false,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');

  const startListening = () => {
    if (disabled) return;
    
    setIsListening(true);
    // Placeholder implementation
    // In a real implementation, this would integrate with speech recognition API
    setTimeout(() => {
      const mockText = "This is a sample transcribed text from speech input.";
      setTranscribedText(mockText);
      onTextReceived(mockText);
      setIsListening(false);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          isListening && styles.buttonListening,
          disabled && styles.buttonDisabled,
        ]}
        onPress={isListening ? stopListening : startListening}
        disabled={disabled}
      >
        <Text style={styles.icon}>
          {isListening ? '🔴' : '🎤'}
        </Text>
        <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
          {isListening ? 'Listening... Tap to stop' : placeholder}
        </Text>
      </TouchableOpacity>
      
      {transcribedText && (
        <View style={styles.transcriptionContainer}>
          <Text style={styles.transcriptionLabel}>Transcribed:</Text>
          <Text style={styles.transcriptionText}>{transcribedText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    justifyContent: 'center',
  },
  buttonListening: {
    backgroundColor: '#dc3545',
  },
  buttonDisabled: {
    backgroundColor: '#6c757d',
    opacity: 0.6,
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextDisabled: {
    color: '#ccc',
  },
  transcriptionContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  transcriptionLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    fontWeight: '600',
  },
  transcriptionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default SpeechToTextInput;