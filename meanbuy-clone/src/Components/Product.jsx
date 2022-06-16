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
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
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
                fontSize="2xl"
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
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={rating} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                ₹
                </Box>
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
        <Text bg={'green.600'} border={'1px solid'} borderColor={'green.600'} p={'0 5px 0 5px '} color={'white'} borderRadius={4}>{rating}</Text>
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}


      </Flex>
    );
  }
  
  export default Product;