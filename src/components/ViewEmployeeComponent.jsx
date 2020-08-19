import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    cancel() {
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details</h3>
                    <div className="row">
                        <label>Employee First Name:</label>
                        <div style={{ marginLeft: "10px" }}>{this.state.employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label>Employee Last Name:</label>
                        <div style={{ marginLeft: "10px" }}>{this.state.employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label>Employee Email ID:</label>
                        <div style={{ marginLeft: "10px" }}>{this.state.employee.emailId}</div>
                    </div>
                    <div className="row">
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;