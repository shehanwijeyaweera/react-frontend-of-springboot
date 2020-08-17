import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All Rights Resered 2020 <a href="apiit.lk">Apiit.lk</a></span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;