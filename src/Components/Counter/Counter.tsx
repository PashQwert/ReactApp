import React from 'react';
import { useState } from 'react';
import './Counter.css';
/*
const TextEdit = React.createElement(
    'input',
    {className: 'textEdit', defaultValue: 12}
)

//const [count, setCount] = useState(0);

function handleClick (value:number) {
    console.log(value);
    //setCount(count + 1);
}

const ButtonUp = React.createElement(
    'button',
    {className: 'button', onClick:()=>handleClick(1)},
    'Up'
)

const ButtonDown = React.createElement(
    'button',
    {className: 'button', onClick:()=>handleClick(-1)},
    'Down'
)

const Block = React.createElement(
    'div',
    {className: 'block'},
    TextEdit, ButtonUp, ButtonDown
)
*/
class Counter extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = { count: props.count };
    }
    
    handleAdd = (value: number) => {
        this.setState({ count: this.state.count + value });
    }

    render() {
        return (
            <div>
                {
                    React.createElement(
                        'p',
                        {className: 'label'},
                        `Count: ${this.state.count}`
                    )
                }
                {
                    React.createElement(
                        'button',
                        {className: 'button', onClick:() => this.handleAdd(+1)},
                        'Increment'
                    )
                }
                {
                    React.createElement(
                        'button',
                        {className: 'button', onClick:() => this.handleAdd(-1)},
                        'Decriment'
                    )
                }
            </div>
          )
    }
}

export default Counter;