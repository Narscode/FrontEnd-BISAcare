import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TextToSpeechFeedbackProps {
  text: string;
  autoPlay?: boolean;
  showControls?: boolean;
}

const TextToSpeechFeedback: React.FC<TextToSpeechFeedbackProps> = ({
  text,
  autoPlay = false,
  showControls = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const playText = () => {
    setIsPlaying(true);
    // Placeholder implementation
    // In a real implementation, this would integrate with text-to-speech API
    setTimeout(() => {
      setIsPlaying(false);
    }, text.length * 50); // Simulate reading time
  };

  const stopText = () => {
    setIsPlaying(false);
  };

  const adjustPlaybackRate = () => {
    const rates = [0.5, 0.75, 1.0, 1.25, 1.5];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    setPlaybackRate(rates[nextIndex]);
  };

  // Auto-play when component mounts
  React.useEffect(() => {
    if (autoPlay && text) {
      playText();
    }
  }, [autoPlay, text]);

  if (!showControls && !autoPlay) {
    return null;
  }

  return (
    <View style={styles.container}>
      {text && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
      
      {showControls && (
        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.controlButton, isPlaying && styles.stopButton]}
            onPress={isPlaying ? stopText : playText}
          >
            <Text style={styles.controlIcon}>
              {isPlaying ? '⏹️' : '🔊'}
            </Text>
            <Text style={styles.controlText}>
              {isPlaying ? 'Stop' : 'Listen'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.rateButton} onPress={adjustPlaybackRate}>
            <Text style={styles.rateText}>Speed: {playbackRate}x</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {isPlaying && (
        <View style={styles.playingIndicator}>
          <Text style={styles.playingText}>🎵 Playing audio...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textContainer: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    flex: 0.7,
  },
  stopButton: {
    backgroundColor: '#dc3545',
  },
  controlIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  controlText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  rateButton: {
    padding: 12,
    backgroundColor: '#6c757d',
    borderRadius: 8,
    flex: 0.25,
    alignItems: 'center',
  },
  rateText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  playingIndicator: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#d1ecf1',
    borderRadius: 6,
    alignItems: 'center',
  },
  playingText: {
    fontSize: 12,
    color: '#0c5460',
    fontStyle: 'italic',
  },
});

export default TextToSpeechFeedback;