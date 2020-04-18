import React from 'react';
import './nav.style.scss';
import icon from '../../assets/images/hamburger-icon.png';
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
                <div className="toggle" onClick={this.handleNav}>
                    <img src={icon} alt="icon" />
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
