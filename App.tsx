import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import RootContainer from './src/Container';
import {theme} from './src/core/theme';
import {AppContext, DefaultAppContext} from './src/core/context';
import {setUp} from './src/core/strings';

const App = () => {
  setUp();
  return (
    <PaperProvider theme={theme}>
      <AppContext.Provider value={DefaultAppContext}>
        <RootContainer />
      </AppContext.Provider>
    </PaperProvider>
  );
};

export default App;
