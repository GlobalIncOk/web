import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export default Layout
