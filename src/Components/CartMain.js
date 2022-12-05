import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

const CartMain = ({ imgSrc, title, hearts }) => {
    return (
        <div className="card_main">
            <img src={imgSrc} alt="" />

            <div className="card_main_name">
                <h2>{title}</h2>

                <div className="card_icon">
                    <i>
                        <BsHeartFill /> <span>{hearts}</span>
                    </i>
                </div>
            </div>

            <div className="stats">
                <p>
                    Current Bid <span>1.2 ETH</span>
                </p>
                <p>
                    Ending in <span>1d:12h:10m</span>
                </p>
            </div>

            <div className="card_button">
                <a href="/#" className="button1">
                    Place a bid
                </a>
                <a href="/#" className="button2">
                    History
                </a>
            </div>
        </div>
    );
};

export default CartMain;
