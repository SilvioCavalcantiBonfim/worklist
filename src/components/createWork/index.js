import { AspectRatio, 
    Box, 
    Button, 
    Fade, 
    Flex, 
    FormControl, 
    FormHelperText, 
    FormLabel, 
    Input, 
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
    Tabs, 
    Textarea} from "@chakra-ui/react";
import React from "react";
// import CreateTag from "./createTag";
import TagGUI from "./Tag";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { MdOutlineSaveAlt } from 'react-icons/md';
import IMG1 from '../../Images/1.png';
import CreateGoal from "./createGoal";

const CreateWork = (props) => {
    const [countChar, setCountChar] = React.useState('');
    const [tabIndex, setTabIndex] = React.useState(0);
    return (<Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>Nova Tarefa</ModalHeader>
                <ModalCloseButton />
                <Flex justifyContent='center'>
                    <AspectRatio ratio={4 / 3} flex="1 1 auto" maxW={350}>
                        {/* <Image src={[IMG1, IMG2, IMG3][tabIndex]}/> */}
                        <Box background={`url(${[IMG1, IMG1, IMG1][tabIndex]})`} backgroundSize='100% 100%' transition='background .5s linear' />
                    </AspectRatio>
                </Flex>
                <ModalBody pb={6}>
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
                                <FormControl>
                                    <FormLabel>Nome</FormLabel>
                                    <Input placeholder='Nome'/>
                                    <FormHelperText>Title to work.</FormHelperText>
                                    {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Description</FormLabel>

                                    <Textarea resize='none' value={countChar} onChange={(e) => {
                                        (250 - e.target.value.length) >= 0 && setCountChar(e.target.value)
                                    }} />
                                    <FormHelperText>Work description with {250 - countChar.length} characters.</FormHelperText>
                                </FormControl>
                            </TabPanel>
                            <TabPanel>
                                <Fade in={tabIndex === 1}>
                                    <CreateGoal/>
                                </Fade>
                            </TabPanel>
                            <TabPanel>
                                <Fade in={tabIndex === 2}>
                                    <TagGUI />
                                </Fade>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
                <ModalFooter>
                    <Button
                        colorScheme='blue'
                        title={['Objetivos', 'Tags', 'Salvar'][tabIndex]}
                        onClick={[() => setTabIndex(v => v + 1), () => setTabIndex(v => v + 1), () => { }][tabIndex]}
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