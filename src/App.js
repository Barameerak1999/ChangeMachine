import React from 'react'
import logo from './logo.svg'
import './App.css'
import CalculateChange from './CalculateChange'
import NumberField from './NumberField'
import Box from './Box'
import BillAndCoin from './BillAndCoin'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '',
      BillAndCoin: BillAndCoin,
      Arr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const re = /^[+-]?\d+(\.\d+)?$/

    this.setState({ value: e.target.value })
    console.log('fefssse')
    console.log(this.state.value)
    // console.log(this.onChange)
    // <CalculateChange  />
  }

  calc() {
    let input = this.state.value
    const BillAndCent = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 50, 100]
    const Arr = this.state.Arr
    //   console.log("ss")
    //   console.log(Arr)
    let i
    console.log('thisisbill' + this.state.BillAndCoin)
    //loop through all the BIlls and coin
    for (i = 0; i < BillAndCent.length; i++) {
      if (input < BillAndCent[i]) {
        input = input - BillAndCent[i - 1]
        console.log('billandcent is' + BillAndCent[i - 1])
        Arr[i - 1] = Arr[i - 1] + 1
        console.log('inputt' + input)
        console.log('arr' + Arr[i - 1])
        console.log('thisisarr' + Arr)
        console.log('efc')

        if (input < 0) {
          input = input + BillAndCent[i - 1]
          console.log('fesfe')
          for (i = 0; i < Arr.length; i++) {
            console.log('Arr' + i + 'is' + Arr[i])
          }
          break
        }
        i = 0
      }
      if (input === BillAndCent[i] || i === 8) {
        input = input - BillAndCent[i]
        console.log('billandcent is' + BillAndCent[i])
        Arr[i] = Arr[i] + 1
        console.log('inputt' + input)
        console.log('arr' + Arr[i])
        console.log('efc')
        console.log('thisisarr' + Arr)
        if (input < 0) {
          input = input + BillAndCent[i]
          console.log('fesfe')
          for (i = 0; i < Arr.length; i++) {
            console.log('Arr' + i + 'is' + Arr[i])
          }
          break
        }
        i = 0
        console.log('thisisarr' + Arr)
      }

      if (input === 0) break
      {
        console.log('fefe')
        console.log('thisisarr' + Arr)
      }
    }

    this.setState({
      Arr: Arr,
    })
  }

  //  const   s = {
  //   textAlign : 'center'

  //  }

  render() {
    // const BAC = this.state.BillAndCoin.map(item => <Box key={item.id} item={item} />)
    // console.log('rgsss')
    // console.log(this.state.BillAndCoin.id)
    console.log('======')
    console.log(this.state.BillAndCoin)

    const BAC = Object.values(this.state.BillAndCoin).map((item, index) => (
      <Box name={item.Name} value={this.state.Arr[index]} />
    ))

    // const BAC = this.state.BillAndCoin.map((item, index) => (
    //   <Box name={item.Name} value={this.state.Arr[index]} />
    // ))
    // console.log('grgr' + this.state.BillAndCoin[0].Name)
    // return <div>{BAC}</div>
    console.log('render')
    console.log(this.state)
    return (
      <div>
        Input <input value={this.state.value} onChange={this.onChange} />
        <button onClick={() => this.calc(this)}>button</button>
        {BAC}
      </div>
    )
  }
}

export default App
