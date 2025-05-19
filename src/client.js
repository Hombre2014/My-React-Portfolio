import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  useCdn: true,
  projectId: 'bp1tcvcf',
  dataset: 'production',
  apiVersion: '2022-02-01',
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
