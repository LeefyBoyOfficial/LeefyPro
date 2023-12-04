// pages/index.js
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Link from 'next/link';
import Emailicon from '@/components/emailicon';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        // Initialize Typed
        const typed = new Typed(typedRef.current, {
            strings: ['Python', 'HTML', 'CSS'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        // Destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <style jsx>
                {`
            #signupBtn{
                background-color: #c9c9c9;
                color: #000;
                border: none;
                
                transition: background-color 0.3s, color .3s
            }
            
            #signupBtn:hover{
                background-color: #555;
            }
            `
                }
            </style>
            <Head>
                <title>Leefy Programming - Learn Programming Online With Ease</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.mainDiv}>
                <div className={styles.topContent}>
                    <h1>Welcome to <span>Leefy Programming</span></h1>
                    <p style={{ fontSize: '30px' }}>
                        Learn <span ref={typedRef}></span>
                    </p>
                    <div className={styles.para}>
                        <p>
                            Leefy Programming is a website designed for new programmers and coders seeking to learn programming online.
                            Explore our extensive collection of free notes, tutorials, and documentation covering various programming languages.
                            Whether you're a beginner or an experienced developer, our platform provides a comprehensive learning experience.

                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <Link style={{ textDecoration: 'none' }} href='/learn'><button>Learn</button></Link>
                        <Link style={{ textDecoration: 'none' }} href='/auth/signup'><button id='signupBtn'>Sign Up</button></Link>
                    </div>
                </div>
                <div className={styles.ImageDiv}>
                    <Image
                        src='/images/bgmain.png'
                        alt='Image'
                        priority={true}
                        width={500}
                        height={500}

                    />
                </div>

            </main>
            <div className={styles.recommendedCoursesTitle}><h1>Recommended Courses</h1></div>
            <section className={styles.coursesSection}>

                <div className={styles.courseCard}>
                    <Image
                        className={styles.courseThumbnail}
                        src='/images/css.jpg'
                        alt='CSS Course'
                    />
                    <div className={styles.courseTitle}>CSS Course</div>
                    <div className={styles.courseDescription}>
                        Explore the fundamentals of CSS and learn how to style web pages.
                    </div>
                </div>
                {/* Python Course Card */}
                <div className={styles.courseCard}>
                    <Image
                        className={styles.courseThumbnail}
                        src='/images/python.jpg'
                        alt='Python Course'
                    />
                    <div className={styles.courseTitle}>Python Course</div>
                    <div className={styles.courseDescription}>
                        Dive into the world of Python programming and build powerful applications.
                    </div>
                </div>
                {/* HTML Course Card */}
                <div className={styles.courseCard}>
                    <Image
                        className={styles.courseThumbnail}
                        src='/images/html.jpg'
                        alt='HTML Course'
                    />
                    <div className={styles.courseTitle}>HTML Course</div>
                    <div className={styles.courseDescription}>
                        Learn the foundations of HTML and create dynamic web content.
                    </div>
                </div>
            </section>
            <section className={styles.faqSection}>
                <div className={styles.faqTitle}><h1>FAQ</h1></div>
                <div className={styles.faqContent}>
                    <div className={styles.faqContent}>
                        <div className={styles.faqItem}>
                            <h2>How do I get started with the courses?</h2>
                            <p>
                                Getting started is easy! Visit our "Courses" page, choose the course you're interested in, and click on "Learn more" to get started.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h2>Are the courses free?</h2>
                            <p>
                                Yes, the majority of our courses are free. However, we may offer premium courses with additional features in the future.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h2>Can I access the courses from any device?</h2>
                            <p>
                                Absolutely! Our courses are designed to be accessible from any device with an internet connection. You can learn on your computer, tablet, or smartphone.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h2>Is there a time limit for course access?</h2>
                            <p>
                                No, there is no time limit for accessing our free courses. Once you enroll, you can learn at your own pace and revisit the material as often as you like.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h2>How can I track my progress in a course?</h2>
                            <p>
                                We provide a progress tracking feature for enrolled users. Simply log in to your account, go to the course dashboard, and you'll find tools to monitor your progress.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <Emailicon />
        </>
    );
};

export default Home;
