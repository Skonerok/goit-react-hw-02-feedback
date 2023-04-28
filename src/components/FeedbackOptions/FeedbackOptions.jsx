import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <>
            {
                options.map(option => (
                    <button
                        key={option}
                        className={css.feedback__button}
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}>
                        {option}
                    </button>
                ))}
            </>
        );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;