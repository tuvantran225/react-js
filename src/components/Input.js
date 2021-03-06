import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type || "text",
            className: props.className || "form-control",
            id: props.id,
            name: props.name,
            value: props.value,
            placeholder: props.placeholder
        };
    }

    handleChangeValue = (event) => {
        this.props.onChange(event);
    }

    render() {
        const {type, className, id, name, value, placeholder} = this.state;
        
        return (
            <input 
                type={type}
                className={className}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={this.handleChangeValue}
            />
        );
    }
}

export default Input;