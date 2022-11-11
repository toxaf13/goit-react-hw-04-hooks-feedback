import style from './style.module.css';
import PropTypes from 'prop-types';

export const Statistics =({good,neutral,bad,total,positivefeedback}) => {
   const Array = [
      [1,`Good: ${good}.`],
      [2,`Neutral: ${neutral}.`],
      [3,`Bad: ${bad}.`],
      [4,`Total: ${total}.`],
      [5,`Positive feedback: ${positivefeedback} % `],
   ];
   return(
      <ul className={style.list}>
         {Array.map(([id,superString]) =>(
            <li key={id} className={style.item} >
               <p> {superString}</p>
            </li>
         ))}
      </ul>
   )
};
Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivefeedback: PropTypes.number.isRequired,
 };