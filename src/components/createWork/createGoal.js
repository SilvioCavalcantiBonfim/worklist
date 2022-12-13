import { Button, Checkbox, Divider, Flex, Icon, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdOutlineExposurePlus1 } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import GoalEntity from "../../Entity/goalEntity";
import { RiAddFill } from "react-icons/ri";

const CreateGoal = (props) => {
    const [goal, setGoal] = React.useState([new GoalEntity(null, 'teste Description')]);
    console.log(goal)
    return (<>
        {goal.map((e,i) =><GoalItem key={i} goal={e} handleDelete={() => setGoal(v => v.filter(vv => vv.ID !== e.ID))}/> )}
        <Flex flex={1} justifyContent='center'><Button w='30%' borderRadius='full' mt={5} boxShadow='size' justifyContent='center'><RiAddFill/></Button></Flex>
    </>);
}

const GoalItem = (props) => {
    const { colorMode, } = useColorMode()
    return (<Flex flex={1} justifyContent='space-between' alignItems='center' p={2}>
        <Checkbox size='md' colorScheme='green' isChecked={true}>
            {props.goal.Description}
        </Checkbox>
        <Flex alignItems='center' h={30}>
            <Icon as={MdOutlineExposurePlus1} boxSize={6} color={{ light: 'yellow.500', dark: 'yellow.100' }[colorMode]} />
            <Divider orientation='vertical' mx={1} />
            <IconButton colorScheme='red' variant='ghost' icon={<RiDeleteBinLine />} onClick={props.handleDelete}/>
        </Flex>
    </Flex>);
}

export default CreateGoal;