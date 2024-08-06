'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Link,
  Img
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const Links = ['Home', 'Projects', 'Blog', 'About', 'Contact'];
let num = {
  Home: '00',
  Projects: '01',
  Blog: '02',
  About: '03',
  Contact: '04'
};

const NavLink = (props: Props) => {
  const { children } = props;

  const pathName = usePathname();
  return (
    <Link
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: 'green.600'
      }}
      href={children === 'Home' ? '/' : `/${children}`}
      textColor={
        pathName === '/' && children === 'Home'
          ? 'green.500'
          : pathName === '/' + children
            ? 'green.500'
            : 'green.200'
      }
      replace={children === 'Home' ? '' : `/${children}`}
    >
      <Text textAlign={'right'}>{num[`${children}`]} </Text>
      //{children}
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW="">
      <Box w="100%" bgGradient="linear(to-r, green.700, black) " px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Img src="/Logo.jpg" alt={'Logo'} width={28} height={14} />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} src={''} />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Container>
  );
}
