import React, {Component} from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.className || "custom-control-input",
            id: props.id,
            name: props.name,
            checked: props.checked
        };
    }

    render() {
        const {className, id, name, checked} = this.state;

        return (
            <input 
                type="radio"
                className={className}
                id={id}
                name={name}
                checked={checked}
            />
        );
    }
}

export default Radio;