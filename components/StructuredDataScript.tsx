import type { ReactNode } from 'react'
import { generateOrganizationSchema, generateLocalBusinessSchema, type StructuredData } from '@/lib/structured-data'

export default function StructuredDataScript({ data }: { data?: StructuredData }) {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
  ]

  if (data) {
    schemas.push(data)
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
