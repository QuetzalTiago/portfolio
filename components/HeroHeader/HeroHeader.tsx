/* eslint-disable react/no-unescaped-entities */
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function HeroHeader() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>Tiago</span> <br /> Romero
            </Title>
            <Text color="dimmed" mt="md">
              Welcome to my page!
            </Text>
            <Text color="dimmed" mt="md">
              I am a skilled and experienced full-stack web developer, with a focus on delivering
              innovative solutions to complex problems. With two years of experience in the field, I
              have built a deep understanding of a wide range of technologies, from programming
              languages and frameworks to cloud-based services and beyond. Throughout my
              professional journey, I have had the opportunity to work with many different
              technologies, but my top three picks are:
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>React.js</b> – React.js is my go-to JavaScript UI library, and I have been using
                it consistently since I began working professionally. Its simplicity and flexibility
                make it the best choice for creating dynamic and responsive user interfaces that
                meet client requirements.
              </List.Item>
              <List.Item>
                <b>Node.js</b> – Node.js is my preferred server-side runtime environment for
                building scalable and high-performance web applications. Its event-driven
                architecture and non-blocking I/O make it an excellent choice for building real-time
                web applications, APIs, and microservices. Additionally, its vast ecosystem of
                modules and packages makes it easy to integrate with other tools and technologies,
                and its open-source nature ensures continuous improvement and innovation.
              </List.Item>
              <List.Item>
                <b>AWS</b> – As for cloud computing, AWS is my platform of choice. With its vast
                array of services, scalable architecture, and cost-effectiveness, it has proven to
                be a game-changer in the world of web development. I firmly believe that serverless
                web development is the future, and as a result, I am actively training to become an
                expert in AWS cloud computing.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() =>
                  window.open(
                    'mailto:quetzaltiago@gmail.com?subject=Hello Tiago, im contacting you from your personal website!&body=Whatever you wanna tell me :)'
                  )
                }
              >
                Contact me
              </Button>
              {/* href="https://github.com/QuetzalTiago" target="_blank"*/}
              <Link
                href="https://drive.google.com/file/d/1S0QirjOriIFzgVW-gO3sJ8xg9B3-Jf6k/view?usp=sharing"
                passHref
                target="_blank"
              >
                <Button color="teal" radius="xl" size="md" className={classes.control}>
                  Download my CV
                </Button>
              </Link>
              <Link href="https://github.com/QuetzalTiago" passHref target="_blank">
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  Github
                </Button>
              </Link>
            </Group>
          </div>
          <Image src="/me.png" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
