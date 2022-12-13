import { Container, Flex, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import TagEntity from "../../Entity/TagEntity";
import CreateTag from "./createTag";

const TagGUI = (props) => {
    const [tags, setTags] = React.useState([]);
    const [CurrentTags, setCurrentTags] = React.useState([]);

    const AddTag = (t) => {
        setTags(v => {
            localStorage.setItem('tags', JSON.stringify(v.concat([t])));
            return v.concat([t]);
        });
    }

    React.useEffect(() => {
        if (localStorage.getItem('tags') !== null)
            setTags(JSON.parse(localStorage.getItem('tags')).map(e => new TagEntity(e.ID, e.Name, e.Color)));
    }, []);

    return (<Container>
        <Flex flex={1} marginTop='10px' justifyContent='space-around' flexWrap='wrap'>
            {tags.map(e => {
                return <Tag
                    size='lg'
                    variant={(CurrentTags.indexOf(e) === -1) ? 'outline' : 'subtle'}
                    margin='5px'
                    colorScheme={e.Color}
                    key={e.ID}
                    cursor='pointer'
                    boxShadow='base'
                    borderRadius='full'
                    userSelect='none'
                    transition='background .1s linear, color .1s linear'
                    onClick={() => (CurrentTags.indexOf(e) === -1) ? setCurrentTags(v => v.concat([e])) : setCurrentTags(v => v.filter(ee => ee.ID !== e.ID))}>
                    <TagLeftIcon
                        as={RiAddFill}
                        transform={`rotate(${Number(CurrentTags.indexOf(e) !== -1) * 45}deg)`}
                        transition='transform .1s linear'
                    />
                    <TagLabel>{e.Name}</TagLabel>
                </Tag>
            })}
        </Flex>
        <Flex flex={1} justifyContent='center' mt='20px'>
            <CreateTag AddTag={AddTag} />
        </Flex>
    </Container>);
}

export default TagGUI;