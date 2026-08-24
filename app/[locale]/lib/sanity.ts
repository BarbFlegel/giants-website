import {createClient} from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const sanityClient = projectId
  ? createClient({projectId, dataset, apiVersion: '2026-08-24', useCdn: true})
  : null

export type CmsEvent = {
  _id: string
  title: string
  slug?: string
  status: 'upcoming' | 'comingSoon' | 'past'
  startDate: string
  endDate?: string
  location?: string
  price?: string
  description: string
  posterUrl?: string
  featured?: boolean
  registrationUrl?: string
  detailsUrl?: string
  ctaLabel?: string
}

export type CmsMedia = {
  _id: string
  title: string
  mediaType: 'photo' | 'video' | 'externalVideo'
  mediaUrl?: string
  thumbnailUrl?: string
  publishedAt: string
}

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!sanityClient) return fallback
  try {
    return await sanityClient.fetch<T>(query)
  } catch (error) {
    console.error('Sanity content could not be loaded:', error)
    return fallback
  }
}

const eventFields = `
  _id, title, "slug": slug.current, status, startDate, endDate, location,
  price, description, "posterUrl": poster.asset->url, featured,
  registrationUrl, detailsUrl, ctaLabel
`

export function getEvents() {
  return safeFetch<CmsEvent[]>(
    `*[_type == "event"] | order(startDate asc) {${eventFields}}`,
    [],
  )
}

export function getFeaturedEvent() {
  return safeFetch<CmsEvent | null>(
    `*[_type == "event" && featured == true && status != "past"] | order(startDate asc)[0] {${eventFields}}`,
    null,
  )
}

export function getEventBySlug(slug: string) {
  if (!sanityClient) return Promise.resolve<CmsEvent | null>(null)

  return sanityClient.fetch<CmsEvent | null>(
    `*[_type == "event" && slug.current == $slug][0] {${eventFields}}`,
    {slug},
  ).catch((error) => {
    console.error('Sanity event could not be loaded:', error)
    return null
  })
}

export function getMedia(mediaType: 'photo' | 'video') {
  const filter = mediaType === 'photo'
    ? 'mediaType == "photo"'
    : 'mediaType in ["video", "externalVideo"]'

  return safeFetch<CmsMedia[]>(
    `*[_type == "media" && ${filter}] | order(publishedAt desc) {
      _id, title, mediaType,
      "mediaUrl": coalesce(photo.asset->url, videoFile.asset->url, videoUrl),
      "thumbnailUrl": thumbnail.asset->url, publishedAt
    }`,
    [],
  )
}
