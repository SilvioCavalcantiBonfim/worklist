import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Badge, Box, Button, Checkbox, CheckboxGroup, Flex, Heading, Highlight, Icon, Progress, Stack, Tag, TagLabel, TagLeftIcon, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiFillTag } from "react-icons/ai";


const Card = (props) => {
    const progress = props.Goals.filter(e => e.State).length / props.Goals.length * 100;

    return (<AccordionItem>
        <AccordionButton>
            <Flex spacing='4' flex={1}>
                <Flex flex='1' flexWrap='warp' gap='4' alignItems='center'>
                    <Box justifyContent='right' w='50%'>
                        <Heading size='md' textAlign='left'>
                            <Highlight query={props.query || []} styles={{ bg: 'blue.100' }}>
                                {props.Name}
                            </Highlight>
                        </Heading>
                        <Text fontSize='sm' textAlign='left'>Criado em {(new Date(props.CreationDate)).toLocaleDateString()}</Text>
                        <Progress value={progress} hasStripe colorScheme={['red', 'yellow', 'green', 'blue'][Number(progress > 33.33) + Number(progress > 66.66) + Number(progress === 100)]} />
                    </Box>
                </Flex>
            </Flex>
            <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
            <Text fontSize='sm' textAlign='justify'>
                <Highlight query={props.query || []} styles={{ bg: 'blue.100' }}>
                    {props.Description}
                </Highlight>
            </Text>
            {props.Goals.length !== 0 && <CheckboxGroup>
                <Stack direction='column' mt={4}>
                    {props.Goals.map((e, i) => <MiniGoal objective={e} key={i} {...props} progress={progress}/>)}
                </Stack>
            </CheckboxGroup>}
            <Flex flex={1} marginTop='10px' flexWrap='wrap'>
                {props.Tags.map(e => {
                    return <Tag size='lg' variant='subtle' margin='5px' borderRadius='full' colorScheme={e.Color} key={e.ID}>
                        <TagLeftIcon as={AiFillTag} />
                        <TagLabel>{e.Name}</TagLabel>
                    </Tag>
                })}
            </Flex>
        </AccordionPanel>
    </AccordionItem>)
}

const MiniGoal = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (<>
        <Flex justifyContent='space-between' alignItems='center' onClick={() => !props.objective.State && onOpen()}>
            <Checkbox isChecked={props.objective.State} colorScheme={['green', 'blue'][Number(props.progress === 100)]}>
                <Highlight query={props.query || []} styles={{ bg: 'blue.100' }}>
                    {props.objective.Description}
                </Highlight>
            </Checkbox>
            {props.objective.State && <Tooltip label={`${new Date(props.objective.EndDate).toLocaleString('pt-br', { timeZone: 'America/Recife', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}`} hasArrow arrowSize={10}><Badge cursor='pointer' fontSize='0.8em' variant='subtle' colorScheme={['green','blue'][Number(props.progress === 100)]}>Concluído</Badge></Tooltip>}
            <AlertDialog
                motionPreset='slideInBottom'
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader>Completar o objetivo?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Tem certeza de que deseja completar o objetivo <b>{props.objective.Description}</b>? Esta ação não poderá ser desfeita.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={onClose}>
                            Não
                        </Button>
                        <Button
                            colorScheme='red'
                            ml={3}
                            onClick={() => {
                                props.HandleFinishGoal(props.eventIndex, props.objective);
                                onClose();
                            }}>
                            Sim
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Flex>
    </>);
}

export default Card;