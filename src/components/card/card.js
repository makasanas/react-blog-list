import React, { Component } from 'react';
import './card.scss';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { cardTitle, cardType } = this.props;
        return (
            <div className={cardType == "unread" ? "card-content active" : "card-content"}>
                <div className="card-heading">
                    <h4>{cardTitle}</h4>
                    <div className="dots">
                        <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.73">
                                <g id="dots" fill="#D0D7DD">
                                    <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval" cx="11.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval" cx="20.5" cy="2.5" r="2.5"></circle>
                                </g>
                            </g>
                        </svg>
                        <div className="mark-popup">
                            <p>Mark All as Read</p>
                        </div>
                    </div>
                </div>
                <div className="number">
                    <p><span>23</span>This day</p>
                </div>

            </div>
        )
    }
}

export default Card