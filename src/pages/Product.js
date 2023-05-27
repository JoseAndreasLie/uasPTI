import React, { useEffect } from 'react';
import '../styles/Product.scss';
import Swiper from 'swiper';
import New from '../img/blackpaint.png';
import Background from '../img/blackPaint.avif';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();

    useEffect(() => {
        initSwiper();
    }, []);

    const initSwiper = () => {
        new Swiper('.mySwiper', {
            effect: 'fade',
            loop: true,
        });
    };

    return (
        <div className="product">
        <div className="mySwiper">
            <div className="main-wrapper swiper-wrapper">
            <div className="main swiper-slide" id="beach">
                <div className="left-side">
                <div className="main-wrapper">
                    <h3 className="main-header">TAC PAINT</h3>
                    <h1 className="main-title">Dark</h1>
                    <h2 className="main-subtitle">Rp 50.000</h2>
                </div>
                <div className="main-content">
                    <div className="main-content__title">
                    In 20 years, there could be more color in this universe.
                    </div>
                    <div className="main-content__subtitle">
                    Smaller part of us, Natural Paint is the latest innovation in the paint industry, entirely made from high-quality organic materials. Designed to bring forth environmentally-friendly and stunning colors, this paint bridges artistry and sustainability into one amazing product.
                    </div>
                    <div className="more-menu">
                    <button className="buy" onClick={() => navigate("/coming")}>Shop Now</button>
                    </div>
                </div>
                </div>
                <div className="center">
                <div className="right-side__img">
                    <img className="bottle-bg" src={Background} alt="" />
                    <img className="bottle-img" src={New} alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Product;
