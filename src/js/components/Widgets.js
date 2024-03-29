import React, { Component } from 'react';
import '../../scss/_widgets.scss';

class Widgets extends Component {
    state = {
        data: [],
        name: [],
        info: true,
        warning: true,
        success: true,
    }

    deleteInfoMessage = () => {
        this.setState({
            info: false
        })
    };

    deleteWarningMessage = () => {
        this.setState({
            warning: false
        })
    };

    deleteSuccessMessage = () => {
        this.setState({
            success: false
        })
    };

    render() {
        return (
            <div className="widget__container" >
                {
                    this.state.info && <div className="info__widget ">
                        <div><i className="fas fa-info-circle" style={{ fontSize: "40px", marginLeft: "10px" }}></i></div>
                        <p>You already have {this.props.length} recipes, nice!</p>
                        <button onClick={() => this.deleteInfoMessage()}><i className="fas fa-times"></i></button>
                    </div>
                }
                {this.state.warning && <div className="warning__widget ">
                    <div><i className="fa fa-exclamation-circle" style={{ fontSize: "40px", marginLeft: "10px" }}></i></div>
                    <p>Remember to add a plan!</p>
                    <button onClick={() => this.deleteWarningMessage()}><i className="fas fa-times"></i></button>
                </div>
                }
                {
                    this.state.success && <div className="success__widget ">
                        <div><i className="fas fa-check-circle" style={{ fontSize: "40px", marginLeft: "10px" }}></i></div>
                        <p>It's great that you are there! Happy planning and enjoy it! {":)"}</p>
                        <button onClick={() => this.deleteSuccessMessage()}><i className="fas fa-times"></i></button>
                    </div>
                }
            </div >
        );
    }
}
export default Widgets;