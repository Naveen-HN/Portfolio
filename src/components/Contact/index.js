import React from "react"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"
import gitHub from "../../images/contact/github.png"
import instaLogo from "../../images/contact/insta.jpeg"
import ContactImage from "../../images/contact/contact.png"

import { ContactWrapper, ImageWrapper, InfosWrapper } from "./styled"

const Contact = () => (
  <>
    <Wrapper>
      <Content>
        <ContactWrapper>
          <InfosWrapper>
            <h1> Contact </h1> <p> Let's get in touch</p>{" "}
            <p>
              If you like to see my simple projects:{" "}
              <a href="https://github.com/Naveen-HN">
                <img src={gitHub} height="30" width="30" />
              </a>{" "}
            </p>{" "}
            <p>
              {" "}
              If you like to look at good photos:{" "}
              <a href="https://navernight.netlify.app/">
                {" "}
                <img src={instaLogo} alt="" height="30" width="30" />
              </a>{" "}
            </p>{" "}
          </InfosWrapper>{" "}
          <ImageWrapper>
            <img src={ContactImage} alt="" />
          </ImageWrapper>{" "}
        </ContactWrapper>{" "}
      </Content>{" "}
    </Wrapper>{" "}
  </>
)

export default Contact
