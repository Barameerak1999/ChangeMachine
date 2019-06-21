import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalculateChange from './CalculateChange';
import NumberField from './NumberField';
import Box from './Box';
class App extends React.Component{
  constructor(){
     super();
     this.state = {
       value: ''
        
      
      
      
      };
     this.onChange = this.onChange.bind(this)

  }
  
  onChange(e){
     const re = /^[0-9\b]+$/;
     if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({value: e.target.value})
        console.log("fefe")
        console.log(this.state.value)
        // console.log(this.onChange)
        // <CalculateChange  />
     }
  }
     calc()
     {
      let input  = this.state.value
      const BillAndCent = [0.01,0.05,0.10,0.25,1,5,10,20,50,100]
      let Arr = [0,0,0,0,0,0,0,0,0,0]
      
    //   console.log("ss")
    //   console.log(Arr)
      let i
      for(i=0;i<BillAndCent.length;i++)
      {
            if(input <BillAndCent[i])
                {      
                    input = input -  BillAndCent[i-1]
                    console.log("billandcent is"+BillAndCent[i-1])  
                    Arr[i-1] = Arr[i-1] + 1  
                    console.log("inputt"+input)
                    console.log("arr"+Arr[i-1])
                    console.log("efc")
                    
                    if(input<0)
                    {  
                         input = input + BillAndCent[i-1]  
                         console.log("fesfe")
                         for(i=0;i<Arr.length;i++)
                         {
                                 console.log("Arr"+i+"is"+Arr[i])
                 
                         }
                         break;
                     }
                     i =0; 
    
                }
                if(input===BillAndCent[i] || i === 8)
                {
                    input = input -  BillAndCent[i]
                    console.log("billandcent is"+BillAndCent[i])  
                    Arr[i] = Arr[i] + 1  
                    console.log("inputt"+input)
                    console.log("arr"+Arr[i])
                    console.log("efc")
                    
                if(input<0)
                {  
                 input = input + BillAndCent[i]  
                 console.log("fesfe")
                 for(i=0;i<Arr.length;i++)
                 {
                         console.log("Arr"+i+"is"+Arr[i])
         
                 }
                 break;
                 }
                 i =0; 
                    
                }
                    
        if(input===0)
         
            break;  
            
          console.log('fefe')  
          console.log(Arr)
          
      }    

     }   
     
     
    //  const   s = {
    //   textAlign : 'center'
      
    //  }

  render(){
    return (<div>Input  <input value={this.state.value} onChange={this.onChange}/><button onClick={() => this.calc(this)}>button</button><Box/></div>

    
    )
  }
}

export default App;
