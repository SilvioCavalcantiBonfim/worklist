import { Container, Divider, Flex, FormControl, FormErrorMessage, Tag, TagLabel, TagLeftIcon, TagRightIcon } from "@chakra-ui/react";
import React from "react";
import { AiFillTag } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import TagEntity from "../../Entity/TagEntity";
import FormTagCreate from "./FormTagCreate";

const FormTag = (props) => {
    const [tags, setTags] = React.useState([]);

    const AddTag = (t) => {
        setTags(v => {
            localStorage.setItem('tags', JSON.stringify(v.concat([t])));
            return v.concat([t]);
        });
    }

    React.useEffect(() => {
        setTags(t => {
            try {
                return JSON.parse(localStorage.getItem('tags')).map(e => new TagEntity(e.ID, e.Name, e.Color));
            } catch (error) {
                const df = '[{"ID": "defualt-0","Name": "Trabalho","Color": "red"},{"ID": "defualt-1","Name": "Pessoal","Color": "green"}]';
                localStorage.setItem('tags', df);
                return JSON.parse(df).map(e => new TagEntity(e.ID, e.Name, e.Color));
            }
        });
    }, []);

    return (<Container>
        <FormControl isInvalid={props.valid[3]} my='8px'>
            <FormErrorMessage>Ao menos uma tag deve ser atribuído.</FormErrorMessage>
        </FormControl>
        <Flex flex={1} marginTop='10px' justifyContent='space-around' flexWrap='wrap'>
            {tags.map(e => {
                return <Tag
                    size='lg'
                    variant={(props.CurrentTags.indexOf(e) === -1) ? 'outline' : 'subtle'}
                    margin='5px'
                    colorScheme={e.Color}
                    key={e.ID}
                    cursor='pointer'
                    boxShadow='base'
                    borderRadius='full'
                    userSelect='none'
                    transition='background .1s linear, color .1s linear'
                    onClick={() => (props.CurrentTags.indexOf(e) === -1) ? props.setCurrentTags(v => v.concat([e])) : props.setCurrentTags(v => v.filter(ee => ee.ID !== e.ID))}>
                    <TagLeftIcon as={AiFillTag} />
                    <TagLabel>{e.Name}</TagLabel>
                    <TagRightIcon
                        as={RiAddFill}
                        transform={`rotate(${Number(props.CurrentTags.indexOf(e) !== -1) * 45}deg)`}
                        transition='transform .1s linear'
                    />
                </Tag>
            })}
        </Flex>
        <Divider my='8px' />
        <Flex flex={1} justifyContent='center'>
            <FormTagCreate AddTag={AddTag} />
        </Flex>
    </Container>);
}

export default FormTag;