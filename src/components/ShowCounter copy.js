import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  GridItem,
  Link,
  HStack,
  VStack,
  Code,
  theme,
} from '@chakra-ui/react';
import DateTimeDisplay from './DateTimeDisplay';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <HStack p={2} border="1px solid teal" bgColor="teal.100" borderRadius={15}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        </GridItem>
        <GridItem colSpan={1}>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        </GridItem>
        <GridItem colSpan={1}>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        </GridItem>
        <GridItem colSpan={1}>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </GridItem>
      </Grid>
    </HStack>
  );
};

export default ShowCounter;
