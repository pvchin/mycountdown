import React from 'react';
import Font from 'react-font';
import AnimatedText from 'react-animated-text-content';
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

import Img1 from '../assets/background9.png';
import AnimateTextOption1 from './AnimateTextOption1';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={100}
            height={70}
            border="5px solid white"
            borderRadius={10}
          >
            <Heading fontSize={38} pt={3} color="black">
              <Font family="Old Standard TT">{value}</Font>
            </Heading>
          </Box>
          {/* <Divider px={2} width="full"/> */}
          <Heading size="md" color="black">
            {type}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <VStack
      backgroundImage={Img1}
      backgroundSize="cover"
      minW="800"
      maxW="800"
      minH="800"
      maxH="800"
    >
      <HStack pt={2} pl={22} mt={650} position="relative">
        <Grid templateColumns="repeat(11, 1fr)" gap={5}>
          <GridItem colSpan={3} pt={3}>
            <Heading color="black"></Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          {/* <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
          </GridItem> */}
          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          {/* <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
          </GridItem> */}
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
          {/* <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
          </GridItem> */}
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
