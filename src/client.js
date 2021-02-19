import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "lpcdosad",
  dataset: "production"
});