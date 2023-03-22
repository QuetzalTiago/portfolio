/* eslint-disable react/jsx-no-target-blank */
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const mockdata = [
  {
    title: 'Pomodoro application for productivity',
    image:
      'https://media.istockphoto.com/id/1331816445/photo/red-tomato-shaped-kitchen-timer-with-cooking-in-the-background.jpg?b=1&s=170667a&w=0&k=20&c=a8DZ9HpDNtqsmuEbBVvVQz4fJ7IBYc4Kn2mr4u1ZKvQ=',
    date: 'Apr, 2021',
    link: 'https://pomodoro-2021.netlify.app/',
  },
  {
    title: 'Cryptocurrency price calculator',
    image:
      'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/06/top-cryptocurrencies.jpeg',
    date: 'Apr, 2021',
    link: 'https://focused-snyder-b1ff75.netlify.app/',
  },
  {
    title: 'Image search with Pixabay API',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'Apr, 2021',
    link: 'https://peaceful-mayer-0c456c.netlify.app/',
  },
  {
    title: 'Inked Frogs! (NFT Project, WIP)',
    image: 'https://i.imgur.com/ceszeLU.jpeg',
    date: 'Oct, 2022',
    link: 'https://inked-frogs.vercel.app/',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href={article.link}
      target="_blank"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
