export interface StructuredData {
  '@context': string
  '@type': string
  [key: string]: any
}

export function generateOrganizationSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TaleCrafters',
    description: 'Performance marketing agency specializing in Meta Advertising, PMAX campaigns, and lead generation',
    url: 'https://talecrafters.in',
    logo: 'https://talecrafters.in/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://facebook.com/talecrafters',
      'https://instagram.com/talecrafters',
      'https://linkedin.com/company/talecrafters',
      'https://twitter.com/talecrafters',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      availableLanguage: ['English', 'Hindi'],
    },
  }
}

export function generateLocalBusinessSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://talecrafters.in',
    name: 'TaleCrafters',
    description: 'Hyderabad\'s performance marketing agency - Meta Ads, PMAX, Lead Generation',
    url: 'https://talecrafters.in',
    telephone: '+91-XXXXXXXXXX',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.385,
      longitude: 78.4867,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  date: string
  author: string
  url: string
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TaleCrafters',
      logo: {
        '@type': 'ImageObject',
        url: 'https://talecrafters.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'TaleCrafters',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    url: service.url,
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
