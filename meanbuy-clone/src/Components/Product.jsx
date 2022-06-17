import {
    Flex,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
  } from '@chakra-ui/react';
  import { BsStarFill} from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { addProductCart} from "../Redux/Products/actions";
import prdcts from "../db.json" 

  
  function Product(product) {

    let cartArr= JSON.parse(localStorage.getItem('product')) || [];
    console.log(product)

    const {image,title,price,rating, para,id}=product;

    
    const addToCartHandler =  ( ) => {
      console.log("click",cartArr);
      const NewProduct= {...product,qty:1}
      console.log(NewProduct)
      
      let data =cartArr
      data.push(NewProduct)
      console.log(data)
    data =JSON.stringify(data);
      localStorage.setItem("product",data)

    };




    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          
  
          <Image
            src={image}
            alt={`Picture of ${title}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  {para}
                </Badge>
              
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a style={{cursor:"pointer"}}  display={'flex'} >
                  <Icon color={useColorModeValue('orange.400', 'orange.300')} as={FiShoppingCart} h={7} w={7} alignSelf={'center'}  onClick={addToCartHandler}/>
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={rating} />
              <Box fontSize="2xl" color={useColorModeValue('orange.400', 'orange.300')}>
                <Box as="span" color={useColorModeValue('orange.400', 'orange.300')} fontSize="lg">
                ₹
                </Box >
                {price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
    
  function Rating({rating}){
    return (
      <Flex d="flex"  alignItems="center">
        <Text bg={'green.600'} border={'1px solid'} borderColor={'green.600'} p={'0 5px 0 5px '} color={'white'} borderRadius={4} >{rating}</Text>
        <BsStarFill color='green'/>


      </Flex>
    );
  }
  
  export default Product;