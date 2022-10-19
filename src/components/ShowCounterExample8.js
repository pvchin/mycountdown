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
import Img1 from '../assets/background8.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={150}
            height={100}
            //border="5px solid white"
            borderRadius={10}
          >
            <Heading fontSize={58}  fontFamily="cursive" pt={2} color="white">
              {value}
            </Heading>
          </Box>
          <Divider px={2} width="full"/>
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
    <VStack backgroundImage={Img1} backgroundSize="cover" minW="800" minH="800">
      {/* <Logo h="40vmin" pointerEvents="none" />
      <Text>Coming soon ...</Text> */}
      <HStack pt={2} pl={0} mt={400} position="relative">
       
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          <GridItem colSpan={1}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          <GridItem colSpan={1}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          <GridItem colSpan={1}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
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
