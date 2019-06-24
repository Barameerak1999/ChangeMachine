import React from 'react'
import './App.css'
import App from './App'
function Box(props) {
  const usedBandC = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    // textDecoration: 'line-through',
  }
  console.log('ssss')
  console.log(props)
  // style={props.item.Number != 0 ? usedBandC:null
  return (
    <div>
      <section className="flex-container">
        <div className="flex-container" style={props.value == 0 ? usedBandC : null}>
          <div className="column">{props.name}</div>
          <div>{props.value}</div>
        </div>
      </section>
    </div>
  )
}

// ●        $100 dollar bill
// ●        $50 dollar bill
// ●        $20 dollar bill
// ●        $10 dollar bill
// ●        $5 dollar bill
// ●        $1 dollar bill
// ●        $.25 cents (quarter)
// ●        $.10 cents (dime)
// ●        $.05 cents (nickel)
// ●        $.01 cents (penny)

export default Box
