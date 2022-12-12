import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Text,
} from '@chakra-ui/react';
import { setConstantValue } from 'typescript';
import { sendContact } from '../lib/app';
import { useToast } from '@chakra-ui/react';

const initValues = { name: '', email: '', message: '' };
const initState = { values: initValues };

export default function Form() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  const toast = useToast();
  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));
  const handleState = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContact(values);
      setTouched({});
      setState(initState);
      toast({
        title: 'Message Sent.',
        status: 'success',
        duration: '2000',
        position: 'top',
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <div>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <FormControl
        isRequired
        isInvalid={touched.name && !values.name}
        mb={2}
        mt={3}
      >
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleState}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.email && !values.name} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleState}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.message && !values.name}
        mb={2}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          mb={2}
          name="message"
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleState}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        variant="outline"
        colorScheme="white"
        isLoading={isLoading}
        onClick={onSubmit}
        disabled={!values.name || !values.email || !values.message}
      >
        Submit
      </Button>
    </div>
  );
}
