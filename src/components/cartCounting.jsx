import React, { Component } from 'react';


class CartCounting extends Component {
    state = {  } 
    componentDidUpdate(prevProps, prevState){
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counting.value !== this.props.counting.value){

        }
    }

    componentWillUnmount(){
        console.log("Counting - Unmount")
    }
    render() { 
        console.log("counting - Rendered");
        return (
            <React.Fragment> 

            {this.props.children}
        <main className='row'>

        <div className='col-1'>
        <span className={this.warn()}>{this.stateformat()}</span>
        </div>
        <div className='col'>

       <button 
        onClick={() => this.props.onAdding(this.props.counting)} 
        className='btn btn-secondary btn-sm '>
            +
        </button>
        <button
        onClick={() => this.props.onRemoving(this.props.counting)}
        className='btn btn-secondary btn-sm m-2'
        disabled={this.props.counting.value === 0 ? "disabled" : ""}>
            -
        </button>
        <button 
        onClick={() => this.props.onDeleting(this.props.counting.id)}
        className='btn btn-danger btn-sm'
        >
            X
        </button>
        </div>
            
        </main>
        
    </React.Fragment>
        );
    }
    warn() {
        let classes = "badge m-2 badge-";
        classes += this.props.counting.value === 0 ? "warning" : "primary";
        return classes;
    }

    stateformat (){
        const {value} = this.props.counting
        return value === 0 ? "zero" : value;
    }
}
 
export default CartCounting;