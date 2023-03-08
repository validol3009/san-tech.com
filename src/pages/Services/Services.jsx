import React from 'react';
import styles from './Services.module.scss';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


const Services = () => {
    return (
        <div className={styles.textWrapper}>
            <h1>
                Our services
            </h1>

            <h2>
                <p>
                    Our service provides many different plumbing services. Their list you can see:
                </p>
            </h2>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Drain cleaning - This service involves clearing clogs and blockages in your drains, allowing water to flow freely again.
                </p>
            </s>
            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Leak detection and repair - Our team will use specialized equipment to locate any leaks in your plumbing system and perform the necessary repairs to prevent further damage.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Water heater installation and repair - We offer both installation and repair services for both traditional and tankless water heaters, ensuring that you have hot water when you need it.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Toilet repair and replacement - Our plumbing professionals can repair or replace your toilet, ensuring that it is functioning properly.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Faucet repair and replacement - If your faucet is leaking or not working properly, we can repair or replace it for you.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Shower and bathtub installation and repair - We offer installation and repair services for showers and bathtubs, including repairing leaks, replacing fixtures, and upgrading to new units.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Gas line installation and repair - We can install new gas lines for appliances, as well as perform repairs to existing gas lines to ensure safety.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Pipe repair and replacement - Our team can repair or replace damaged pipes in your plumbing system, ensuring that water flows properly and preventing leaks.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Water softener installation - This service involves installing a water softener system to remove hard minerals from your water, improving the quality of your water and extending the life of your plumbing fixtures.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Garbage disposal installation and repair - Our professionals can install a new garbage disposal or repair an existing one, ensuring that your kitchen sink is functioning properly.
                </p>
            </s>

            <s>
                <icon>
                    <IoMdCheckmarkCircleOutline size={40} />
                </icon>
                <p>
                    Bathroom and kitchen remodeling services - We offer remodeling services for bathrooms and kitchens, including plumbing fixture installation and upgrades.
                </p>
            </s>



        </div>
    );
}

export default Services;