import React from 'react';
import styles from './About.module.scss';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const About = () => {
    return (
        <div className={styles.textWrapper}>
            <h1>
                <icon>
                    <BsFillInfoCircleFill size={40} />
                </icon>
                About our company
            </h1>
            
            <p>
                Our plumbing service is a highly reputable and experienced team of professionals dedicated to providing exceptional plumbing solutions to residential and commercial clients. With over 10 years of experience in the industry, our team has the skills and knowledge to handle any plumbing issue with speed and precision.
            </p>
            <p>
                We are proud to have a team of certified and licensed plumbers who are trained to the highest standards of excellence. Our team members are knowledgeable about the latest plumbing technologies and are equipped with state-of-the-art tools to ensure fast and efficient service.
            </p>
            <p>
                We understand that plumbing issues can be stressful, which is why we prioritize our clients' needs and work to ensure the quality of our work. We take great pride in our work, and we are committed to providing top-notch plumbing services at competitive prices.
            </p>
            <p>
                At our company, we believe that speed and quality go hand in hand. We work diligently to ensure that our clients' plumbing issues are resolved as quickly as possible without compromising the quality of our work. We understand that time is valuable, and we strive to minimize disruptions to our clients' daily routines.
            </p>
            <p>
                Our team comprises of 15 skilled and experienced plumbers, including apprentices and journeymen. We maintain a low employee turnover rate and prioritize ongoing training and development opportunities for our team members to ensure they are up-to-date with the latest techniques and technologies.
            </p>
            <p>
                Overall, our plumbing service is committed to providing fast, reliable, and high-quality plumbing solutions to our clients. Whether it's a small repair or a large installation project, our team is ready to deliver exceptional service every time.
            </p>
        </div>
    );
}

export default About;