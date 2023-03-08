import React from 'react';

import styles from './MainContent.module.scss';

const MainContent = () => {
    return (
        <div className={styles.wrapper}>
            <h1>
                Welcome to our plumbing service site!
            </h1>
            <p>
                We are here to assist you with all of your plumbing needs. Whether you require routine maintenance or emergency repairs, our team of skilled professionals is ready to tackle any job. Thank you for choosing our services, and we look forward to working with you!
            </p>
            <p>
                You can call us or write an e-mail. Or you can fill out the form below and we will contact you.
            </p>
            <form action="https://formspree.io/f/xzbqgogo" method="POST" className={styles.formWrapper}>
                <h2>Leave a request</h2>
                <div className={styles.form}>
                    <h1>
                        <div className={styles.line}> </div>
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" required placeholder="Name" />
                    </h1>
                    <h1>
                        <label htmlFor="phone">Phone number:</label>
                        <input type="tel" id="phone" name="phone" required placeholder="Phone" />
                    </h1>
                    <h1>
                        <label htmlFor="service">Choose service:</label>
                        <select id="service" name="service" required>
                            <option value="">None</option>
                            <option value="Repair">Repair</option>
                            <option value="Instalation">Installation</option>
                            <option value="Replacement">Replacement</option>
                        </select>
                    </h1>
                    <h1>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required placeholder="Write Message"></textarea>
                    </h1>

                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}

export default MainContent;