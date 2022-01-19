import React, { Component } from "react";

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>New tasks</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.showTodo() }
                </tbody>
            </table>
        )
    }
}




export default Table;