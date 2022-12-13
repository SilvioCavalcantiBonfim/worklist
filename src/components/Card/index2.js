import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxGroup, Flex, Heading, Highlight, Progress, Stack, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillTag } from "react-icons/ai";


const Card = (props) => {

    const date = new Date();
    const progress = props.goals.filter(e => e.state).length / props.goals.length * 100;

    return (<AccordionItem>
        <AccordionButton>
            <Flex spacing='4' flex={1}>
                <Flex flex='1' flexWrap='warp' gap='4' alignItems='center'>
                    <Box justifyContent='right' w='50%'>
                        <Heading size='md' textAlign='left'>{props.title || 'Title'}</Heading>
                        <Text fontSize='sm' textAlign='left'>Criado em {date.toLocaleDateString()}</Text>
                        <Progress value={progress} hasStripe colorScheme={['red', 'yellow', 'green', 'blue'][Number(progress > 33.33) + Number(progress > 66.66) + Number(progress === 100)]} />
                    </Box>
                </Flex>
            </Flex>
            <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
            <Text fontSize='sm' textAlign='justify'>
                <Highlight query={props.query || []} styles={{ px: '1', py: '1', bg: 'blue.100' }}>
                    {props.description || `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.`}
                </Highlight>
            </Text>
            {props.goals.length !== 0 && <CheckboxGroup>
                <Stack direction='column' mt={4}>
                    {props.goals.map((e, i) => <Checkbox isChecked={e.state} colorScheme='green' key={i}>{e.description} {e.state && ` - Concluído em ${(new Date(e.endDate)).toLocaleDateString()}`}</Checkbox>)}
                </Stack>
            </CheckboxGroup>}
            <Flex flex={1} marginTop='10px' flexWrap='wrap'>
                {props.tag?.map((e, i) => {
                    return <Tag size='lg' variant='subtle' margin='5px' colorScheme={e.color} key={i}>
                        <TagLeftIcon as={AiFillTag} />
                        <TagLabel>{e.name}</TagLabel>
                    </Tag>
                })}
            </Flex>
        </AccordionPanel>
    </AccordionItem>)
}

export default Card;