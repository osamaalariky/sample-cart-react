import logo from './logo.svg';
import React, { Component } from 'react';

import './App.css';
import Cart from './components/cart';
import CountingNavBar from './components/countingNavBar';

class App extends Component{
  
  state = { 
    cart: [
        {id: 0, value: 6, name: "PS5", price: "$500"},
        {id: 1, value: 0, name: "Iphone 11 Pro", price: "$1100"},
        {id: 2, value: 0, name: "Macbook Air", price: "$1700"},
        {id: 3, value: 0, name: "Apple Watch", price: "$400"},
        {id: 4, value: 0, name: "Ipad Pro", price: "$1300"},
        
    ] 
  }
  
  constructor(){
    super();
    console.log("App - Constructor");
  }
  
  componentDidMount(){
    console.log("App - Mounted");
  }

  handleAdding = counting => {
      const cart = [...this.state.cart];
      const index = cart.indexOf(counting);
      cart[index] = {...counting};
      cart[index].value++;
    
      this.setState({cart})
  }

  handleRemoving = counting => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(counting);
    cart[index] = {...counting};
    cart[index].value--;
    this.setState({cart})
}
  handleRestart = () =>{
      const cart = this.state.cart.map(i => {
          i.value = 0;
          return i;
      });
      this.setState({cart})
  }
  handleDeleting = countId => {
   const cart = this.state.cart.filter(f => f.id !== countId);
   this.setState({cart}) ;
  };

  render(){
    console.log("App - Rendered");
    return (
      <React.Fragment>
       <CountingNavBar totalCounters={this.state.cart.filter(i => i.value > 0).length}/>
     <main className='container'>
       <Cart 
       cart={this.state.cart}
       onRestarting={this.handleRestart}
       onDeleting={this.handleDeleting} 
       onRemoving={this.handleRemoving}
       onAdding={this.handleAdding}

       />
     </main>
  
      </React.Fragment>
    );
  }

  }

export default App;
