import {
    Button,
    Checkbox,
    Divider,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Icon,
    IconButton,
    Input,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    useColorMode,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineExposurePlus1 } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import GoalEntity from "../../Entity/goalEntity";
import { RiAddFill } from "react-icons/ri";
import { Field, Form, Formik } from "formik";

const FormGoal = (props) => {

    const { isOpen, onToggle, onClose } = useDisclosure();
    const initialFocusRef = React.useRef();

    return (<>
        <FormControl isInvalid={props.valid[2]}>
            <FormErrorMessage>Ao menos um objetivo deve ser atribuído.</FormErrorMessage>
        </FormControl>
        {props.goal.map((e, i) => <GoalItem key={i} goal={e} handleDelete={() => props.setGoal(v => v.filter(vv => vv.ID !== e.ID))} />)}
        <Flex flex={1} justifyContent='center' mt={4}>
            <Popover
                returnFocusOnClose={false}
                isOpen={isOpen}
                onClose={onClose}
                closeOnBlur={false}
                initialFocusRef={initialFocusRef}
            >
                <PopoverTrigger>
                    <Button
                        w='30%'
                        boxShadow='size'
                        justifyContent='center'
                        onClick={onToggle}
                    ><RiAddFill /></Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        <Formik
                            initialValues={{ description: '' }}
                            onSubmit={(values, actions) => {
                                props.setGoal(v => v.concat([new GoalEntity(null, values.description)]))
                                actions.setSubmitting(false);
                                actions.resetForm();
                                onToggle();
                            }}
                        >
                            {(props) => (<Form>
                                <Field name='description' validate={(v) => !v ? 'Uma descrição é obrigatório.' : undefined}>
                                    {({ field, form }) => (<FormControl isInvalid={form.errors.description && form.touched.description} mt={4}>
                                        <FormLabel>Objetivo</FormLabel>
                                        <Input ref={initialFocusRef} {...field}/>
                                        <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                                    </FormControl>)}
                                </Field>
                                <Flex flex={1} justifyContent='right' mt={4}>
                                    <Button colorScheme='blue' type="submit" isLoading={props.isSubmitting}>Criar</Button>
                                </Flex>
                            </Form>
                            )}
                        </Formik>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    </>);
}

const GoalItem = (props) => {
    const { colorMode, } = useColorMode()
    return (<><Flex flex={1} justifyContent='space-between' alignItems='center' p={2}>
        <Checkbox size='md' colorScheme='green' isChecked={false}>
            {props.goal.Description}
        </Checkbox>
        <Flex alignItems='center' h={30}>
            <Icon as={MdOutlineExposurePlus1} boxSize={6} color={{ light: 'yellow.500', dark: 'yellow.100' }[colorMode]} />
            <Divider orientation='vertical' mx={1} />
            <IconButton colorScheme='red' variant='ghost' icon={<RiDeleteBinLine />} onClick={props.handleDelete} />
        </Flex>
    </Flex>
        <Divider />
    </>);
}

export default FormGoal;