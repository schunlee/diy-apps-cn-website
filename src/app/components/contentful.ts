'use client'
// import { createClient } from 'contentful';
import * as contentful from 'contentful'
import { StudioAppsSkeleton } from '../../../types/contentful/TypeStudioApps';

export const contentfulClient = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});


export const getEntriesByType = async (type: any) => {
  const response = await contentfulClient.getEntries<StudioAppsSkeleton>({
    content_type: type,
  })

  return response.items
}

  export const getStudioApps = async () => {
  const results = await getEntriesByType('studioApps')
  const studioApps = results.map((app) => app.fields)
  return studioApps
}

export const getImageUrl = async (assetId: string) => {  
  const imageObj = await contentfulClient.getAsset(assetId);  
  return imageObj.fields.file?.url;
};