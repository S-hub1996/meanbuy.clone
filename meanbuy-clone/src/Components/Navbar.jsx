import { React } from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import {Link as RouterLink} from 'react-router-dom';
// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        borderBottom="1px solid"
        borderBottomColor={"gray.200"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={2}>
            <Box m={4} w={["100px", "200px", "300px"]} >
              <RouterLink to={'/'}>
              <Image
                src={
                  "https://meanbuyassets.s3.ap-south-1.amazonaws.com/baselogo.png"
                }
                />
                </RouterLink>
            </Box>

            <InputGroup display={["none", "block"]} m={6}>
              <Input placeholder="Search" borderRadius={0} h={8}/>
              <InputRightElement
                pointerEvents="none"
                children={<AiOutlineSearch color="gray.300" fontSize={20}/>}
              />
            </InputGroup>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={2}>
              <Button onClick={toggleColorMode} bg="none">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button bg={"none"}>
                <HiShoppingCart size={30} color="orange" />
              </Button>

              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon fontSize={"2xl"} />}
                  variant="ghost"
                  color="orange"
                />
                <MenuList padding={8} border="1px solid orange">
                  <MenuItem bg={"orange"} m={2}>
                    My Orders
                  </MenuItem>
                  <MenuItem bg={"orange"} m={2}>
                    LogIn
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        <Box>
          <InputGroup
            display={["block", "none"]}
            borderRadius={40}
            border="10px solid"
            borderColor={"orange.300"}
            bgColor={"orange.300"}
          >
            <Input placeholder="Search" borderRadius={40} />
            <InputRightElement
              pointerEvents="none"
              children={<AiOutlineSearch color="gray.300" />}
            />
          </InputGroup>
        </Box>

        <Flex
          justifyContent={["space-between", "space-between", "space-around"]}
          p={["0", "0 10rem 0 5rem"]}
          fontSize={"md"}
        >
          <Menu>
            <MenuButton bg={"none"} m={0}>
              Categories
              <ChevronDownIcon />
            </MenuButton>
            <MENU_LIST/>
          </Menu>
          <RouterLink to={'/products'}>

          <Link> Flash Sale</Link>
          </RouterLink>
          <Link display={["none", "none", "block"]}> Best Deals</Link>
          <Link display={["none", "none", "block"]}> Shop by Brand</Link>
          <Link display={["none", "none", "block"]}> Trending</Link>
          <Link> New Arrivals</Link>
        </Flex>
      </Box>
    </>
  );
}

const MENU_LIST = () => {
  return (
    <>
      
        <MenuList>
          <Flex fontSize={'sm'} display={['block','block','flex']}>

            <Box >
          <Heading as={"h4"} size={"sm"}>
            MEN
          </Heading>
          <MenuItem>Watches</MenuItem>
          <MenuItem>Men's Watches</MenuItem>
          
          <Heading as={"h4"} size={"sm"}>
            WOMEN
          </Heading>
          <MenuItem>Makeup Accessories</MenuItem>
          <MenuItem>Fashion</MenuItem>
          <MenuItem>Jewellery</MenuItem>
          <MenuItem>Watches</MenuItem>
          </Box>
            <Box>
          <Heading as={"h4"} size={"sm"}>
            ELECTRONICS
          </Heading>
          <MenuItem>Gaming Accessories</MenuItem>
          <MenuItem>Keyboards & Mouse</MenuItem>
          <MenuItem>Laptops</MenuItem>
          <MenuItem>Small Appliances</MenuItem>
          
          <Heading as={"h4"} size={"sm"}>
            KIDS & MOMS
          </Heading>
          <MenuItem>DIY Toys</MenuItem>
          <MenuItem>Kid's Shoes</MenuItem>
          <MenuItem>Water Bottle</MenuItem>
          <MenuItem>Sports Bluetooth</MenuItem>
          <MenuItem>Gift</MenuItem>
          </Box>
            <Box>
          <Heading as={"h4"} size={"sm"}>
            MOBILE & TABS
          </Heading>
          <MenuItem>Apple Accessories</MenuItem>
          <MenuItem>Blutooth Earphone</MenuItem>
          <MenuItem>Mobile Accessories</MenuItem>
          <MenuItem>Power Banks</MenuItem>
          <MenuItem>Sporting Bluetooth</MenuItem>
          <MenuItem>Wired Headphones</MenuItem>
          <MenuItem>Wireless Chargers</MenuItem>
          <MenuItem>Wireless Speakers</MenuItem>
          </Box>
          <Box>
          <Heading as={"h4"} size={"sm"}>
            HOME & LIVING
          </Heading>
          <MenuItem>Bath & Storage</MenuItem>
          <MenuItem>Fitness Merchandise</MenuItem>
          <MenuItem>Gardening</MenuItem>
          <MenuItem>Home Decor</MenuItem>
          <MenuItem>Home Improvement</MenuItem>
          <MenuItem>Kitchen Wares</MenuItem>
          <MenuItem>Nordic Ceilingh Lights</MenuItem>
          <MenuItem>Pet Products</MenuItem>
          <MenuItem>USB Fans</MenuItem>
          <MenuItem>Wall Decor</MenuItem>
          <MenuItem>Water Bottles</MenuItem>
          </Box>
            <Box>
          <Heading as={"h4"} size={"sm"}>
            FLASH SALE
          </Heading>
          <MenuItem>Flash Sale</MenuItem>
         
          
          <Heading as={"h4"} size={"sm"}>
            MEANBUY DEALS
          </Heading>
          <MenuItem>Electronics</MenuItem>
          <MenuItem>Men's Watches</MenuItem>
          <MenuItem>Ramadan Gifts</MenuItem>
          <MenuItem>Smart Watches</MenuItem>
          <MenuItem>Top Selling Ear Buds</MenuItem>
          </Box>


      </Flex>
        </MenuList>
    </>
  );
};
