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
      <Heading as="h1">DNS Server</Heading>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          We constantly use web browsers to browse the internet visit websites
          using human readable URLs. However, computers don't know how to
          process these URLs inherently, so DNS was created to map URLs to IP
          addresses. There are many types of DNS records that are used for
          different kinds of servers. MX for email, A for IPv4, AAAA for IPv6,
          etc.
        </Text>
        <br />
        <Text as={'p'} fontSize="lg">
          In this project, I used python with the sockets and thread APIs to
          create a fully functional DNS server. it receives any type of record
          request and responds with the accompanying answer body. There is
          currently no function to query out to authoritative servers so it can
          only respond to records that is cached in the server.
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
