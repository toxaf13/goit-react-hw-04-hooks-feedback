import style from './style.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options , onLeaveFeedback})=>{
   return (
      <ul >
         {options.map(option =>(
            <li key={option} className={style.item}>
               <button onClick={() => onLeaveFeedback(option)} >{option}</button>
            </li>
         ))}
      </ul>
   );
};
FeedbackOptions.propTypes = {
   options: PropTypes.array.isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
 };