import React from 'react';
import styles from './Filter.module.css'

const Filter = () => {
    return (
        <div className={styles.mainBlock}>
            <h2>Оберіть книгу на свій смак:</h2>
            <form className={styles.formContainer}>
                <div className={styles.innerDiv}>
                    <select className={styles.options}>
                        <option value={''}>Оберіть автора</option>
                        <option value={'Агата Крісті'}>Агата Крісті</option>
                        <option value={'Тесс Ґеррітсен'}>Тесс Ґеррітсен</option>
                        <option value={'Сара Дж Маас'}>Сара Дж Маас</option>
                        <option value={'Голлі Блек'}>Голлі Блек</option>
                        <option value={'Аннет Марі'}>Аннет Марі</option>
                    </select>

                    <select className={styles.options}>
                        <option value={''}>Оберіть видавництво</option>
                        <option value={'КСД'}>КСД</option>
                        <option value={'Vivat'}>Vivat</option>
                        <option value={'Ранок'}>Ранок</option>
                        <option value={'Небо'}>Небо</option>
                        <option value={'Bookchef'}>Bookchef</option>
                    </select>
                </div>

                <div className={styles.innerDiv}>
                    <select className={styles.options}>
                        <option value={''}>Оберіть категорію</option>
                        <option value={'Історична література'}>Історична література</option>
                        <option value={'Художня література'}>Художня література</option>
                        <option value={'Навчальна література'}>Навчальна література</option>
                    </select>

                    <select className={styles.options}>
                        <option value={''}>Оберіть жанр (для художньої літератури)</option>
                        <option value={'Фентезі'}>Фентезі</option>
                        <option value={'Наукова фантастика'}>Наукова фантастика</option>
                        <option value={'Трилер'}>Трилер</option>
                        <option value={'Роман'}>Роман</option>
                        <option value={'Детектив'}>Детектив</option>
                    </select>
                </div>

                <button className={styles.sendButton}>Фільтрувати</button>
            </form>
        </div>
    );
};

export default Filter;