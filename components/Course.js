import React from 'react'
import styled from 'styled-components'

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <LogoWrapper>
        <Logo source={props.logo} />
      </LogoWrapper>
      <CoverContent>
        <Section>{props.section}</Section>
        <Title>{props.title}</Title>
      </CoverContent>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Wrapper>
        <Subtitle>{props.subtitle}</Subtitle>
        <Name>Taught by {props.name}</Name>
      </Wrapper>
    </Content>
  </Container>
)

const Container = styled.View`
  flex: 1;
  width: 90%;
  height: 350px;
  background: white;
  margin: 20px auto;
  border-radius: 14px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
`

const Cover = styled.View`
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  width: 100%;
  height: 280px;
  overflow: hidden;
  justify-content: space-between;
`

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const LogoWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
`

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`

const CoverContent = styled.View`
  width: 100%;
  padding-left: 15px;
  padding-bottom: 20px;
`

const Section = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 10px;
`

const Title = styled.Text`
  width: 70%;
  color: white;
  font-size: 35px;
  font-weight: 500;
`

const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  height: 70px;
`

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`

const Wrapper = styled.View`
  width: 85%;
  padding-left: 10px;
`

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
`

const Name = styled.Text`
  color: #b8bece;
`

export default Course
