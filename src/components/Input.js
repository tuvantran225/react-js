import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type || "text",
            label: props.label || "Input",
            divClass: props.divClass || "col-md-6 mb-3",
            inputClass: props.inputClass || "form-control",
            id: props.id,
            name: props.name,
            value: props.value,
            placeholder: props.placeholder,
            error: props.error
        };

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChangeValue(event) {
        const value = event.target.value;
        this.setState({value, error: ""});
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            this.setState({value: this.props.predicted});
        }
    }

    render() {
        const {type, label, divClass, inputClass, id, name, value, placeholder, error} = this.state;
        
        return (
            <div className={divClass}>
                <label htmlFor={id}>
                    {label}
                </label>
                <input 
                    type={type}
                    className={inputClass}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={this.handleChangeValue}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="invalid-feedback">{error}</div>
            </div>
        );
    }
}

export default Input;