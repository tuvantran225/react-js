import {observable, action} from 'mobx';

 class EmployeeStore {

    @observable employees = [];

    @action setEmployees(employees) {
        this.employees = employees;
    }

}

export default new EmployeeStore();