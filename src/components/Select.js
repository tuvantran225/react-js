import React, {Component} from 'react';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.className || "custom-select d-block w-100",
            id: props.id || "",
            name: props.name || ""
        };
    }

    handleChangeValue = (event) => {
        this.props.onChange(event);
    }

    render() {
        const {className, id, name} = this.state;

        return (
            <select 
                className={className}
                id={id}
                name={name}
                onChange={this.handleChangeValue}>
                <option>Choose...</option>
                <option>Vietnam</option>
                <option>Thailand</option>
                <option>China</option>
            </select>
        );
    }
}

export default Select;