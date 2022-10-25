import React from 'react';
import { MovingComponent } from 'react-moving-text';
import {
  Box,
  Center,
  Heading,
  Image,
  Grid,
  GridItem,
  HStack,
  VStack,
} from '@chakra-ui/react';

import Img1 from '../assets/template12/background.png';
import Img2 from '../assets/template12/comingsoon.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={100}
            height={70}
            border="5px solid black"
            borderRadius={10}
          >
            <Heading fontSize={38} pt={3} color="black">
              {value}
            </Heading>
          </Box>

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
  <Box
      position="relative"
      backgroundImage={Img1}
      backgroundSize="cover"
      h="900px"
      w="900px"
    >
      <Box position="relative" left={150} top={300}>
        <MovingComponent
          type="fadeOut"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Img2} w={600} />
        </MovingComponent>
      </Box>
      <Box position="relative" top="350">
        <Heading color="yellow" fontFamily="serif">
          STAY TUNED
        </Heading>
      </Box>
      <HStack top={780} left={200} position="absolute">
        <Grid templateColumns="repeat(11, 1fr)" gap={5}>
          <GridItem colSpan={3} pt={3}>
            <Heading color="black"></Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>

          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>

          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
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
    </Box>
  );
};

export default ShowCounter;
