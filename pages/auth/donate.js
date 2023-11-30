// pages/donate.js
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/Donate.module.css';

const Donate = () => {
  const router = useRouter();

  const handleDonateClick = () => {
    // Perform any donation-related logic here

    // Redirect to the thank you page
    router.push('/thanks');
  };

  return (
    <div className={styles.donateContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Support Our Cause</h1>
          <p className={styles.description}>Your contribution makes a difference. Thank you for supporting us!</p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.imageContainer}>
            {/* Hands Giving Money Image */}
            <div className={styles.imageWrapper}>
              <Image src="/images/hands.png" alt="Hands Giving Money" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.donationForm}>
        <label className={styles.label} htmlFor="amount">Amount:</label>
        <input className={styles.input} type="number" id="amount" name="amount" min="1" placeholder="Enter amount" />

        <label className={styles.label} htmlFor="name">Full Name:</label>
        <input className={styles.input} type="text" id="name" name="name" placeholder="Your Full Name" />

        <label className={styles.label} htmlFor="email">Email:</label>
        <input className={styles.input} type="email" id="email" name="email" placeholder="Your Email" />

        <button className={styles.donateButton} onClick={handleDonateClick}>Donate Now</button>
      </div>
    </div>
  );
};

export default Donate;
