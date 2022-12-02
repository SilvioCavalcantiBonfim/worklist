import { Container, FormControl, Input } from '@chakra-ui/react';
import './App.css';
import { ColorModeSwitcher } from './themeControl/teste';

function App() {
  return (<div className='App'>
    <span>Worklist</span>
    <FormControl>
      <Container maxW='container.sm'>
        <Input placeholder='Event' />
        <ColorModeSwitcher/>
      </Container>
    </FormControl>
  </div>);
}

export default App;
