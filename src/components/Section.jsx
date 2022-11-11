import style from './style.module.css';
import PropTypes from 'prop-types'

export const Section = ({title, children})=> (
   <div className={style.container}>
      <h2>{title}</h2>
      {children}
   </div>
);
Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node,
 };