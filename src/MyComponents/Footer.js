import React from 'react'

export const Footer = () => {

  let footerstyle = {
    width: "100%",
    border: "2px solid red"
  };

  return (
    <footer className='bg-dark text-light my-4 py-2' style={footerstyle}>
        <p className='text-center'>Copyright &copy; xyz.com</p>
    </footer>
  )
}
