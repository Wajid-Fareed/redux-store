import React from 'react'
import Container from '../re-usable/container/Container'

const Footer = () => {
  return (
    <footer className="bg-black absolute bottom-0 w-full">
        <Container className="flex justify-center items-center h-14">
          <p className="text-white text-lg font-medium">Redux Store © 2024. All Rights Reserved</p>
        </Container>
      </footer>
  )
}

export default Footer