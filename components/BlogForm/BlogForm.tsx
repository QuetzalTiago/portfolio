import { useState } from 'react';
import { Button, Container, Input, Space, Text, Textarea } from '@mantine/core';

interface BlogFormProps {
  onSubmit: (title: string, content: string) => void;
}

export default function BlogForm({ onSubmit }: BlogFormProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // Function to handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
  }

  return (
    <Container maw={1000} h={300} mx="auto">
      <form onSubmit={handleSubmit}>
        <Text size="xl">Post about something!</Text>
        <Space h="md" />

        <Input
          placeholder="Enter title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <Space h="md" />

        <Textarea
          placeholder="Enter some content"
          radius="md"
          withAsterisk
          value={content}
          spellCheck
          minRows={5}
          onChange={(event) => setContent(event.target.value)}
        />

        <Space h="md" />
        <Button type="submit">Add Post</Button>
      </form>
    </Container>
  );
}
