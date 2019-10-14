import React, {Component} from 'react';
import EmployeeForm from './components/EmployeeForm';

class App extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    // fetch('http://localhost:8080/employees')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ employees: data.data })
    // })
    // .catch(console.log)
  }

  render() {
    return (
      <div>
        <EmployeeForm/>
        {/* <Employee employees={this.state.employees} /> */}
      </div>
    );
  }
}

export default App;
