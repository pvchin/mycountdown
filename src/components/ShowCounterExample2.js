import React from 'react';
import {
  ChakraProvider,
  Box,
  Center,
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
import Img1 from '../assets/background2-1.jpg';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box width={20} border="1px solid white" borderRadius={10}>
            <Heading fontSize={48} fontFamily="cursive" color="white">
              {value}
            </Heading>
          </Box>
          <Heading size="md" color="white">
            {type}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <VStack backgroundImage={Img1} backgroundSize="cover" minW="600" minH="800">
      {/* <Logo h="40vmin" pointerEvents="none" /> */}
      <Heading color="white" pt={5}>Opening soon ...</Heading>
      <HStack p={0}>
        <Grid templateColumns="repeat(11, 1fr)" gap={0} pt={5}>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading color="white">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading color="white">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading color="white">:</Heading>
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
