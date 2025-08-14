import React from 'react';
import { View } from 'react-native';
import ClaimTracker from './src/components/ClaimTracker.tsx';

const App = () => {
  return (
    <View>
      <ClaimTracker
        steps={[
          { id: "1", label: "Dikirim", status: "completed" },
          { id: "2", label: "Review", status: "completed" },
          { id: "3", label: "Diterima", status: "current" },
          { id: "4", label: "Ditolak", status: "pending" },
        ]}
      />
    </View>
  );
};

export default App;12