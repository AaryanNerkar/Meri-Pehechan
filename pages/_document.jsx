import { Html, Head, Main, NextScript } from 'next/document';
import profile from '@/data/profile.json';

export default function Document() {
  const { hero, contact, meta } = profile;

  // JSON-LD structured data
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: hero.name,
    jobTitle: hero.title,
    description: hero.summary,
    url: meta.siteUrl,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: contact.location,
    },
    sameAs: [
      contact.linkedin,
      contact.github,
      contact.twitter,
      contact.website,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      email: contact.email,
      contactType: 'professional',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: meta.siteTitle,
    url: meta.siteUrl,
    description: meta.siteDescription,
    author: {
      '@type': 'Person',
      name: hero.name,
    },
  };

  return (
    <Html lang="en">
      <Head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
