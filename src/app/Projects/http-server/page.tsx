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
      <Heading as="h1">HTTP Server</Heading>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          We constantly use web browsers to browse the internet visit websites,
          buy things online, etc. HTTP servers need to process a few different
          requests, such as GET, POST, PUT, and DELETE.
        </Text>
        <br />
        <Text as={'p'} fontSize="lg">
          In this project, I used python with the sockets and thread APIs to
          create a fully functioning HTTP server. It handles any type of HTTP
          request and is able to respond. Packets received are processed and
          then response packets are constructed based on the request type. the
          packets are then sent back to the requester.
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
