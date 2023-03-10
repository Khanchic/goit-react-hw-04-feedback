
import styles from "../FeedbackOptions/FeedbackOptions.module.css";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options,onLeaveFeedback})=>{
    return <ul className={styles.buttons}>
        {options.map(option => {
          return (
                <li key={option} >
                    <button type="button" onClick={() => onLeaveFeedback(option)} className={styles.buttonItem}>{option}</button> 
                </li>
          );
        })}   
            </ul>
};


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
