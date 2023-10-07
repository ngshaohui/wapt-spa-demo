'use client';

import Sidebar from '@/components/Sidebar/Sidebar';
import styles from './page.module.css';
import { useEffect } from 'react';
import { Card, HTMLTable } from '@blueprintjs/core';

export default function Home() {
  useEffect(() => {
    fetch('/api/v1/posts');
    fetch('/api/v2/analytics');
  }, []);
  return (
    <main className={styles.main}>
      <Sidebar />
      <Card className={styles.card}>
        <HTMLTable>
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
              <td>268</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
              <td>403</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
              <td>737</td>
            </tr>
          </tbody>
        </HTMLTable>
      </Card>
    </main>
  );
}
