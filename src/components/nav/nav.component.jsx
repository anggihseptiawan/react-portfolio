import React from 'react';
import './nav.style.scss';
import { Link } from 'react-router-dom';

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
            <div className="navbar">
                <div className="brand">
                    <span>Me.</span>
                </div>
                <div className={this.state.toggleHidden === true ? "toggle" : "toggle active"} onClick={this.handleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {
                    this.state.toggleHidden === true ?
                        null :
                        <div className="link">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/project">Project</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                }
            </div>
        )

    }

}

export default Nav;
