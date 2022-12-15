import React from 'react';
import { Container, Heading } from '@chakra-ui/layout';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import './App.css';
import ScoreCard from './components/ScoreCard';
import store from './store';
import CanvasBoard from './components/Canvas';

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">Snake Game</Heading>
          <ScoreCard />
          <CanvasBoard height={600} width={1000} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
