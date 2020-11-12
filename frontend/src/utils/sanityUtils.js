import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'
import sanityJson from '../../../backend/sanity.json'
const client = sanityClient({
    projectId: sanityJson.api.projectId,
    dataset: sanityJson.api.dataset,
    useCdn: true // `false` if you want to ensure fresh data
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source)
}

export default {
    urlFor
}