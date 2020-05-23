import React, {useState} from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import LoginScreen from './screens/LoginScreen';
import Something from './screens/GetStartedScreen';
import authReducer from './store/reducers/auth';
// import WelcomeScreen2 from './screens/WelcomeScreen4';
import Navigator from './navigator/navigation';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded)
  {
    return (
      <AppLoading
        startAsync = {fetchFonts}
        onFinish = {() => setFontLoaded(true)}
      />
  )}

  return  <Provider store={store}>
            {/* <LoginScreen/> */}
            <Navigator/>
            {/* <Something/> */}
          </Provider>
}



