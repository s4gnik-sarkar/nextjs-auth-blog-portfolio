import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className="mainTitle !text-8xl">Our Works</h1>
        {children}
    </div>
  )
}

export default Layout