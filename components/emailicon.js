// WhatsAppIcon.js
import React from 'react';
import Image from 'next/image';

const Emailicon = () => {
    return (
        <>
            <style jsx global>{`
                .Emailicon {
                    position: sticky;
                    justify-content: right;
                    bottom: 20px;
                    right: 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
            `}</style>
            <div className='Emailicon'>
                <Image
                    src="/images/email.png"
                    alt="email"
                    width={60}
                    height={60}
                />
            </div>
        </>
    );
};

export default Emailicon;
