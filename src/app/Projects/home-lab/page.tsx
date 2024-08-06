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
        Home Lab
      </Heading>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg" textColor={'white'}>
          This project will show my current and continuing journey of developing
          my own home servers. These servers act mainly for offense and defense
          simulations of vulnerable systems and other cybersecurity related
          simulations. These servers are also used to provide services both to
          the internet and internal use such as web apps, NAS storage, and game
          servers
        </Text>
        <Text as={'p'} fontSize="lg" textColor={'white'}>
          During my time in my masters program, we worked with plenty of
          simulations using the{' '}
          <Link
            href={'https://seedsecuritylabs.org/'}
            textColor={'green.300'}
            _hover={{
              color: 'green.500'
            }}
          >
            <Text as={'u'}>SeedLabs Simulations</Text>
          </Link>
          , simulations based around active defense or blue teaming I have used
          come from the
          <Link
            href={'https://www.uscyberpatriot.org'}
            textColor={'green.300'}
            _hover={{
              color: 'green.500'
            }}
          >
            <Text as={'u'}> CyberPatriot Team</Text>
          </Link>{' '}
          , more of their images can be found at{' '}
          <Link
            href={' https://eth007.me/  '}
            textColor={'green.300'}
            _hover={{
              color: 'green.500'
            }}
          >
            <Text as={'u'}>eth007</Text>
          </Link>
          .
        </Text>
        <Text textColor={'green.300'}>
          <br />
          This following section will be used for large updates to home server
          activity and setups
        </Text>
        <br />
        <Heading as={'h1'} fontSize={'xl'} textColor={'white'}>
          Update: Dec 1 2023
        </Heading>
        <Text as="p" fontSize="lg" textColor={'white'}>
          Incorporating a new headless server, using the CasaOS to start my home
          server I was able to quickly deploy a dashboard for the home server. I
          installed a few tools such as wuzah, a separate game server, plex, and
          a smart home monitoring software. Also incorporated a new NAS that is
          used for periodic back ups and as a plex server storage
        </Text>
        <br />
        <Heading as={'h1'} fontSize="xl" textColor={'white'}>
          Update January 4 2024
        </Heading>
        <Text as="p" fontSize="lg" textColor={'white'}>
          Adding a standalone pi to service web apps through cloudflare tunnel.
        </Text>
        <br />
        <Heading as={'h1'} fontSize="xl" textColor={'white'}>
          Update March 10 2024
        </Heading>
        <Text as="p" fontSize="lg" textColor={'white'}>
          Converting standalone pi to a pi cluster to provide load balancing and
          more resources for other projects.
        </Text>
        <br />
        <Heading as={'h2'} fontSize="xl" textColor={'white'}>
          Update: May 24 2024
        </Heading>
        <Text as="p" fontSize="lg" textColor={'white'}>
          Removing CasaOS and restarting server as a proxmox server running
          ludus. Ludus is a fantastic tool that provides pre imaged VMs meant to
          simulate both attack and defense against live servers. As Ludus is
          built on top of proxmox you have the ability to generate those images
          but also use proxmox as normal.
        </Text>
      </VStack>
    </Container>
  );
};

export default ArticleList;
