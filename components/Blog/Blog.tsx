import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogForm from '../BlogForm/BlogForm';
import BlogPost from '../BlogPost/BlogPost';

interface Post {
  title: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    setPosts([]);
    const response = await axios.get(
      'https://rxzqfd75z4.execute-api.us-east-1.amazonaws.com/dev/post?sort=desc'
    );
    setPosts(response.data.body);
  };

  const createPost = async (title: string, content: string) => {
    await axios.post('https://rxzqfd75z4.execute-api.us-east-1.amazonaws.com/dev/post', {
      title,
      content,
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to add a new post to the blog
  function addPost(title: string, content: string) {
    createPost(title, content);
    setTimeout(() => fetchPosts(), 2000);
  }

  return (
    <div>
      <BlogForm onSubmit={addPost} />
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
