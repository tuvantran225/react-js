import React, {Component} from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.className || "form-control",
            rows: props.rows,
            id: props.id,
            name: props.name,
            value: props.value,
            placeholder: props.placeholder
        };
    }

    handleChangeValue(event) {
        this.props.onChange(event);
    }

    render() {
        const {className, rows, id, name, value, placeholder} = this.state;
        
        return (
            <textarea 
                className={className}
                rows={rows}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={this.handleChangeValue.bind(this)}
            />
        );
    }
}

export default Textarea;