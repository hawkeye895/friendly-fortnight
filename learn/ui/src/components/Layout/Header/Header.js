import React, { Component } from 'react'
import sty from './myName.module.css'
import Tilt from 'react-tilt'




export class Header extends Component {
    render() {
        return (
            <div className={sty.header}>
                {/* <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }}>
                    <img src={require('./image.png')} alt="Logo" />
                    </Tilt> */}

                {/* <div className="row">
                    <div className="col">
                        <img src={require('./image.png')} alt="Logo" />
                    </div>
                    <div className="col">
                        <h2>Words</h2>
                    </div>
                </div> */}
                <Tilt><img src={require('./image.png')} alt="Logo" /></Tilt>


                <h2>Words</h2>
               
            </div>
        )
    }
}

export default Header
