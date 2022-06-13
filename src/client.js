import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'bp1tcvcf',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skYQ7rDbJtIgwtpRinC4oDISwZc3jlRnZ0E1RUTuKmP9ktFcdGoFamHph8VNDeDPXLLGzQCAKvXnPNHiXT2iu3uTXxRmXdXo23IYoKVcIV50WNNKOQSnfWxTRo69ulwErCPXEOedEKL8gcc1IXePSo5CLZ1QmG1Oh3RSMiTDjbhRLR5ovl83',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
