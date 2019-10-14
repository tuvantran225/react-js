import React, {Component} from 'react';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ''
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeValueText = this.handleChangeValueText.bind(this);
    }

    handleSubmitForm(event) {
        alert("A name was submitted: " + this.state.name);
        event.preventDefault();
    }

    handleChangeFirstName(event) {
        fetch("http://localhost:8080/employees?firstName=" + this.state.firstName)
        .then(res => res.json())
        .then((data) => {
            return data.data;
        })
    }

    handleChangeValueText(event) {
        const value = event.target.value;
        this.setState({value, error: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <div className="container">
                    <h4 className="mb-3">Billing address</h4>
                    <div className="row">
                        <Input
                            type="text"
                            label="First Name"
                            id="first-name"
                            name="firstName"
                        />
                        <Input
                            type="text"
                            label="Last Name"
                            id="last-name"
                            name="lastName"
                        />
                    </div>
                    <div className="row">
                        <Input
                            type="email"
                            label="Email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                        />
                        <Select />
                    </div>
                    <hr className="mb-4"></hr>
                    <Checkbox
                        id="same-address"
                        label="Shipping address is the same as my billing address"
                    />
                    <Checkbox
                        id="save-info"
                        label="Save this information for next time"
                    />
                    <hr className="mb-4"></hr>
                    <h4 className="mb-3">Payment</h4>
                    <div className="d-block my-3">
                        <Radio
                            label="Credit card"
                            id="credit"
                            name="paymentMethod"
                        />
                        <Radio
                            label="Debit card"
                            id="debit"
                            name="paymentMethod"
                        />
                        <Radio
                            label="Paypal"
                            id="paypal"
                            name="paymentMethod"
                        />
                    </div>
                    <hr className="mb-4"></hr>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                </div>
                
            </form>
        );
    }
}

export default EmployeeForm;