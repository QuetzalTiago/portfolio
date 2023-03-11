/* eslint-disable @typescript-eslint/dot-notation */
import { useEffect, useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import jwt from 'jsonwebtoken';
import Navbar from '../components/Navbar/Navbar';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const [userData, setUserData] = useState();

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  // @ts-ignore
  useEffect(() => {
    //@ts-ignore
    if (props.userData) {
      //@ts-ignore
      const decodedUserData = jwt.decode(props.userData, 'secret');
      //@ts-ignore
      setUserData(decodedUserData);
    }
    //@ts-ignore
  }, [props.userData]);

  return (
    <>
      <Head>
        <title>Tiago Romero | Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Navbar
              links={[
                { label: 'Home', link: '/' },
                {
                  label: 'Projects',
                  link: '/projects',
                },
                {
                  label: 'About',
                  link: '/about',
                },
              ]}
              user={userData}
            />
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
    userData: getCookie('authBearer', appContext.ctx) || null,
  };
};
