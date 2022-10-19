import React from 'react';
import {
  ChakraProvider,
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Grid,
  GridItem,
  Link,
  HStack,
  VStack,
  Code,
  theme,
} from '@chakra-ui/react';
//import DateTimeDisplay from './DateTimeDisplay';
import { Logo } from '../Logo';
import Img1 from '../assets/background4.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={20}
            height={20}
            border="5px solid black"
            borderRadius={100}
          >
            <Heading fontSize={48}  pt={2} fontFamily="">
              {value}
            </Heading>
          </Box>
          <Heading size="md">{type}</Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <VStack backgroundImage={Img1} backgroundSize="cover" minW="850" minH="800">
      {/* <Logo h="40vmin" pointerEvents="none" />
      <Text>Coming soon ...</Text> */}
      <HStack pt={2} ml={20} mt={480} position="relative">
        {/* <Divider /> */}
        <Grid templateColumns="repeat(11, 1fr)" gap={0}>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
            <GridItem colSpan={1} pt={3}>
              <Heading color="black">:</Heading>
            </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={seconds}
              type={'SECONDS'}
              isDanger={false}
            />
          </GridItem>
        </Grid>
      </HStack>
    </VStack>
  );
};

export default ShowCounter;
