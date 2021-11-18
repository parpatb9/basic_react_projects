import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, haxValue }) => {
  const [alert, setAlert] = useState('')
  const bcg = rgb.join(',')
  const hexColor = `#${haxValue}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout()
    }
  }, [alert])

  return (
    <article
      style={{ backgroundColor: `rgb(${bcg})` }}
      className={`color ${index > 10 && 'color-light'}`}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert && 'COPIED TO CLIPBOARD'}
    </article>
  )
}

export default SingleColor
