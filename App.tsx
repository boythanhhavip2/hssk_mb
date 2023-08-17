import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login/login';
import Home from './src/screens/Home/home';
import Register from './src/screens/Register/register';
import Forgot from './src/screens/Forgot/forgotpass'
import CreateFile from './src/screens/Home/ListMenu/createFile';
import ListFile from './src/screens/Home/ListMenu/listFile';
import ListHospital from './src/screens/Home/ListMenu/listHospital';
import ScanFile from './src/screens/Home/TaskMenu/scanFile';
import ConnectHistory from './src/screens/Home/TaskMenu/connectHistory';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
        <Stack.Screen name='CreateFile' component={CreateFile} options={{ headerShown: false }} />
        <Stack.Screen name='ListFile' component={ListFile} options={{ headerShown: false }} />
        <Stack.Screen name='ListHospital' component={ListHospital} options={{ headerShown: false }} />
        <Stack.Screen name='ScanFile' component={ScanFile} options={{ headerShown: false }} />
        <Stack.Screen name='ConnectHistory' component={ConnectHistory} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;