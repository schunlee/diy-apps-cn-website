import * as contentful from 'contentful'


export type StudioAppsSkeleton =
{
  contentTypeId: "studioApps",
  fields: {
    appName: contentful.EntryFieldTypes.Symbol;
    appDesc: contentful.EntryFieldTypes.Text;
    appPic: contentful.EntryFieldTypes.AssetLink;
    iosUrl: contentful.EntryFieldTypes.Symbol;
  }
}