import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import { WorksContainer, WorkItem, WorkImage } from "./styled"

const Works = () => (
  <>
    <Wrapper>
      <Content>
        <h1> Interests </h1> <p> These are a few of my areas of interest... </p>{" "}
        <WorksContainer>
          <WorkItens />
        </WorksContainer>{" "}
      </Content>{" "}
    </Wrapper>{" "}
  </>
)

const WorkItens = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "works" } }) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <WorkItem>
      {" "}
      {data.allFile.edges.map((image, key) => (
        <a target="_blank" rel="noopener noreferrer">
          <WorkImage key={key} fluid={image.node.childImageSharp.fluid} />{" "}
        </a>
      ))}{" "}
    </WorkItem>
  )
}

export default Works
