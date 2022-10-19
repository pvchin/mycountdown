import React from 'react';
import {
  ChakraProvider,
  Box,
  Center,
  Container,
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
import Img1 from '../assets/background1.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Heading fontSize={48} fontFamily="cursive">
            {value}
          </Heading>

          <Heading size="md">{type}</Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <VStack backgroundImage={Img1} minW="800" minH="600">
      <Logo h="40vmin" pointerEvents="none" />
      <Heading>Coming soon ...</Heading>
      <HStack>
        <Grid templateColumns="repeat(11, 1fr)" gap={0} pl={14} mt={2} >
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading>:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading>:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading>:</Heading>
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
