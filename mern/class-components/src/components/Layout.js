import React, { Component } from "react";

class Layout extends Component {

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                {this.props.children}
                <h3>{this.props.footer}</h3>
            </div>
        )
    }
}

export default Layout;