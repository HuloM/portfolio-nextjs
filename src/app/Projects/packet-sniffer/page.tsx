'use client';

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Link
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" textColor={'white'}>
        Network Packet Sniffer on Pi
      </Heading>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg" textColor={'white'}>
          During my CSS537 Network and Systems Security, I created a packet
          sniffer capable of intercepting all traffic on the network. The goal
          of this class was to learn network security and apply it in a final
          project. THe purpose of this project was to provide a packet sniffing
          tool that can be quickly deployed on any system and configure the
          network to pass traffic through the system to it's destination.
        </Text>
        <Text as={'p'} fontSize="lg" textColor={'white'}>
          The packet sniffer uses python along with the ScaPY package to provide
          an easy to use packet sniffing framework. this allows us to sniff any
          traffic that passes through the system, and also allows simple
          filtering to filter for certain traffic types, destination/source,
          etc. This alone would suffice but creating a web interface using a
          react page with a flask API backend to allow any user to be able to
          view and filter traffic.
        </Text>
        <Text as={'p'} fontSize="lg"></Text>
        <Text as={'p'} fontSize="lg"></Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
