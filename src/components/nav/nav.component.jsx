import React from 'react';
import './nav.style.scss';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Nav extends React.Component {

    constructor() {
        super();

        this.state = {
            toggleHidden: true
        }
    }

    handleNav = () => {
        this.setState({ toggleHidden: !this.state.toggleHidden })
    }

    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <Fade delay="1500">
                        <div className="brand">
                            <span>Me.</span>
                        </div>
                        <div className={this.state.toggleHidden === true ? "toggle" : "toggle active"} onClick={this.handleNav} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Fade>

                    {
                        this.state.toggleHidden === true ?
                            null :
                            <Zoom>
                                <div className="link">
                                    <Fade bottom delay="500">
                                        <Link to="/" onClick={this.handleNav} >HOME</Link>
                                    </Fade>
                                    <Fade bottom delay="800">
                                        <Link to="/about" onClick={this.handleNav} >ABOUT</Link>
                                    </Fade>
                                    <Fade bottom delay="1000">
                                        <Link to="/contact" onClick={this.handleNav} >CONTACT</Link>
                                    </Fade>
                                </div>
                            </Zoom>
                    }
                </div>
            </div>
        )

    }

}

export default Nav;
