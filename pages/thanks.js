// pages/thanks.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Thanks = () => {
    return (
        <div className="thanks-container">
            <h1>Thank You!</h1>
            <p>Your support is greatly appreciated.</p>
            <p>
                We extend our heartfelt gratitude for your generous contribution. Your support is instrumental in
                helping us achieve our mission and make a positive impact. Together, we are making a difference in
                the lives of many, and we are thankful to have you as a part of our community.
            </p>
            <div className="image-container">
                {/* Displaying an image for illustration */}
                <Image src="/images/tnx.jpg" alt="Thanks Image" width={300} height={200} />
            </div>
            <div className="button-container">
                <Link href="/" >
                    <p className="returnbtn">Return Home</p>
                </Link>
            </div>
            <style jsx>{`
                .thanks-container {
                    text-align: center;
                    height: 80vh;
                    margin-top: 60px;
                }

                h1 {
                    color: #333;
                    font-size: 2rem;
                    margin-bottom: 10px;
                }

                p {
                    color: #666;
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                }

                .image-container {
                    max-width: 300px;
                    margin: 20px auto;
                }

                .button-container {
                    margin-top: 20px;
                }

                .returnbtn{
                    display: inline-block;
                    background-color: crimson;
                    color: #fff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s, color 0.3s;
                    cursor: pointer;
                }

                .returnbtn:hover {
                    background-color: #dc143ce6;
                }
            `}</style>
        </div>
    );
};

export default Thanks;
