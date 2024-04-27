import { useState } from 'react';
import { Box, Input, Button, VStack, HStack, Text, IconButton, useColorMode, useColorModeValue, Heading } from '@chakra-ui/react';
import { FaSun, FaMoon, FaTrash } from 'react-icons/fa';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'gray.100');

  const addTodo = () => {
    if (input === '') return;
    const newTodos = [...todos, { id: Date.now(), text: input }];
    setTodos(newTodos);
    setInput('');
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, teal.500,green.500)" bgClip="text">
        Todo App
      </Heading>
      <HStack>
        <Input
          variant="filled"
          placeholder="Add your new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTodo} colorScheme="pink" px="8">Add Todo</Button>
      </HStack>
      <VStack spacing={4} align="stretch">
        {todos.map((todo) => (
          <HStack key={todo.id}>
            <Text p={4} bg={bgColor} borderRadius="lg" w="100%" textAlign="left" color={textColor}>
              {todo.text}
            </Text>
            <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(todo.id)} />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;