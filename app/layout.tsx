'use client';

import { Alignment, Button, Colors, Icon, IconSize, Navbar, Switch } from '@blueprintjs/core';
import './globals.css';
import styles from './layout.module.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkTheme, setDarkTheme] = useState(false);
  function handleSwitch() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  const cssClassName = `${inter.className} ${darkTheme ? 'bp5-dark' : ''}`;
  return (
    <html lang="en">
      <body className={cssClassName}>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>SPA Demo</Navbar.Heading>
            <Navbar.Divider />
            <Link href="/">
              <Button className="bp5-minimal" icon="home" text="Home" />
            </Link>
            <Link href="/dashboard">
              <Button className="bp5-minimal" icon="dashboard" text="Dashboard" />
            </Link>
            <div className={styles.warningMessage}>
              <Icon size={IconSize.LARGE} color={Colors.ORANGE5} icon="warning-sign" />
              <h4>DO NOT scan this web application</h4>
              <Icon size={IconSize.LARGE} color={Colors.ORANGE5} icon="warning-sign" />
            </div>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Switch
              onClick={handleSwitch}
              alignIndicator={Alignment.RIGHT}
              labelElement={'Dark Mode'}
            />
          </Navbar.Group>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
