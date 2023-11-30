// Contact.js
import React, { useState } from 'react';
import styles from '@/styles/Contact.module.css'; // Import the CSS module
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    desc: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch('http://localhost:3000/api/postContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert('Thanks for contacting us');
        setFormData({
          name: '',
          email: '',
          phone: '',
          desc: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.fullContainer}>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className={styles['contact-form']}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles['form-label']}>Your Name</label>
            <input type="text" value={formData.name} onChange={handleChange} className={styles['form-control']} id="name" name="name" placeholder="Note name should not have '-' in them " />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles['form-label']}>Your Email Address</label>
            <input type="email" value={formData.email} onChange={handleChange} className={styles['form-control']} name="email" id="email" placeholder="xyz.123@example.com" />
            <div className={styles['form-text']}>We'll never share your email with anyone else.</div>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles['form-label']}>Your Phone Number (Optional)</label>
            <input type="text" value={formData.phone} onChange={handleChange} className={styles['form-control']} name="phone" id="phone" placeholder="+(country code)xxx-xxx-xxx" />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="desc" className={styles['form-label']}>Elaborate Your Concern</label>
            <textarea
              value={formData.desc}
              onChange={handleChange}
              className={`${styles['form-control']} ${styles['textArea']}`}
              placeholder="Write your concern here (up to 200 words)"
              name="desc"
              id="desc"
            />
          </div>
          <button type="submit" className={styles['btn-primary']}>Submit</button>
        </form>
      </div>
      <div className={styles.imageCont}>
        <Image
          src="/images/contact.jpg"
          alt=''
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};

export default Contact;
