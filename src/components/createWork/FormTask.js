import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";

const FormTask = (props) => {
    return (<>
        <FormControl isInvalid={props.valid[0]}>
            <FormLabel>Título</FormLabel>
            <Input placeholder='Título' ref={props.initialRef} value={props.task.title} onChange={(e) => props.setTask(v => {return {...v, title:e.target.value}})}/>
            <FormErrorMessage>O título é obrigatório.</FormErrorMessage>
        </FormControl>
        <FormControl mt={4} isInvalid={props.valid[1]}>
            <FormLabel>Descrição</FormLabel>
            <Textarea resize='none' value={props.task.desciption} maxLength={140} placeholder='Descrição' onChange={(e) => props.setTask(v => {return {...v, desciption:e.target.value}})}/>
            <FormErrorMessage>A descrição é obrigatório.</FormErrorMessage>
        </FormControl>
    </>);
}

export default FormTask;