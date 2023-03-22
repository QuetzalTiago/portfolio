import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  PaperProps,
  Button,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function AuthForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const [cookie, setCookie] = useCookies(['authBearer']);
  const router = useRouter();

  useEffect(() => {
    if (cookie.authBearer) {
      showNotification({ message: 'Already logged in!' });
      // router.push('/');
    }
  }, []);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      name: (val) =>
        type === 'register' && val.length < 4
          ? 'Name is required and must include at least 4 characters'
          : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password must include at least 6 characters' : null),
    },
  });
  const handleSubmit = async () => {
    const { email, name, password } = form.values;

    if (type === 'register') {
      const response = await axios.post(
        'https://rxzqfd75z4.execute-api.us-east-1.amazonaws.com/dev/register',
        {
          email,
          name,
          password,
        }
      );

      // Redirect to home after successful registration
      if (response.data.statusCode === 200) {
        showNotification({
          message: 'Registration successful!',
        });
        const { jwt } = JSON.parse(response.data.body);
        setCookie('authBearer', jwt, {
          path: '/',
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
        router.push('/');
      } else {
        const message = response.data.body.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, '');
        showNotification({
          message,
        });
      }
    } else if (type === 'login') {
      const response = await axios.post(
        'https://rxzqfd75z4.execute-api.us-east-1.amazonaws.com/dev/login',
        {
          email,
          password,
        }
      );
      // Save JWT in cookies and redirect to home after successful login
      if (response.data.statusCode === 200) {
        const { jwt } = JSON.parse(response.data.body);
        setCookie('authBearer', jwt, {
          path: '/',
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });

        showNotification({
          message: 'Successfully logged in!',
        });
        //@ts-ignore
        router.replace('/');
      } else {
        const message = response.data.body.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, '');
        showNotification({
          message,
        });
      }
    }
  };

  return (
    <div style={{ height: '400px', width: '500px', margin: 'auto' }}>
      <Paper radius="md" p="xl" withBorder {...props}>
        <form onSubmit={form.onSubmit(() => handleSubmit())}>
          <Stack>
            {type === 'register' && (
              <TextInput
                required
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                error={
                  form.errors.name && 'Name is required and must include at least 4 characters'
                }
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
