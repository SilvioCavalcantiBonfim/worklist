import { Button, FormControl, FormHelperText, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea } from "@chakra-ui/react";
import React from "react";
import WFH from '../../Images/WFH.jpg';


const CreateWork = (props) => {
    const [countChar, setCountChar] = React.useState('');

    return (<Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay>
            <ModalContent>
                <ModalHeader>New Work</ModalHeader>
                <ModalCloseButton />
                <Image src={WFH} />
                <ModalBody pb={6}>
                    <Tabs>
                        <TabList>
                            <Tab>Content</Tab>
                            <Tab>Tags</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <FormControl>
                                    <FormLabel>Title</FormLabel>
                                    <Input placeholder='Title' name="title" />
                                    <FormHelperText>Title to work.</FormHelperText>
                                    {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Date</FormLabel>
                                    <Input type='datetime-local' />
                                    <FormHelperText>Date and time of work</FormHelperText>
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
                                Tags
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue'>Save</Button>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>
    </Modal>);
}

export default CreateWork;