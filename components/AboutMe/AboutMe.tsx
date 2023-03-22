/* eslint-disable react/no-unescaped-entities */
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
            I was born on May 28th, 1999, in Montevideo, Uruguay. From a young age, I was fascinated
            by computers and video games. My interest in technology was sparked by my grandfather's
            Celeron computer, which he had in 2008. This computer helped me to learn how to use my
            first operating system, Windows XP. Since then, I have been using computers almost every
            day, spending several hours learning new things and exploring the internet. My passion
            for technology has only grown over time, and I am now a highly skilled and knowledgeable
            individual in the field of computer science. My experience has enabled me to develop a
            deep understanding of various operating systems, programming languages, and development
            tools. I am constantly seeking new challenges and opportunities to expand my skillset
            and stay up to date with the latest advancements in the tech industry. I believe that my
            passion, combined with my technical expertise, makes me an ideal candidate for any
            project or role in the technology sector. I am committed to delivering high-quality work
            and exceeding expectations, and I look forward to contributing my skills and knowledge
            to any project that I undertake.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Experience</Accordion.Control>
          <Accordion.Panel>
            In 2019, I discovered my passion for programming and decided to pursue it further. I
            enrolled in a MOOC offered by the University of Helsinki on object-oriented programming
            with Java, which provided me with a solid foundation in programming concepts and
            principles. Shortly thereafter, I came across JavaScript, which piqued my interest, and
            I enrolled in a course called "Jovenes a Programar" offered by the Uruguayan government,
            which aimed to teach young people web development. This course helped me to gain a solid
            understanding of the fundamentals of web development and provided me with the skills
            necessary to begin my journey as a web developer. As I delved deeper into the world of
            web development, I discovered React, a JavaScript library that intrigued me with its
            simplicity and versatility. After spending two months learning and experimenting with
            React, I was able to secure my first job as a web developer with Globant, a renowned
            technology company. Since then, my passion for web development has only grown, and I
            have had the opportunity to work on a variety of exciting projects and expand my
            knowledge and skills in the field. I am committed to continuing my education and staying
            up-to-date with the latest advancements in web development to ensure that I can deliver
            high-quality solutions that meet the needs of my clients.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>Biggest strength</Accordion.Control>
          <Accordion.Panel>
            One of my greatest strengths is my ability to be self-taught. This skill has allowed me
            to learn a new language, such as English, and acquire numerous coding skills in a
            relatively short amount of time without relying on other people or institutions. In my
            high school years, I found myself spending my classes drawing instead of paying
            attention to the teacher. However, I quickly realized that this was not conducive to my
            learning and decided to take matters into my own hands. I began studying independently,
            saving exams and reviewing my mistakes to improve my knowledge and skills. Since then, I
            have honed my self-taught abilities, allowing me to learn new technologies and
            programming languages quickly and effectively. This has been invaluable in my career as
            a web developer, where staying up-to-date with the latest technologies and trends is
            crucial. While I recognize the importance of formal education and have completed various
            courses and programs, I firmly believe that my self-taught approach has provided me with
            a unique perspective and skill set that sets me apart from others in my field. My
            ability to learn quickly and independently allows me to take on new challenges and
            projects with confidence, knowing that I can acquire the necessary knowledge and skills
            to succeed.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Skills</Accordion.Control>
          <Accordion.Panel>
            Some of my primary areas of expertise include: React: I have extensive experience
            working with React, which is my go-to JavaScript library for building dynamic and
            responsive user interfaces that meet the needs of clients. I have used this library on
            numerous projects and have an in-depth understanding of its functionalities and
            features. Node JS: I am well-versed in Node JS and have used it extensively for building
            scalable and high-performance REST APIs. With the help of Node JS and Express JS, I have
            created robust APIs that can handle large volumes of traffic and deliver seamless user
            experiences. AWS: As a firm believer in the future of serverless web development, I have
            been actively training to become an expert in AWS cloud computing. I possess a deep
            understanding of AWS services and features, such as Lambda, API Gateway, DynamoDB, S3,
            and more. I have worked on several projects that leverage AWS cloud computing, and I am
            confident in my ability to design and implement scalable and reliable cloud-based
            solutions. In addition to these skills, I am also proficient in various programming
            languages, including Java, Python, and JavaScript, and have a solid understanding of
            database management, data structures, and algorithms. I am dedicated to staying
            up-to-date with the latest advancements in web development and cloud computing and am
            always seeking new opportunities to expand my skill set and knowledge.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AboutMe;
