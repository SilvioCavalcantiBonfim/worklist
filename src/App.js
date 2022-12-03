import { Container, Flex, Input, IconButton, InputGroup, Divider, InputLeftElement, VStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { FaPlus, FaSearch } from "react-icons/fa"
import CardEvent from './components/event';
import { ColorModeSwitcher } from './themeControl';

function App() {
  return (<>
    <Container maxW='container.md' minW='container.md' backdropFilter='blur(10px)'>
      <Flex justifyContent='center'>
        <Heading as='h1' size='4xl' margin='15px'>Worklist</Heading>
      </Flex>
      <Flex>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={<FaSearch />} />
          <Input placeholder='Event' />
        </InputGroup>
        <IconButton
          icon={<FaPlus />}
          variant="ghost"
          color="current"
          marginLeft="2"
          size="md"
          fontSize="lg"
        />
        <ColorModeSwitcher />
      </Flex>
      <Divider marginTop='10px' marginBottom='10px' />
      <VStack spacing={4}>
        {events.map((e, i) => <CardEvent key={i} {...e} />)}
      </VStack>
    </Container>
  </>);
}

const events = [{
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  tag: [
    { color: 'gray', name: 'tag' },
    { color: 'red', name: 'tag' },
    { color: 'orange', name: 'tag' },
    { color: 'yellow', name: 'tag' },
    { color: 'green', name: 'tag' },
    { color: 'teal', name: 'tag' },
    { color: 'blue', name: 'tag' },
    { color: 'cyan', name: 'tag' },
    { color: 'purple', name: 'tag' },
    { color: 'pink', name: 'tag' }]
}, {
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  tag: [
    { color: 'gray', name: 'tag' },
    { color: 'red', name: 'tag' },
    { color: 'orange', name: 'tag' },
    { color: 'yellow', name: 'tag' },
    { color: 'green', name: 'tag' },
    { color: 'teal', name: 'tag' },
    { color: 'blue', name: 'tag' },
    { color: 'cyan', name: 'tag' },
    { color: 'purple', name: 'tag' },
    { color: 'pink', name: 'tag' }]
}, {
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  tag: [
    { color: 'gray', name: 'tag' },
    { color: 'red', name: 'tag' },
    { color: 'orange', name: 'tag' },
    { color: 'yellow', name: 'tag' },
    { color: 'green', name: 'tag' },
    { color: 'teal', name: 'tag' },
    { color: 'blue', name: 'tag' },
    { color: 'cyan', name: 'tag' },
    { color: 'purple', name: 'tag' },
    { color: 'pink', name: 'tag' }]
}, {
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  tag: [
    { color: 'gray', name: 'tag' },
    { color: 'red', name: 'tag' },
    { color: 'orange', name: 'tag' },
    { color: 'yellow', name: 'tag' },
    { color: 'green', name: 'tag' },
    { color: 'teal', name: 'tag' },
    { color: 'blue', name: 'tag' },
    { color: 'cyan', name: 'tag' },
    { color: 'purple', name: 'tag' },
    { color: 'pink', name: 'tag' }]
}, {
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  tag: [
    { color: 'gray', name: 'tag' },
    { color: 'red', name: 'tag' },
    { color: 'orange', name: 'tag' },
    { color: 'yellow', name: 'tag' },
    { color: 'green', name: 'tag' },
    { color: 'teal', name: 'tag' },
    { color: 'blue', name: 'tag' },
    { color: 'cyan', name: 'tag' },
    { color: 'purple', name: 'tag' },
    { color: 'pink', name: 'tag' }]
}, {
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  tag: [
    { color: 'gray', name: 'tag' },
    { color: 'red', name: 'tag' },
    { color: 'orange', name: 'tag' },
    { color: 'yellow', name: 'tag' },
    { color: 'green', name: 'tag' },
    { color: 'teal', name: 'tag' },
    { color: 'blue', name: 'tag' },
    { color: 'cyan', name: 'tag' },
    { color: 'purple', name: 'tag' },
    { color: 'pink', name: 'tag' }]
},]

export default App;
