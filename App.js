// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './components/telaLogin';
import TelaCadastro from './components/telaCadastro';
import TelaCardapio from './components/telaCardapio';
import TelaEditar from './components/telaEditar.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cardapio">
        <Stack.Screen name="Login" component={TelaLogin}/>
        <Stack.Screen name="Cadastro" component={TelaCadastro}/>
        <Stack.Screen name="Cardapio" component={TelaCardapio}/>
        <Stack.Screen name="Editar" component={TelaEditar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;