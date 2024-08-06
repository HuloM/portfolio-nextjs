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
      <Heading as="h1">AWS Web App Development Comparison</Heading>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          This capstone project for my undergrad, displays what a entry level
          developer might need to know in order to publish and maintain their
          own web app. In this project, there are different tech stacks explored
          to display what is available, and what might be easiest for the
          readers current knowledge. There is a full written paper available:{' '}
          <Link
            href={'https://github.com/HuloM/capstone-paper'}
            textColor={'green.300'}
            _hover={{
              color: 'green.500'
            }}
          >
            <Text as={'u'}>paper</Text>
          </Link>
          , where readers can find everything they need to know about this
          project including detailed guides on setup.
        </Text>
        <Text as="p" fontSize="lg">
          The first section of this project is to learn about what tools are
          available and what tools are popular. We explore mostly only python
          and javascript stacks within this project as they provide an easy
          level of entry for new and beginner developers. we also look at
          various cloud hosting services, CI/CD pipelines, and deployment tools
          such as docker.
        </Text>
        <Text as="p" fontSize="lg">
          We develop the 3 different stacks that are discussed and compared in
          the paper, these stacks include,{' '}
          <Text as={'span'} textColor={'green.200'}>
            {'<'}MongoDB/ExpressJS/React/NodeJS (MERN){'>'}
          </Text>
          ,{' '}
          <Text as={'span'} textColor={'green.200'}>
            {'<'}Flask, Sqlite3, React{'>'}
          </Text>
          ,{' '}
          <Text as={'span'} textColor={'green.200'}>
            {'<'}Django, Postgres, React{'>'}
          </Text>
          . These 3 stacks while not encompassing other languages such as java,
          C# .net, provides a great barrier of entry for developing modern web
          apps.
        </Text>
        <Text fontSize="lg">
          We finally take a look at cloud providers and deciding on using AWS as
          it has plenty of options and resource for developers to quickly and
          easily deploy apps. For this project we use beanstalk to automate
          deployment of our application. We also create a docker container of
          our app on dockers repository that will allow for deployment of our
          application on AWS.
        </Text>
        <Text fontSize="lg">
          We finally setup a CI/CD pipeline using github's actions which will
          automate both tests and deployment. When new code is pushed to the
          repository github will run it through actions which will test it using
          some tests we've setup and update the docker container. Finally,
          actions will send the new container up to the AWS beanstalk which will
          deploy it and will have the new app up and running.
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
