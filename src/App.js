import React, {Component} from 'react';
import EmployeeForm from './components/EmployeeForm';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class App extends Component {
  state = {
    employees: []
  }

  render() {
    const columns = [
      {
          Header: "Company",
          accessor: "company"
      },
      {
          Header: "First Name",
          accessor: "firstName"
      },
      {
          Header: "Last Name",
          accessor: "lastName"
      },
      {
          Header: "Email Address",
          accessor: "email"
      },
      {
          Header: "Job Title",
          accessor: "job"
      },
      {
          Header: "Business Phone",
          accessor: "businessPhone"
      },
      {
          Header: "Home Phone",
          accessor: "homePhone"
      },
      {
          Header: "Mobile Phone",
          accessor: "mobilePhone"
      },
      {
          Header: "Fax Number",
          accessor: "faxNumber"
      },
      {
          Header: "Address",
          accessor: "address"
      },
      {
          Header: "Address",
          accessor: "address"
      },
      {
          Header: "City",
          accessor: "city"
      },
      {
          Header: "State Province",
          accessor: "state"
      },
      {
          Header: "Zip Postal Code",
          accessor: "zipCode"
      },
      {
          Header: "Country Region",
          accessor: "country"
      },
      {
          Header: "Web Page",
          accessor: "webPage"
      },
      {
          Header: "Notes",
          accessor: "notes"
      }
    ];

    return (
      <div className="container">
        <EmployeeForm/>
        <ReactTable
          data={this.props.employees}
          columns={columns}
        />
      </div>
    );
  }
}

export default App;
