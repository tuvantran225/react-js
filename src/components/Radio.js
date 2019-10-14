import React, {Component} from 'react';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label || "Radio",
            divClass: props.divClass || "custom-control custom-radio",
            inputClass: props.inputClass || "custom-control-input",
            labelClass: props.inputClass || "custom-control-label",
            id: props.id,
            name: props.name,
            checked: props.checked
        };
    }

    render() {
        const {label, divClass, inputClass, labelClass, id, name, checked} = this.state;

        return (
            <div className={divClass}>
                <input 
                    type="radio"
                    className={inputClass}
                    id={id}
                    name={name}
                    checked={checked}
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

export default Radio;