import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CallToAction extends Component {
    state = {}
    render() {
        return (
            <section className="call-to-action__container">
                <div className="wrapper">
                    <div className="call-to-action__container__col call-to-action__container__col-1">
                        <h3>Start planning your food today</h3>
                        <p>FOR US, HEALTHY EATING IS AN EVERYDAY PART OF THE LIFESTYLE.</p>
                    </div>
                    <div className="call-to-action__container__col call-to-action__container__col-2">
                        <Link to="/app">Start right now</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default CallToAction;