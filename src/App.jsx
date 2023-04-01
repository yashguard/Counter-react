import React, { useState } from 'react';
import './App.css';
import { Box, Button, Center, Container, Heading } from "@chakra-ui/react";

function App() {
  let[state,setState] = useState(0);
  return (
    <Container>
      <Box bg='gray' w='100%' p='20px' m='200px auto' color='white'>
        <Center>
          <Heading mb='25px'>{state}</Heading>
        </Center>
        <Center>
          <Button onClick={()=>setState(state + 5)} m='0 20px' colorScheme='teal'>Add</Button>
          <Button onClick={()=>setState(state - 3)} m='0 20px' colorScheme='teal'>Remove</Button>
          <Button onClick={()=>setState(0)} m='0 20px' colorScheme='teal' variant='outline' color='white'>Clear</Button>
        </Center>
      </Box>
    </Container>
  );
}

export default App;
