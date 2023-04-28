import PropTypes from 'prop-types';
import css from './Notifictions.module.css';

const Notification = ({ message }) => <p className={css.feedback__notifications}>{message}</p>;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;