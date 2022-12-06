import { Box, ButtonGroup, Card, CardBody, Flex, Heading, IconButton, Tag, Text, Divider, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogBody, AlertDialogContent, AlertDialogFooter, Button, AlertDialogHeader, useToast, Icon} from "@chakra-ui/react";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import { AiFillPushpin } from "react-icons/ai";
const CardEvent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const cancelRef = React.useRef();

  return (<>
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}  motionPreset='slideInBottom' isCentered>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            <Flex alignItems='center'>
                <FaTrashAlt/> 
                <span style={{marginLeft: '10px'}}>Apagar</span>
            </Flex>
          </AlertDialogHeader>
          <AlertDialogBody>
            Tem certeza que deseja apagar <span style={{textTransform: `uppercase`}}>{props.title}</span>? você não pode desfazer esta ação.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Não
            </Button>
            <Button colorScheme='red' onClick={() => {toast({title: `Você apagou ${props.title}.`, status: `warning`, isClosable: true, variant: 'left-accent',});onClose();props.HandleDelete(props.id);}} ml={3}>
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>

    <Card marginTop='5px' size='sm' w='100%'>
      <CardBody>
        <Flex spacing='4'>
          <Icon as={AiFillPushpin} boxSize='40px' padding='10px' />
          <Flex flex='1' flexWrap='warp' gap='4' alignItems='center'>
            <Box justifyContent='right'>
              <Heading size='md' textAlign='left'>{props.title}</Heading>
              <Text fontSize='sm'>{props.DateTimeLocal}</Text>
            </Box>
          </Flex>
          <ButtonGroup>
            <IconButton
              variant='ghost'
              icon={<FaTrashAlt />}
              onClick={onOpen}
              colorScheme='red'
            />
          </ButtonGroup>
        </Flex>
        <Divider marginTop='5px' marginBottom='5px' />
        <Text fontSize='sm' textAlign='justify'>
          {props.description}
        </Text>
        <Flex flex={1} marginTop='10px' flexWrap='wrap'>
          {props.tag?.map((e, i) => {
            return <Tag size='lg' variant='subtle' margin='5px' colorScheme={e.color} key={i}>{e.name}</Tag>
          })}
        </Flex>
      </CardBody>
    </Card>
  </>);
}

export default CardEvent;