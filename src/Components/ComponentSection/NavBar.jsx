import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Btn from '../Btn'

const NavBar = () => {
  return (
    <>
      <nav className='bg-[url(/src/assets/header.png)] bg-fixed'>
        <Container className='py-6.25'>
            <Flex>
                <img src="src/assets/logo.png" alt="" />
                    <ul className='flex gap-12 text-white font-medium'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Schedule</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Contact Us</li>
                    </ul>
                    <Btn>Join the Conference</Btn>
            </Flex>
        </Container>
      </nav>
    </>
  )
}

export default NavBar
