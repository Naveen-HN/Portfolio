import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, ImageContainer, IntroContainer } from "./styled"

const Intro = () => (
  <>
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>{" "}
      <IntroContainer>
        <header>
          <h1>
            {" "}
            Hi, my name is{" "}
            <b>
              {" "}
              <br /> Naveen{" "}
            </b>{" "}
          </h1>{" "}
          <h3> Web Development Enthusiast </h3>{" "}
        </header>{" "}
        <p> Developer as a Profession, Photography as a hobby! </p>{" "}
      </IntroContainer>{" "}
    </Wrapper>{" "}
  </>
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "intro/photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 386) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Intro
