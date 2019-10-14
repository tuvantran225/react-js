import React, {Component} from 'react';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label || "Select",
            divClass: props.divClass || "col-md-6 mb-3",
            selectClass: props.inputClass || "custom-select d-block w-100",
            id: props.id || "",
            name: props.name || "",
            error: props.error || ""
        };
    }

    render() {
        const {label, divClass, selectClass, id, name, error} = this.state;

        return (
            <div className={divClass}>
                <label htmlFor={id}>
                    {label}
                </label>
                <select 
                    className={selectClass}
                    id={id}
                    name={name}>
                    <option>Choose...</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
                <div className="invalid-feedback">{error}</div>
            </div>
        );
    }
}

export default Select;