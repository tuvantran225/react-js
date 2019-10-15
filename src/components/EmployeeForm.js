import React, {Component} from 'react';
import axios from 'axios';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Textarea from './Textarea';

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            employees: []
        }
    }

    handleSubmitForm = (event) => {
        const params = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        axios.get("http://localhost:8080/employees", {params})
            .then(res => {
                const employees = res.data.data;
                this.setState({employees: employees});
            });
        event.preventDefault();
    }

    handleChangeFirstName = (event) => {
        this.setState({firstName: event.target.value});
    }

    handleChangeLastName = (event) => {
        this.setState({lastName: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <h4 className="mb-3">Billing address</h4>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="first-name">First Name</label>
                        <Input
                            type="text"
                            id="first-name"
                            name="firstName"
                            onChange={this.handleChangeFirstName}
                        />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="last-name">Last Name</label>
                        <Input
                            type="text"
                            id="last-name"
                            name="lastName"
                            onChange={this.handleChangeLastName}
                        />
                        <div className="invalid-feedback"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                        />
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country">Country</label>
                        <Select name="country" />
                        <div className="invalid-feedback"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="comment">Comment</label>
                        <Textarea rows="5" id="comment" name="comment" />
                    </div>
                </div>
                <hr className="mb-4"></hr>
                <div className="custom-control custom-checkbox">
                    <Checkbox id="same-address" name="same-address" checked />
                    <label htmlFor="same-address" className="custom-control-label">Shipping address is the same as my billing address</label>
                    <div className="invalid-feedback"></div>
                </div>
                <div className="custom-control custom-checkbox">
                    <Checkbox id="save-info" name="save-info" />
                    <label htmlFor="save-info" className="custom-control-label">Save this information for next time</label>
                    <div className="invalid-feedback"></div>
                </div>
                <hr className="mb-4"></hr>
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                        <Radio id="credit" name="paymentMethod" />
                        <label htmlFor="credit" className="custom-control-label">Credit card</label>
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="custom-control custom-radio">
                        <Radio id="debit" name="paymentMethod" />
                        <label htmlFor="debit" className="custom-control-label">Debit card</label>
                        <div className="invalid-feedback"></div>
                    </div>
                    <div className="custom-control custom-radio">
                        <Radio id="paypal" name="paymentMethod" />
                        <label htmlFor="paypal" className="custom-control-label">Paypal</label>
                        <div className="invalid-feedback"></div>
                    </div>
                </div>
                <hr className="mb-4"></hr>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Search</button>
            </form>
        );
    }
}

export default EmployeeForm;