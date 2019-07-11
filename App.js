import React from 'react'
import { ScrollView, SafeAreaView } from 'react-native'
import { Text } from 'react-native'
import styled from 'styled-components'
import { Icon } from 'expo'
import { NotificationIcon } from './components/Icons'

import Card from './components/Cards'
import Logo from './components/Logo'
import Course from './components/Course'

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: '100%' }}>
          <TitleBar>
            <Avatar source={require('./assets/avatar.jpg')} />
            <Title>Welcome back,</Title>
            <Name>Gustavo</Name>
            <NotificationIcon
              style={{ position: 'absolute', right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            style={{
              flexDirection: 'row',
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, i) => (
              <Logo key={i} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            {cards.map((card, i) => (
              <Card
                key={i}
                image={card.image}
                title={card.title}
                logo={card.logo}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          {courses.map((course, i) => (
            <Course
              key={i}
              image={course.image}
              logo={course.logo}
              section={course.subtitle}
              title={course.title}
              avatar={course.avatar}
              subtitle={course.caption}
              name={course.author}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`

const logos = [
  {
    image: require('./assets/logo-framerx.png'),
    text: 'Framer X'
  },
  {
    image: require('./assets/logo-figma.png'),
    text: 'Figma'
  },
  {
    image: require('./assets/logo-studio.png'),
    text: 'Studio'
  },
  {
    image: require('./assets/logo-react.png'),
    text: 'React'
  },
  {
    image: require('./assets/logo-swift.png'),
    text: 'Swift'
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: 'Sketch'
  }
]

const cards = [
  {
    title: 'React Native for Designers',
    image: require('./assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Styled Components',
    image: require('./assets/background10.jpg'),
    subtitle: 'Styled Components',
    caption: '1 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Figma for Designers',
    image: require('./assets/background13.jpg'),
    subtitle: 'Figma',
    caption: '1 of 12 sections',
    logo: require('./assets/logo-react.png')
  },
  {
    title: 'Vue for Designers',
    image: require('./assets/background12.jpg'),
    subtitle: 'Vue',
    caption: '1 of 12 sections',
    logo: require('./assets/logo-vue.png')
  }
]

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-invision.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Learn to code and design a React site'
  }
]
