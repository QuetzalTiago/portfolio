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
              I'm a very passionate full-stack web developer with two years of experience under my
              belt. I have worked with several technologies over the years, but by far here are my
              top 3 picks
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
                <b>React.js</b> – Simply the best Javascript UI libary, been using it since i
                started working professionally.
              </List.Item>
              <List.Item>
                <b>Node.js</b> – Best modern solution for building Rest API's, i use it all the time
                along with Express.js for both work and personal projects!
              </List.Item>
              <List.Item>
                <b>AWS</b> – My prediction is that all web development will be serverless in the
                next 5 years. So, as i result, im training to become an expert on this cloud
                provider.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() =>
                  window.open(
                    'mailto:quetzaltiago@gmail.com?subject=Hello Tiago, im contacting you from your personal webiste!&body=Whatever you wanna tell me :)'
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
