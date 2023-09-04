import React from 'react';
import './Counter.css';

interface SearchFormProps {
    count: number;
}
interface SearchFormState {
    count: number;
}

class Counter extends React.Component<SearchFormProps, SearchFormState>{
    constructor(props: SearchFormProps) {
        super(props);
        this.state = { count: props.count };
    }
    
    handleAdd(value: number) {
        this.setState({ count: this.state.count + value });
    }

    render() {
        return React.createElement(
            'div',
            {className: 'counter'},
            React.createElement(
                'p',
                {className: 'label'},
                `Count: ${this.state.count}`
            ),
            React.createElement(
                'button',
                {className: 'button', onClick:() => this.handleAdd(+1)},
                'Increment'
            ),
            React.createElement(
                'button',
                {className: 'button', onClick:() => this.handleAdd(-1)},
                'Decriment'
            )
        )
    }
}

export default Counter;