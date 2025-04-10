import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.innerWrapDiv}>
                    <div className={styles.innerDiv}>
                        <h2>Контакти для співпраці:</h2>
                        <h3>Email:</h3>
                        <p>storylandcommertial@gmail.com</p>
                        <h3>Номер телефону:</h3>
                        <p>063-847-55-43</p>
                    </div>
                    <div className={styles.innerDiv}>
                        <h2>Наша адреса:</h2>
                        <p>м. Львів, вул. Грінченка 34А</p>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.4615366500066!2d24.05108797652327!3d49.87135867148729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adcfac77bd121%3A0x8fe4a056ed320c52!2z0LLRg9C70LjRhtGPINCT0YDRltC90YfQtdC90LrQsCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1744315869712!5m2!1suk!2sua"
                        width="700" height="250" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contacts;