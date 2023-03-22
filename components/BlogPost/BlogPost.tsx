import { Card, Space, Text } from '@mantine/core';

interface BlogPostProps {
  title: string;
  content: string;
}

export default function BlogPost({ title, content }: BlogPostProps) {
  return (
    <>
      <Card shadow="sm" maw={1000} h={300} mx="auto">
        <Text size="lg" fw={700}>
          {title}
        </Text>
        <Text>{content}</Text>
      </Card>
      <Space h="md" />
    </>
  );
}
