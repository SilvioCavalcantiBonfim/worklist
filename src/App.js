import { Container, Flex, Input, IconButton, InputGroup, Divider, InputLeftElement, Heading, Center, InputRightElement, useDisclosure, Accordion } from '@chakra-ui/react';
import React from 'react';
import { FaPlus, FaSearch, FaBackspace } from "react-icons/fa"
import Card from './components/Card';
import CreateWork from './components/createWork';
import GoalEntity from './Entity/goalEntity';
import TagEntity from './Entity/TagEntity';
import Task from './Entity/taskEntity';
import { ColorModeSwitcher } from './themeControl';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Events, setEvents] = React.useState(null);
  const [search, setSearch] = React.useState('');

  const HandleDelete = (id) => {
    setEvents(e => {
      return e.filter(ee => ee.id !== id);
    });
  }

  const HandleFinishGoal = (i, g) => {
    setEvents(e => {
      const indexGoal = e[i].Goals.indexOf(g);
      const GoalAux = e[i].Goals.map((e, ii) => (ii === indexGoal) ? new GoalEntity(g.ID, g.Description, true, Date.now()) : e)
      return e.map((ee, ii) => (ii === i) ? new Task(ee.ID, ee.Name, ee.CreationDate, ee.Description, GoalAux, ee.Tags) : ee);
    })
  }

  React.useEffect(() => {
    setEvents((v) => {
      try {
        const preloadEvents = JSON.parse(localStorage.getItem('data'));
        return preloadEvents.map(e =>
          new Task(
            e.ID,
            e.Name,
            e.CreationDate,
            e.Description,
            (e.Goals !== undefined) ? e.Goals.map(ee => new GoalEntity(ee.ID, ee.Description, ee.State, ee.EndDate)) : [],
            (e.Tags !== undefined) ? e.Tags.map(ee => new TagEntity(ee.ID, ee.Name, ee.Color)) : []
          ));
      } catch (error) {
        localStorage.setItem('data', '[{"ID":"37b52293-2d32-644f-bb89-cec9a6172d54","Name":"Example","CreationDate":1670984768430,"Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat consectetur condimentum. Sed a quam euismod, laoreet tortor eu est.","Goals":[{"ID":"1eb128d2-f89c-ac64-96a4-62b7da8672a2","Description":"Lorem ipsum viverra.","State":false,"EndDate":null},{"ID":"1f14433e-7aa6-ee1a-fd5e-87b570eaa06a","Description":"Lorem ipsum viverra.","State":false,"EndDate":null},{"ID":"f8830476-e037-1fc3-7d33-66268acb1d6d","Description":"Lorem ipsum viverra.","State":false,"EndDate":null},{"ID":"a256c4af-f13a-c8c6-3dba-1fa1b099f919","Description":"Lorem ipsum viverra.","State":false,"EndDate":null}],"Tags":[{"ID":"0","Name":"Trabalho","Color":"red"},{"ID":"1","Name":"Pessoal","Color":"green"},{"ID":"66ee8711-4437-dbc6-86be-435a67a329f3","Name":"Lazer","Color":"yellow"}]}]')
        return [{ "ID": "37b52293-2d32-644f-bb89-cec9a6172d54", "Name": "Example", "CreationDate": 1670984768430, "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat consectetur condimentum. Sed a quam euismod, laoreet tortor eu est.", "Goals": [{ "ID": "1eb128d2-f89c-ac64-96a4-62b7da8672a2", "Description": "Lorem ipsum viverra.", "State": false, "EndDate": null }, { "ID": "1f14433e-7aa6-ee1a-fd5e-87b570eaa06a", "Description": "Lorem ipsum viverra.", "State": false, "EndDate": null }, { "ID": "f8830476-e037-1fc3-7d33-66268acb1d6d", "Description": "Lorem ipsum viverra.", "State": false, "EndDate": null }, { "ID": "a256c4af-f13a-c8c6-3dba-1fa1b099f919", "Description": "Lorem ipsum viverra.", "State": false, "EndDate": null }], "Tags": [{ "ID": "0", "Name": "Trabalho", "Color": "red" }, { "ID": "1", "Name": "Pessoal", "Color": "green" }] }];
      }
    });
  }, []);

  React.useEffect(() => {
    Events !== null && localStorage.setItem('data', JSON.stringify(Events));
  }, [Events])

  return (<>
    <CreateWork isOpen={isOpen} onClose={onClose} setEvents={setEvents} />
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
          ml={2}
          size="md"
          fontSize="lg"
          onClick={onOpen}
        />
        <Center>
          <Divider orientation='vertical' />
        </Center>
        <ColorModeSwitcher />
      </Flex>
      {(Events !== null && Events.length !== 0) && <Divider my={2}/>}

      <Accordion allowToggle>
        {(Events !== null && Events.length !== 0) && Events.filter(e => {
          const filter = search.split(' ');
          let state = false || filter.length === 0;
          filter.forEach(ee => {
            state = state || e.Description.toLowerCase().includes(ee.toLowerCase()) || e.Name.toLowerCase().includes(ee.toLowerCase())
            e.Goals.forEach(g => {
              state = state || g.Description.toLowerCase().includes(ee.toLowerCase());
            })
          })
          return state;
        }).map((e, i) => <Card key={i} HandleFinishGoal={HandleFinishGoal} eventIndex={Events.indexOf(e)} {...e} query={search.split(' ')} HandleDelete={HandleDelete} />)}
      </Accordion>
    </Container>
  </>);
}
export default App;
