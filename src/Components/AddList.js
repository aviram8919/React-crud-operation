import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class AddList
**/

class AddList extends Component {
    state = {
        ...this.returnStateObject()
    }

 returnStateObject() {
    if (this.props.currentIndex == -1)
        return {
            EmployeeId: '',
            EmployeeName: '',
            EmployeeAge: '',
            EmployeeSalary: ''
        }
    else
        return this.props.list[this.props.currentIndex]
}

componentDidUpdate(prevProps) {
    if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
        this.setState({ ...this.returnStateObject() })
        console.log(prevProps, this.props)
    }
}

 handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddOrEdit(this.state)
}



 render() {
  return(
  
    <form onSubmit={this.handleSubmit} autoComplete="off">
      <input name="EmployeeId" placeholder="Employee Id" onChange={this.handleInputChange} value={this.state.EmployeeId} /><br />
      < input name="EmployeeName" placeholder="Employee Name" onChange={this.handleInputChange} value={this.state.EmployeeName} /><br />
      < input name="EmployeeAge" placeholder="Employee Age" onChange={this.handleInputChange} value={this.state.EmployeeAge} /><br />
      < input name="EmployeeSalary" placeholder="Employee Salary" onChange={this.handleInputChange} value={this.state.EmployeeSalary} /><br />
      <button type="submit">Submit</button>
    </form>
    )
   }
 }


AddList.propTypes = {}
export default AddList