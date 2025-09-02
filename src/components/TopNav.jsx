import { Box, Button, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaBars, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = ({title, onOpen}) => {
  return (
    <Box px="4" minW={{base:"100vw", lg:"80vw", xl: "82vw"}} bg="white">
      <HStack maxW={{base: "98vw", lg: "72vw"}} h="12" justify="space-between" mx={{base: "none", lg: "auto"}}>
        <Icon as={FaBars} onClick={onOpen} display={{base:"block", lg:"none"}}/>
        <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
        <Menu>
          <MenuButton as={Button} colorScheme="gray"><Icon as={FaUserTie} fontSize="20px"/></MenuButton>
          <MenuList px="1">
            <MenuItem>Logout</MenuItem>
            <Link to="/support">
              <MenuItem _hover={{color: "black"}}>Support</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  )
}

export default TopNav