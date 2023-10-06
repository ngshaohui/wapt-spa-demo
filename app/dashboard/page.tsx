'use client';

import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    fetch('/api/v2/profile');
  }, []);
  return <div></div>;
}
