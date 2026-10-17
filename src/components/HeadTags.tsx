import Head from 'next/head';

export const SITE_URL = 'https://healthicons.org';

export const DEFAULT_DESCRIPTION =
  'Free, open source health icons for your next commercial or personal project. Outline and filled icons in SVG and PNG, public domain (CC0): editing is ok, republishing is ok, no need to give credit.';

interface HeadTagsProps {
  title?: string;
  description?: string;
  // the page's path without any query string; used for the canonical URL so
  // filtered views (e.g. /?search=heart) and other variants all point here
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  // schema.org structured data, output as JSON-LD
  structuredData?: Record<string, unknown>;
}

export default function HeadTags({
  title = 'Health Icons: free, open source health icons (SVG & PNG)',
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = 'og_image.png',
  imageWidth = 1280,
  imageHeight = 640,
  structuredData
}: HeadTagsProps) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}/${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:site_name" content="Health icons" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@health_icons" />

      {structuredData && (
        <script
          type="application/ld+json"
          // JSON-LD has to be injected as raw text; "<" is escaped so the data
          // can't close the script tag
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
          }}
        />
      )}
    </Head>
  );
}
