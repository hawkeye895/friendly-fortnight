import React, { Component, Fragment } from 'react'
import Words from './Words'
import Toggle from '../../Layout/Toggle/Toggle'
import Card from '../Cards/Card'



export class WordsDashboard extends Component {
    render() {
        return (
            <Fragment >
                <div className="container-fluid">
                    <Card />
                </div>
            </Fragment>
        )
    }
}

export default WordsDashboard;
