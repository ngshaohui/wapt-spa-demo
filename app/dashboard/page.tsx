'use client';

import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    fetch('/api/v2/profile');
    fetch('/api/v2/posts');
    fetch('/api/v2/statistics');
  }, []);
  return <div>Dashboard</div>;
}
