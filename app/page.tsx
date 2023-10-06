'use client';

import Sidebar from '@/components/Sidebar/Sidebar';
import styles from './page.module.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/v1/posts');
    fetch('/api/v2/analytics');
  }, []);
  return (
    <main className={styles.main}>
      <Sidebar />
    </main>
  );
}
