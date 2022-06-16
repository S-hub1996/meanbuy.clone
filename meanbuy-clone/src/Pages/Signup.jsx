import React,{useEffect, useState} from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link as RouterLink, Navigate} from 'react-router-dom'
  import { registerUser } from '../Redux/Auth/Actions';
  import { useSelector,useDispatch } from 'react-redux';
  import { useLocation,useNavigate } from 'react-router-dom';
  export default function Signup() {
    
    const dispatch= useDispatch();
    const location= useLocation();
    console.log(location);
    const navigate= useNavigate();
    const [firstName,setFirstName]= useState("");
    const [lastName,setLastName]= useState("");
    const [email,setEmail]= useState("eve.holt@reqres.in");
    const [password,setPassword]= useState("");
    const [showPassword, setShowPassword] = useState(false);
    const userStatus= useSelector(store=>store.authReducer.id)
    useEffect(()=>{
      if(userStatus){
        Navigate("/login",{replace:true});
      }
    },[navigate,userStatus])
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(registerUser({firstName:firstName,lastName:lastName,email:email,password:password}))
      console.log("register",email, password);
    };
    return (
      <Flex
        // minH={'100vh'}
        // align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'} color={'orange.400'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool Products ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={submitHandler}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text"  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input value={password} onChange={(e)=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'orange.400'}
                  color={'white'}
                  _hover={{
                    bg: 'orange.500',
                  }}
                  type="submit">
                  Sign up
                </Button>
              </Stack>
              </form>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <RouterLink to={'/login'} color={'blue.300'}>Login</RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }