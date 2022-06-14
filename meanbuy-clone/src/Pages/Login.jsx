import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function Login() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
         <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'contain'}
            src={
                "https://meanbuyassets.s3.ap-south-1.amazonaws.com/baselogo.png"
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading color={'orange.400'} fontSize={'2xl'}>Log in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'orange.400'}
                  color={'white'}
                  _hover={{
                    bg: 'orange.500',
                  }}>
                  Sign In
                </Button>
            </Stack>
          </Stack>
        </Flex>
       
      </Stack>
    );
  }