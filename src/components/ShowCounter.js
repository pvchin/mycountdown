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
import { Logo } from './Logo';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={20}
            height={20}
            border="1px solid teal"
            borderRadius={100}
          >
            <Heading fontSize={48} fontFamily="cursive" pt={2}>
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
    <VStack>
      <Logo h="40vmin" pointerEvents="none" />
      <Text>Coming soon ...</Text>
      <HStack p={2}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
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
