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
import { useDispatch, useSelector } from "react-redux";
import { addProductCart} from "../Redux/Products/actions";

  // const data = {
  //   isNew: true,
  //   image:
  //     'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  //   title: 'Wayfarer Classic',
  //   price: 4.5,
  //   rating: 4.2,
  //   numReviews: 34,
  // };


  
  function Product({image,title,price,rating, para}) {
    const dispatch = useDispatch();
    const addToCartHandler = () => {
      currentProduct && dispatch(addProductCart(currentProduct));
    };
  
    const currentProduct = useSelector(
      (store) => store.currentProduct
    );
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
                <chakra.a href={'#'} display={'flex'} onClick={addToCartHandler}>
                  <Icon color={useColorModeValue('orange.400', 'orange.300')} as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
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