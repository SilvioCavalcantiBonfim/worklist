import { 
    Button, 
    Flex, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Input, 
    Popover, 
    PopoverArrow, 
    PopoverBody, 
    PopoverContent, 
    PopoverTrigger, 
    Select, 
    Tag, 
    TagLabel, 
    TagLeftIcon, 
    useDisclosure } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { AiFillTag } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import TagEntity from "../../Entity/TagEntity";

const CreateTag = (props) => {

    const [tagOptions, setTagOption] = React.useState({ Name: '', Color: 'gray' });
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (<Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
    >
        <PopoverTrigger>
            <Button w='30%' borderRadius='full' boxShadow='size' justifyContent='center' onClick={onToggle}><RiAddFill/></Button>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
                <Formik
                    initialValues={{ Name: '', Color: 'gray' }}
                    onSubmit={(values, actions) => {
                        props.AddTag(new TagEntity(null, values.Name, values.Color))
                        actions.setSubmitting(false);
                        actions.resetForm();
                        onToggle();
                    }}
                >
                    {(props) => (<Form>
                        <Field name='Name' validate={(v) => !v?'O nome é obrigatório.':undefined}>
                            {({ field, form }) => {
                                return (
                                    <FormControl isInvalid={form.errors.Name && form.touched.Name} mt={4}>
                                        <FormLabel>Nome</FormLabel>
                                        <Input
                                            onChange={(e) => {
                                                field.onChange(e);
                                                setTagOption(v => { return { ...v, Name: e.target.value } })
                                            }}
                                            onBlur={field.onBlur}
                                            value={field.value}
                                            name={field.name}
                                            maxLength={20}
                                            autoComplete='off'
                                            placeholder='Name' />
                                        <FormErrorMessage>{form.errors.Name}</FormErrorMessage>
                                    </FormControl>
                                )
                            }}
                        </Field>
                        <Field name='Color'>
                            {({ field }) => (
                                <FormControl mt={2}>
                                    <FormLabel>Cor</FormLabel>
                                    <Select
                                        name="Color"
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setTagOption(v => {
                                                return { ...v, Color: e.target.value }
                                            })
                                        }}
                                    >
                                        {['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']
                                            .map((e, i) => <option value={e} key={i}>{e}</option>)}
                                    </Select>
                                </FormControl>
                            )}
                        </Field>
                        <Flex flex={1} justifyContent='center' mt={4} mb={4}>
                            <Tag
                                size='lg'
                                variant='subtle'
                                colorScheme={tagOptions.Color}
                                boxShadow='base'
                                borderRadius='full'
                            >
                                <TagLeftIcon as={AiFillTag} />
                                <TagLabel
                                >{(tagOptions.Name !== '') ? tagOptions.Name : 'Tag'}</TagLabel>
                            </Tag>
                        </Flex>
                        <Flex flex={1} justifyContent='right'>
                            <Button colorScheme='blue' type="submit" isLoading={props.isSubmitting}>Criar</Button>
                        </Flex>
                    </Form>)}
                </Formik>
            </PopoverBody>
        </PopoverContent>
    </Popover>);
}

export default CreateTag;