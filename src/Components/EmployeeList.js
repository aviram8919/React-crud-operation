import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddList from './AddList'

/**
* @author
* @class EmployeeList
**/

class EmployeeList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('employees') == null)
            localStorage.setItem('employees', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('employees'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('employees', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('employees', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }
 render() {
  return(
   <div>
       <AddList onAddOrEdit={this.onAddOrEdit} 
       currentIndex={this.state.currentIndex}
       list={this.state.list} />
       <hr />
       <table>
                <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.EmployeeId}</td>
                                <td>{item.EmployeeName}</td>
                                <td>{item.EmployeeAge}</td>
                                <td>{item.EmployeeSalary}</td>
                                <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
   </div>
    )
   }
 }


EmployeeList.propTypes = {}
export default EmployeeList