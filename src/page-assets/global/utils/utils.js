export const bannerBgImage = (imagePath) => {
  return `query WorkIveDoneQuery {
    desktop: file(relativePath: { eq: "${imagePath}" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobile: file(relativePath: { eq: "${imagePath}" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 400) {
        ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;
}