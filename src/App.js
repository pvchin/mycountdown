import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Center,
  Box,
  Text,
  Grid,
  GridItem,
  Input,
  Select,
  HStack,
  VStack,
  Code,
} from '@chakra-ui/react';
import { theme } from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Font from "react-font"
import ShowCounter1 from './components/ShowCounterExample1';
import ShowCounter2 from './components/ShowCounterExample2';
import ShowCounter3 from './components/ShowCounterExample3';
import ShowCounter4 from './components/ShowCounterExample4';
import ShowCounter5 from './components/ShowCounterExample5';
import ShowCounter6 from './components/ShowCounterExample6';
import ShowCounter7 from './components/ShowCounterExample7';
import ShowCounter8 from './components/ShowCounterExample8';
import ShowCounter9 from './components/ShowCounterExample9';
import ShowCounter10 from './components/ShowCounterExample10';

const calculateTimeLeft = () => {
  const difference = +new Date('2022-10-27T23:59:00') - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [selectedoption, setSelectedOption] = useState('1');

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    });
  });

  return (
    <ChakraProvider theme={theme}>
      <Font family="Old Standard TT" onLoad />
      <Box textAlign="center" fontSize="xl">
        <Grid p={5}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack>
            <Center>
              {/* <Text as="b" fontSize="sm">
                Layout
              </Text> */}
              <Select
                name="item_location"
                value={selectedoption}
                //width="50%"
                onChange={e => setSelectedOption(e.target.value)}
                borderColor="gray.400"
              >
                <option value="1">Layout 1</option>
                <option value="2">Layout 2</option>
                <option value="3">Layout 3</option>
                <option value="4">Layout 4</option>
                <option value="5">Layout 5</option>
                <option value="6">Layout 6</option>
                <option value="7">Layout 7</option>
                <option value="8">Layout 8</option>
                <option value="9">Layout 9</option>
                <option value="10">Layout 10</option>
              </Select>
            </Center>
          </VStack>
          <VStack spacing={8} p={5}>
            <Box>
              {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                (() => {
                  switch (selectedoption) {
                    case '1':
                      return (
                        <ShowCounter1
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );

                    case '2':
                      return (
                        <ShowCounter2
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );

                    case '3':
                      return (
                        <ShowCounter3
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '4':
                      return (
                        <ShowCounter4
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '5':
                      return (
                        <ShowCounter5
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '6':
                      return (
                        <ShowCounter6
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '7':
                      return (
                        <ShowCounter7
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '8':
                      return (
                        <ShowCounter8
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '9':
                      return (
                        <ShowCounter9
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '10':
                      return (
                        <ShowCounter10
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    default:
                      return null;
                  }
                })()
              ) : (
                // <ShowCounter
                //   days={timeLeft.days}
                //   hours={timeLeft.hours}
                //   minutes={timeLeft.minutes}
                //   seconds={timeLeft.seconds}
                // />

                <p>Time is up 🔥</p>
              )}
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
