import React from 'react'
import myContext from '../../context';
export default function Index() {
    // let value = this.context
    return (
        <div>
            <myContext.Consumer>
                {value => value.some}
            </myContext.Consumer>
        </div>
    )
}