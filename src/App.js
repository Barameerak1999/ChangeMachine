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
    let Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

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
    this.state.BillAndCoin[0].Number = Arr[0]
    this.state.BillAndCoin[1].Number = Arr[1]
    this.state.BillAndCoin[2].Number = Arr[2]
    this.state.BillAndCoin[3].Number = Arr[3]
    this.state.BillAndCoin[4].Number = Arr[4]
    this.state.BillAndCoin[5].Number = Arr[5]
    this.state.BillAndCoin[6].Number = Arr[6]
    this.state.BillAndCoin[7].Number = Arr[7]
    this.state.BillAndCoin[8].Number = Arr[8]
    this.state.BillAndCoin[9].Number = Arr[9]
    console.log('sss' + this.state.BillAndCoin[0].Number)
    console.log('sss' + this.state.BillAndCoin[1].Number)
    console.log('sss' + this.state.BillAndCoin[2].Number)
    console.log('sss' + this.state.BillAndCoin[3].Number)
    console.log('sss' + this.state.BillAndCoin[4].Number)
    console.log('sss' + this.state.BillAndCoin[5].Number)
    console.log('sss' + this.state.BillAndCoin[6].Number)
    console.log('sss' + this.state.BillAndCoin[7].Number)
    console.log('sss' + this.state.BillAndCoin[8].Number)
    console.log('sss' + this.state.BillAndCoin[9].Number)
  }

  //  const   s = {
  //   textAlign : 'center'

  //  }

  render() {
    const BAC = this.state.BillAndCoin.map(item => <Box key={item.id} item={item} />)
    // console.log('grgr' + this.state.BillAndCoin[0].Name)
    // return <div>{BAC}</div>
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
