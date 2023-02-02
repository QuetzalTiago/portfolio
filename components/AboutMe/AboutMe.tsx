import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const AboutMe = () => {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        A little about myself
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>My story</Accordion.Control>
          <Accordion.Panel>
            I was born on may 28th, 1999. In Montevideo, Uruguay. Ever since a little kid i was
            interested in computers and videogames, my grandfather had a Celeron computer back in
            2008 which helped me learn to use my first OS. Windows XP. Ever since then im using a
            computer practically everyday for several hours, learning new things and surfing the
            web.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Experience</Accordion.Control>
          <Accordion.Panel>
            Around 2019 i started to look into programming, i finished a MOOC on object oriented
            programming with Java from the university of Helsinki. A few months later, i heard about
            Javascript. I did a course called "Jovenes a Programar" which is a program from the
            Uruguayan goverment which teachers young people web development. After finishing that, i
            started to look into Javascript libraries and found React. Two months after starting
            with React i finally got my first job in{' '}
            <a href="https://www.globant.com/" target="_blank" rel="noopener noreferrer">
              Globant
            </a>
            ... the rest is history.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>Biggest strength</Accordion.Control>
          <Accordion.Panel>
            I have lots of strengths, but without a doubt the biggest one is being self tought. This
            allowed me to learn a new language like English and a lot of coding skills in shorts
            amount of time without depending on other people or institutions. Back in the day, when
            i was in highschool i used to spend my classes drawing and not pay attention to the
            teacher. Then a few months later i would just study on my own and save the exams.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Skills</Accordion.Control>
          <Accordion.Panel>Work in Progress</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>Achievements</Accordion.Control>
          <Accordion.Panel>Work in Progress</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AboutMe;
