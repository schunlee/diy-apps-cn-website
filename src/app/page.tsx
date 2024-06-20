
'use client'
import { getImageUrl, getStudioApps } from './components/contentful'
import Studio from './Studio'

export default async function Page() {
  const apps = await getStudioApps();

  let newApps = []
  for (const app of apps) {
    if (app.appPic?.hasOwnProperty('sys')) {
      const imageId = app.appPic.sys.id;
      const iconUrl = await getImageUrl(imageId);
      newApps.push({ ...app, iconUrl: iconUrl })
    }


  }

  return (
    <Studio apps={newApps} />

  )
}