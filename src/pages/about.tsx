import Head from 'next/head';
import { TopBar } from '../components/TopBar';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Health Icons - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <main>
        <h1 className="title">About</h1>
      </main>
    </div>
  );
}
