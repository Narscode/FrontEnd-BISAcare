import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
}

interface ClaimTimelineProps {
  events: TimelineEvent[];
}

const ClaimTimeline: React.FC<ClaimTimelineProps> = ({ events }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#28a745';
      case 'current':
        return '#007AFF';
      case 'pending':
        return '#6c757d';
      default:
        return '#6c757d';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'current':
        return '🔄';
      case 'pending':
        return '⏳';
      default:
        return '⏳';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Claim Timeline</Text>
      
      {events.map((event, index) => (
        <View key={event.id} style={styles.eventContainer}>
          <View style={styles.timeline}>
            <View style={[styles.dot, { backgroundColor: getStatusColor(event.status) }]} />
            {index < events.length - 1 && <View style={styles.line} />}
          </View>
          
          <View style={styles.eventContent}>
            <Text style={styles.eventDate}>{event.date}</Text>
            <Text style={styles.eventTitle}>
              {getStatusIcon(event.status)} {event.title}
            </Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  eventContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timeline: {
    alignItems: 'center',
    marginRight: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#ddd',
    marginTop: 4,
  },
  eventContent: {
    flex: 1,
  },
  eventDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 18,
  },
});

export default ClaimTimeline;