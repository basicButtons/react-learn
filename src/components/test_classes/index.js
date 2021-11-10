import React, { Component } from 'react'
import myContext from '../../context'

export default class Index extends Component {
    render() {
        let value = this.context
        console.log(value)
        return (
            <div>
                12312
            </div>
        )
    }
}
Index.contextType = myContext;