import React from "react"
import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"
import eduImage from "../../images/education/education.png"
import { EducationWrapper, ImageWrapper, InfosWrapper } from "./styled"
const Education = () => (
  <>
    <Wrapper>
      <Content>
        <EducationWrapper>
          <InfosWrapper>
            <h1> Education </h1>{" "}
            <p>
              {" "}
              <span
                style={{
                  fontWeight: "bolder",
                  paddingBelow: 0,
                }}
              >
                Master of Science in Computer Science{" "}
              </span>{" "}
              <br />
              New York Institute of Technology <br />
              Old Westbury, New York{" "}
            </p>{" "}
            <p>
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Bachelor of Engineering in Information Science{" "}
              </span>{" "}
              <br />
              BMS College of Engineering <br />
              Bangalore, India{" "}
            </p>{" "}
          </InfosWrapper>{" "}
          <ImageWrapper>
            <img src={eduImage} alt="" />
          </ImageWrapper>{" "}
        </EducationWrapper>{" "}
      </Content>{" "}
    </Wrapper>{" "}
  </>
)

export default Education
