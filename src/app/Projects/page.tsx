'use client';

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Avatar
} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import { Link } from '@chakra-ui/next-js';

// Replace test data with your own
const features: { id: number; link: string; title: string; text: string }[] = [
  {
    id: 0!,
    link: 'Projects/aws-comparison/'!,
    title: '//AWS Web App Development Comparison',
    text: 'Wanting to know more about AWS and web apps? Come check out a paper I wrote.'!
  },
  {
    id: 0!,
    link: 'Projects/home-lab'!,
    title: '//Home Lab'!,
    text: 'This is a continuous project meant to grow and develop a home server'!
  }
];
export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Projects</Heading>
        <Text as={'div'} color={'green.200'} fontSize={'xl'}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(60)
                .typeString(
                  'Here you can find my previous and continuing work, expect to see ' +
                    'updates every month ranging from ' +
                    '<span style="color: #68D391"> software development</span>,' +
                    '<span style="color: #68D391"> Home lab attack and defense simulations</span>,' +
                    'to<span style="color: #68D391"> open source work</span>.'
                )
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .start();
            }}
          />
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Link href={`${feature.link}`}>
                <Box color={'green.400'} px={2}></Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'green.300'}>{feature.text}</Text>
                </VStack>
              </Link>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
