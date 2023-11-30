// Learn.jsx
import React from 'react';
import styles from '@/styles/Learn.module.css';

const Learn = () => {
  // Placeholder data for programming courses
  const courses = [
    { name: 'Web Development Basics', language: 'HTML', fee: 'Free' },
    { name: 'CSS Styling Techniques', language: 'CSS', fee: 'Free' },
    { name: 'JavaScript Fundamentals', language: 'JavaScript', fee: 'Free' },
    { name: 'React Essentials', language: 'React', fee: '$0.3' },
    { name: 'Node.js Fundamentals', language: 'JavaScript', fee: '$1' },
    { name: 'TypeScript Basics', language: 'TypeScript', fee: 'Free' },
    { name: 'PHP for Web Development', language: 'PHP', fee: 'Free' },
    { name: 'HTML5 and CSS3 Advanced Topics', language: 'HTML', fee: '$5' },
    // Add more courses as needed
  ];

  return (
    <div className={styles.learnContainer}>
      <h2 className={styles.heading}>List of Courses</h2>

      <section className={styles.tableSection}>
        <h3 className={styles.sectionHeading}>Current Courses</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>Course Name</th>
              <th className={styles.tableHeader}>Language</th>
              <th className={styles.tableHeader}>Fee</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td className={styles.tableCell}>{course.name}</td>
                <td className={styles.tableCell}>{course.language}</td>
                <td className={styles.tableCell}>{course.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
};

export default Learn;
