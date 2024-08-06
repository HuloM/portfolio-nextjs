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

import { useEffect, useState } from 'react';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import { parseString } from 'xml2js';
import { Link } from '@chakra-ui/next-js';

let features = [];
const MEDIUM_URL = 'https://medium.com/feed/@matthieu.l.dubray';

async function get_posts() {
  await axios.get(MEDIUM_URL).then((response) => {
    parseString(response.data, (err, res2) => {
      if (res2.rss.channel[0].item) {
        JSON.parse(JSON.stringify(res2.rss.channel[0].item)).forEach(
          function (post) {
            features.push({
              title: post.title,
              id: post.guid,
              link: post.link
            });
          }
        );
      }
    });
  });
}

export default async function GridListWithHeading() {
  features = [];
  await get_posts();
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'} textColor={'white'}>
          Blogs
        </Heading>
        {/*<Text as={'div'} fontSize={'xl'} textColor={'green.200'}>*/}
        {/*  <Typewriter*/}
        {/*    onInit={(typewriter) => {*/}
        {/*      typewriter*/}
        {/*        .changeDelay(60)*/}
        {/*        .typeString(*/}
        {/*          'Here you can find my more recent blogs, I mostly post on medium, you' +*/}
        {/*            ' can find more there. I mostly write about interesting topics such as' +*/}
        {/*            '<span style="color: #68D391"> cryptography</span>,' +*/}
        {/*            '<span style="color: #68D391"> networking</span>, and' +*/}
        {/*            '<span style="color: #68D391"> cybersecurity awareness</span>,' +*/}
        {/*            " or writing some guides on some of the work I've done."*/}
        {/*        )*/}
        {/*        .callFunction(async () => {*/}
        {/*          console.log('String typed out!');*/}
        {/*        })*/}
        {/*        .start();*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Text>*/}
        <Text fontSize={'xl'} textColor={'green.200'}>
          Here you can find my more recent blogs, I mostly post on medium, you
          can find more there. I mostly write about interesting topics such as
          <Text as={'span'} fontSize={'xl'} textColor={'green.300'}>
            {' '}
            cryptography
          </Text>
          ,
          <Text as={'span'} fontSize={'xl'} textColor={'green.300'}>
            {' '}
            networking
          </Text>
          , and
          <Text as={'span'} fontSize={'xl'} textColor={'green.300'}>
            {' '}
            cybersecurity awareness
          </Text>
          , or
          <Text as={'span'}>
            {` writing some guides on some of the work I've done.`}
          </Text>
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.guid} align={'top'}>
              <Link href={`${feature.link}`}>
                <Box color={'green.400'} px={2}>
                  <Avatar />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                </VStack>
              </Link>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
