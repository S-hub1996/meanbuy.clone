import React, { useState,useEffect } from "react";
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
} from "@chakra-ui/react";
import { useDispatch,useSelector } from "react-redux";
import { signIn } from "../Redux/Auth/Actions";
import {useLocation ,useNavigate} from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location= useLocation();
  const navigate= useNavigate();
  const authStatus= useSelector(store=>store.authReducer.auth)
  console.log(location);
  useEffect(()=>{
    if(authStatus){
      navigate("/",{replace:true});
    }
  },[navigate,authStatus])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn({email:email,password:password}))
    // console.log(userEmail, userPassword);
  };

  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"contain"}
            src={
              "https://meanbuyassets.s3.ap-south-1.amazonaws.com/baselogo.png"
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading color={"orange.400"} fontSize={"2xl"}>
              Log in to your account
            </Heading>
            <form onSubmit={submitHandler}>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
                >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"orange.400"}
                color={"white"}
                _hover={{
                  bg: "orange.500",
                }}
                type='submit'
                >
                Sign In
              </Button>
            </Stack>
                  </form>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
