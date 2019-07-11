import React from 'react'
import styled from 'styled-components'

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
)

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background: white;
  padding: 12px 16px 12px;
  height: 60px;
  margin: 0 8px;
  border-radius: 14px;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.05);
`

const Image = styled.Image`
  width: 36px;
  height: 36px;
`

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`

export default Logo
