import { Box, ButtonGroup, Card, CardBody, Flex, Heading, IconButton, Tag, Text, Divider} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

const CardEvent = (props) => {
    return(<Card marginTop='5px' size='sm' w='100%'>
        <CardBody>
          <Flex spacing='4'>
            <Flex flex='1' flexWrap='warp' gap='4' alignItems='center'>
              <Box justifyContent='right'>
                <Heading size='md' textAlign='left'>{props.title}</Heading>
                <Text fontSize='sm'>{props.DateTimeLocal}</Text>
              </Box>
            </Flex>
            <ButtonGroup>
              <IconButton
                variant='ghost'
                icon={<FaTrashAlt/>}
              />
            </ButtonGroup>
          </Flex>
          <Divider marginTop='5px' marginBottom='5px'/>
          <Text fontSize='sm' textAlign='justify'>
            {props.description}
          </Text>
          <Flex flex={1} marginTop='10px' flexWrap='wrap'>
            {props.tag?.map((e, i) => {
                return <Tag size='lg' variant='subtle' margin='5px' colorScheme={e.color} key={i}>{e.name}</Tag>
            })}
          </Flex>
        </CardBody>
      </Card>);
}

export default CardEvent;