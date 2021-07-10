import Head from 'next/head';

interface HeadTagsProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function HeadTags({
  title = 'Health icons',
  description = 'Free, open source health icons. Use in your next commercial or personal project. Editing is ok. Republishing is ok. No need to give credit.',
  path = '/',
  image = 'og_image.png',
  imageWidth = 1280,
  imageHeight = 640
}: HeadTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:site_name" content="Health icons" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`http://healthicons.org${path}`} />
      <meta property="og:image" content={`http://healthicons.org/${image}`} />
      <meta
        property="og:image:secure_url"
        content={`https://healthicons.org/${image}`}
      />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content={`https://healthicons.org/${image}`}
      />
      <meta property="twitter:site" content="@health_icons" />
    </Head>
  );
}
