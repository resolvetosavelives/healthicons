import Head from 'next/head';

export const SITE_URL = 'https://healthicons.org';

// short enough to show in full in social previews (about 125 characters)
export const DEFAULT_DESCRIPTION =
  'Free icons made for health projects. Download them for your website, app or report and use them anywhere, no credit needed.';

interface HeadTagsProps {
  title?: string;
  // shown in search results
  description?: string;
  // shown under the image when the page is shared (social media, chat apps);
  // the description if not given
  socialDescription?: string;
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
  socialDescription = description,
  path = '/',
  image = 'og_image.png',
  // og_image.png's size
  imageWidth = 2400,
  imageHeight = 1260,
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
      <meta property="og:description" content={socialDescription} />
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
