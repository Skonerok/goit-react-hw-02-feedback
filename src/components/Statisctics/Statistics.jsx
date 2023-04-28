import Notification from '../Notifications';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>{total > 0 && (
      <ul className={css.feedback__list}>
        <li>
          <p className={css.feedback__text}>
            Good:<span>{good}</span>
          </p>
        </li>
        <li>
          <p className={css.feedback__text}>
            Neutral:<span>{neutral}</span>
          </p>
        </li>
        <li>
          <p className={css.feedback__text}>
            Bad:<span>{bad}</span>
          </p>
        </li>
        <li>
          <p className={css.feedback__text}>
            Total:<span>{total}</span>
          </p>
        </li>
        <li>
          <p className={css.feedback__text}>
            Positive feedback:<span>{positivePercentage}%</span>
          </p>
        </li>
      </ul>
    )}
    {total === 0 && <Notification message="There is no feedback"/>}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
      
export default Statistics;