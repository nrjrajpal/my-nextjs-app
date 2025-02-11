"use client"
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [workerData, setWorkerData] = useState<string | null>(null);
  const [pagesFunctionData, setPagesFunctionData] = useState<string | null>(null);

  // Replace this with your published Cloudflare Worker URL
  const WORKER_API_URL = 'https://my-worker.nrjrpl007-cloudflare.workers.dev/';

  useEffect(() => {
    // Fetch from Cloudflare Worker API
    fetch(WORKER_API_URL)
      .then((res) => res.json())
      .then((data) => setWorkerData(data.message))
      .catch((err) => console.error('Worker API error:', err));

    // Fetch from Next.js API (Pages Function)
    fetch('/api/data')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPagesFunctionData(data.message))
      .catch((err) => console.error('Pages Function error:', err));
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to My Next.js App on Cloudflare Pages</h1>
      <section>
        <h2>Data from Cloudflare Worker API:</h2>
        <p>{workerData || 'Loading...'}</p>
      </section>
      <section>
        <h2>Data from Next.js API (Pages Function):</h2>
        <p>{pagesFunctionData || 'Loading...'}</p>
      </section>
    </main>
  );
}
