import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Checkout({ cart,checkoutHandler }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        onClick={onOpen}
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
      >
        Checkout
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Continue Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.map(product=>{
                return(
                    <Box key={product.id} m={2}>
                        <Flex >
                            <Box>
                                <Image src={product.image} objectFit="contain" alt="product image" boxSize="100px"
                                border="1px solid black"
                                rounded={'lg'}
                                p={1}/>
                            </Box>
                            <Box maxW={'250px'} ml={2} pb={1}>
                                <Text fontSize={'lg'} >
                                    {product.title}
                                </Text>
                                <Text>
                                    ₹{product.price}
                                </Text>
                            </Box>

                        </Flex>
                    </Box>
                )
            })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={checkoutHandler}>
              Confirm
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
