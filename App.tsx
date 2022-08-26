import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Home} from './src/screens';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
};

export default App;
