import { Container, Flex, Input, IconButton, InputGroup, Divider, InputLeftElement, Heading, Center, InputRightElement, useDisclosure, Accordion } from '@chakra-ui/react';
import React from 'react';
import { FaPlus, FaSearch, FaBackspace } from "react-icons/fa"
import { RiFilterFill } from "react-icons/ri"
import Card from './components/Card/index2';
import CreateWork from './components/createWork';
import TagEntity from './Entity/TagEntity';
// import Task from './Entity/task';
import { ColorModeSwitcher } from './themeControl';

function App() {
  const [Events, setEvents] = React.useState(null);

  const [search, setSearch] = React.useState('');

  const [tags, setTags] = React.useState([]);

  const HandleDelete = (id) => {
    setEvents(e => {
      return e.filter(ee => ee.id !== id);
    });
  }

  React.useEffect(() => {
    if (localStorage.getItem('tags') !== null)
      setTags(JSON.parse(localStorage.getItem('tags')).map(e => new TagEntity(e.ID, e.Name, e.Color)));


    if (localStorage.getItem('data') !== null)
      setEvents(JSON.parse(localStorage.getItem('data')).map(e => e));
    else
      setEvents([]);
  }, []);

  React.useEffect(() => {
    Events !== null && localStorage.setItem('data', JSON.stringify(Events));
  }, [Events])

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (<>
    <CreateWork isOpen={isOpen} onClose={onClose} />
    <Container maxW='container.md' minW='container.md' backdropFilter='blur(10px)' marginBottom='10px'>
      <Flex justifyContent='center'>
        <Heading as='h1' size='4xl' margin='15px'>Worklist</Heading>
      </Flex>
      <Flex>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={<FaSearch />} />
          <Input placeholder='Search' value={search} isDisabled={(Events !== null) ? Events?.length === 0 : false} onChange={(e) => setSearch(e.target.value)} />

          {search !== '' && <InputRightElement>
            <IconButton
              icon={<FaBackspace />}
              variant="link"
              color="current"
              size="md"
              fontSize="lg"
              onClick={() => setSearch('')}
            />
          </InputRightElement>}
        </InputGroup>
        <IconButton
          icon={<FaPlus />}
          variant="ghost"
          color="current"
          marginLeft="2"
          size="md"
          fontSize="lg"
          onClick={onOpen}
        />
        <IconButton
          icon={<RiFilterFill />}
          variant="ghost"
          color="current"
          marginRight="2"
          size="md"
          fontSize="lg"
        />
        <Center>
          <Divider orientation='vertical' />
        </Center>
        <ColorModeSwitcher />
      </Flex>
      {(Events !== null && Events.length !== 0) && <Divider marginTop='10px' marginBottom='10px' />}
      {/* <VStack spacing={4}>
        {Events !== null && Events.map((e, i) => <CardEvent key={i} {...e} HandleDelete={HandleDelete} />)}
      </VStack> */}
      <Accordion allowToggle>
        {(Events !== null && Events.length !== 0) && events.map((e, i) => <Card key={i} {...e} HandleDelete={HandleDelete} />)}
      </Accordion>
    </Container>
  </>);
}

const events = [{
  id: 0,
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  goals: [
    {
      id: 0,
      description: 'teste 1',
      state: false,
      endDate: null
    },
    {
      id: 1,
      description: 'teste 2',
      state: true,
      endDate: 1
    },
    {
      id: 2,
      description: 'teste 3',
      state: false,
      endDate: null
    },
  ],
  tag: []
}, {
  id: 5,
  title: 'titulo',
  DateTimeLocal: 'datetime-local',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta vitae nisi ut semper. Phasellus facilisis augue at ultricies porttitor. Proin ac aliquet lectus, in volutpat orci. Vestibulum at est eu felis tempor dignissim vitae nec ligula. Vivamus molestie ligula felis, ultrices viverra nisi placerat ac. Duis congue ante mi.',
  goals: [
  ],
  tag: [
    // {ID:1, Color: 'gray', Name: 'tag' },
    { color: 'red', name: 'tag' },
    { color: 'orange', name: 'tag' },
    { color: 'yellow', name: 'tag' },
    { color: 'green', name: 'tag' },
    { color: 'teal', name: 'tag' },
    { color: 'blue', name: 'tag' },
    { color: 'cyan', name: 'tag' },
    { color: 'purple', name: 'tag' },
    { color: 'pink', name: 'tag' }]
}]

export default App;
