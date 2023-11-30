// pages/about.js
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/About.module.css'; // Adjust the path based on your project structure

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Leefy Programming</h1>
      <p className={styles.description}>
        Leefy Programming is dedicated to providing a platform for individuals to learn and enhance their programming skills.
        Whether you're a beginner looking to start your coding journey or an experienced developer seeking to expand your knowledge,
        Leefy Programming offers a variety of free resources, tutorials, and courses to meet your learning needs.
      </p>

      <div className={styles.highlights}>
        <h2>Our Services</h2>
        <ul>
          <li>Free coding resources for beginners and experienced developers</li>
          <li>Interactive coding challenges to sharpen your skills</li>
          <li>Community forums to connect with fellow programmers</li>
          <li>Regularly updated courses on various programming topics</li>
        </ul>
      </div>

      <div className={styles.whatYouGet}>
        <h2>What You Get</h2>
        <ul>
          <li>Access to a diverse range of programming courses</li>
          <li>Engage in coding challenges to apply your knowledge</li>
          <li>Join a supportive community passionate about coding</li>
          <li>Stay updated with the latest trends and technologies</li>
        </ul>
      </div>

      <div className={styles.callToAction}>
        <p>Ready to start your coding journey with Leefy Programming?</p>
        {/* Add a link or button to the signup page */}
        <Link href="/signup">
          <p className={styles.ctaButton}>Sign Up Now</p>
        </Link>
      </div>

      {/* Link back to the home page */}
      <Link href="/">
        <p className={styles.link}>Go to Home</p>
      </Link>
    </div>
  );
};

export default About;
