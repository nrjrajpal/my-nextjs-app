// app/page.tsx
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [workerData, setWorkerData] = useState<string | null>(null);
  const [pagesFunctionData, setPagesFunctionData] = useState<string | null>(null);

  // Replace with your published Cloudflare Worker URL
  const WORKER_API_URL = "https://my-worker.nrjrpl007-cloudflare.workers.dev/";

  useEffect(() => {
    // Call the external Cloudflare Worker API
    fetch(WORKER_API_URL)
      .then((res) => res.json())
      .then((data) => setWorkerData(data.message))
      .catch((err) => console.error(err));

    // Call the Next.js API (Pages Function)
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setPagesFunctionData(data.message))
      .catch((err) => console.error(err));
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
