import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            isSubmit: false,
            inputErr: false
        }
    }

    handleClick = (e) => {
        e.preventDefault()

        if (this.state.inputValue.includes("@")) {
            this.setState({
                isSubmit: true,
                inputErr: false
            })
        } else {
            this.setState({
                inputErr: true,
                isSubmit: false,
            })
        }
    }

    render() {
        return (
            <footer className="footer" id="kontakt">
                <div className="wrapper">
                    <div className="footer__info">
                        <div className="footer__info__col footer__info__col-1">
                            <h2 className="footer__info__col__title">Plan your meal</h2>
                            <p>Food Education the best investment in health.</p>
                        </div>
                        <div className="footer__info__col footer__info__col-2">
                            <h2 className="footer__info__col__title">Contact</h2>
                            <ul className="footer__info__col__list">
                                <li>+44 7567384924</li>
                                <li>Planyourfood@gmail.com</li>
                                <li>SW00 1SR London </li>
                            </ul>
                        </div>
                        <div className="footer__info__col footer__info__col-3">
                            <h2 className="footer__info__col__title">Sign up for free newsletter</h2>
                            <form className="footer__info__col__form" onSubmit={this.handleClick}>
                                <input className="footer__info__col__form__input" value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })}></input>
                                <button className="footer__info__col__form__btn">Sign</button>
                            </form>
                            {this.state.isSubmit && <p className="form-subscription__info">You have subscribed to newsletter!</p>}
                            {this.state.inputErr && <p className="form-subscription__error">Email should include "@"</p>}
                            <div className="footer__info__col__icons">
                                <i className="fab fa-facebook-square fa-2x"></i>
                                <i className="fab fa-twitter-square fa-2x"></i>
                                <i className="fab fa-instagram fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__rights">
                    <p>Copyright <span>Planyourmeal.co.uk</span></p>
                </div>
            </footer>
        )
    }
}