import {
    AspectRatio,
    Box,
    Button,
    Fade,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react";
import React from "react";
import FormTag from "./FormTag";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { MdOutlineSaveAlt } from 'react-icons/md';
import IMG1 from '../../Images/1.png';
import FormGoal from "./FormGoal";
import FormTask from "./FormTask";
import Task from "../../Entity/taskEntity";

const CreateWork = (props) => {
    const [tabIndex, setTabIndex] = React.useState(0);

    const [goal, setGoal] = React.useState([]);
    const [CurrentTags, setCurrentTags] = React.useState([]);
    const [task, setTask] = React.useState({ title: '', desciption: '' });

    const [valid, setValid] = React.useState([false, false, false, false]);

    const initialRef = React.useRef(null);

    return (<Modal isOpen={props.isOpen} onClose={props.onClose} initialFocusRef={initialRef}>
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>Nova Tarefa</ModalHeader>
                <ModalCloseButton />
                <Flex justifyContent='center'>
                    <AspectRatio ratio={4 / 3} flex="1 1 auto" maxW={350}>
                        <Box background={`url(${[IMG1, IMG1, IMG1][tabIndex]})`} backgroundSize='100% 100%' transition='background .5s linear' />
                    </AspectRatio>
                </Flex>
                <ModalBody>
                    <Tabs
                        index={tabIndex}
                        onChange={setTabIndex}
                    >
                        <TabList>
                            <Tab>Tarefa</Tab>
                            <Tab>Objetivos</Tab>
                            <Tab>Tags</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Fade in={tabIndex === 0}>
                                    <FormTask task={task} setTask={setTask} valid={valid} initialRef={initialRef}/>
                                </Fade>
                            </TabPanel>
                            <TabPanel>
                                <Fade in={tabIndex === 1}>
                                    <FormGoal setGoal={setGoal} goal={goal} valid={valid} />
                                </Fade>
                            </TabPanel>
                            <TabPanel>
                                <Fade in={tabIndex === 2}>
                                    <FormTag CurrentTags={CurrentTags} setCurrentTags={setCurrentTags} valid={valid} />
                                </Fade>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme='blue'
                        title={['Objetivos', 'Tags', 'Salvar'][tabIndex]}
                        onClick={() => {
                            tabIndex === 2 && setValid(() => [task.title === '', task.desciption === '', goal.length === 0, CurrentTags.length === 0]);
                            if (tabIndex === 2) {
                                if (task.title !== '' && task.desciption !== '' && goal.length !== 0, CurrentTags.length !== 0) {
                                    props.setEvents(v => v.concat([new Task(null, task.title, null, task.desciption, goal, CurrentTags)]))
                                    setTask({ title: '', desciption: '' });
                                    setCurrentTags([]);
                                    setGoal([]);
                                    setTabIndex(0);
                                    setValid([false, false, false, false]);
                                    props.onClose();
                                }
                            } else
                                setTabIndex(v => v + 1);
                        }}
                        rightIcon={[<BsArrowRightCircleFill />, <BsArrowRightCircleFill />, <MdOutlineSaveAlt />][tabIndex]}
                    >
                        {['Objetivos', 'Tags', 'Salvar'][tabIndex]}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    </Modal>);
}

export default CreateWork;