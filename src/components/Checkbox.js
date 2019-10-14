import React, {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label || "Checkbox",
            divClass: props.divClass || "custom-control custom-checkbox",
            inputClass: props.inputClass || "custom-control-input",
            labelClass: props.inputClass || "custom-control-label",
            id: props.id,
            name: props.name,
            checked: props.checked
        };
    }

    render() {
        const {label, divClass, inputClass, labelClass, id, name} = this.state;

        return (
            <div className={divClass}>
                <input 
                    type="checkbox"
                    className={inputClass}
                    id={id}
                    name={name}
                />
                <label 
                    htmlFor={id}
                    className={labelClass}>
                    {label}
                </label>
            </div>
        );
    }
}

export default Checkbox;