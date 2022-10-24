import React, { useState } from 'react';
import {
  Avatar,
  AspectRatio,
  Box,
  Flex,
  FormControl,
  Text,
  IconButton,
  Image,
  Button,
  Heading,
  Stack,
  Select,
  VStack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Logo from '../assets/logo.png';

export default function Appbanner({
  selectedoption,
  setSelectedOption,
  deadlinedate,
  setDeadlineDate,
  handleOpenSetting,
}) {
  const { isOpen, onToggle } = useDisclosure();

  const handleIconClick = () => {
    handleOpenSetting();
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('teal.500', 'gray.800')}
        color={useColorModeValue('gray.200', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontStyle={'oblique'}
            fontWeight={'bold'}
            color={useColorModeValue('black', 'white')}
          >
            <Image src={Logo} size="sm" maxH="50" />
          </Text>
          <Box mt="4">
            <Heading fontSize="18">Deadline Date: {deadlinedate} </Heading>
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <FormControl>
            <Select
              name="template"
              value={selectedoption}
              //width="50%"
              onChange={e => setSelectedOption(e.target.value)}
              borderColor="black.400"
              w={150}
              color="black"
              bgColor="white"
            >
              <option style={{ Color: 'inherit' }} value="1">
                Template 1
              </option>
              <option style={{ bgColor: 'teal' }} value="2">
                Template 2
              </option>
              <option style={{ bgColor: 'teal' }} value="3">
                Template 3
              </option>
              <option style={{ bgColor: 'teal' }} value="4">
                Template 4
              </option>
              <option style={{ bgColor: 'teal' }} value="5">
                Template 5
              </option>
              <option style={{ bgColor: 'teal' }} value="6">
                Template 6
              </option>
              <option style={{ bgColor: 'teal' }} value="7">
                Template 7
              </option>
              <option style={{ bgColor: 'teal' }} value="8">
                Template 8
              </option>
              <option style={{ bgColor: 'teal' }} value="9">
                Template 9
              </option>
              <option style={{ bgColor: 'teal' }} value="10">
                Template 10
              </option>
              <option style={{ bgColor: 'teal' }} value="11">
                Template 11
              </option>
              <option style={{ bgColor: 'teal' }} value="12">
                Template 12
              </option>
              <option style={{ bgColor: 'teal' }} value="13">
                Template 13
              </option>
              <option style={{ bgColor: 'teal' }} value="14">
                Template 14
              </option>
              <option style={{ bgColor: 'teal' }} value="15">
                Template 15
              </option>
            </Select>
          </FormControl>
          <IconButton
            variant="solid"
            colorScheme="white"
            aria-label="Search database"
            size="lg"
            icon={<HamburgerIcon color="black" />}
            onClick={handleIconClick}
          />
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
          >
            Sign In
          </Button> */}
          {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign Up
          </Button> */}
        </Stack>
        {/* <HStack>
          <Avatar
            size={'sm'}
            src={
              'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <VStack
            display={{ base: 'none', md: 'flex' }}
            alignItems="flex-start"
            spacing="1px"
            ml="2"
          >
            <Text fontSize="md">Swire Bahagia</Text>
            <Text fontSize="sm" color="black">
              Admin
            </Text>
          </VStack>
          <Box display={{ base: 'none', md: 'flex' }}>
            <FiChevronDown />
          </Box>
        </HStack> */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white.600', 'black.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={'bold'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
            color={'black'}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Dashboard',
    href: '/',
    sublabel: false,
  },
  {
    label: 'Inventory',
    sublabel: true,
    children: [
      {
        label: 'Items',
        subLabel: '',
        href: '/items',
      },
      {
        label: 'Items History',
        subLabel: '',
        href: 'itemhistory',
      },
    ],
  },
  {
    label: 'Receivable',
    sublabel: true,
    children: [
      {
        label: 'Customers',
        subLabel: '',
        href: '/customers',
      },
      {
        label: 'Invoices',
        subLabel: '',
        href: '/sales',
      },
      {
        label: 'Statement',
        subLabel: '',
        href: '/customerstatement',
      },
    ],
  },
  {
    label: 'Payable',
    sublabel: true,
    children: [
      {
        label: 'Suppliers',
        subLabel: '',
        href: '/suppliers',
      },
      {
        label: 'Purchases',
        subLabel: '',
        href: '/purchases',
      },
      {
        label: 'Statement',
        subLabel: '',
        href: '/supplierstatement',
      },
    ],
  },
  {
    label: 'Settings',
    href: '/tables',
    sublabel: false,
  },
];
