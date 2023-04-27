import { Component } from 'react';
// import css from './Statistics.module.css';

class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const totalFeedback = this.countTotalFeedback();
        return totalFeedback ? Math.ceil((good / totalFeedback) * 100) : 0;
    }

    onGoodBtnClick = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
};

    onNeutralBtnClick = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    onBadBtnClick = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>Please leave your feedback</h1>

                <div>
                    <button type="button"
                        onClick={this.onGoodBtnClick}>
                        Good
                    </button>
                    <button type="button"
                    onClick={this.onNeutralBtnClick}>
                        Neutral
                    </button>
                    <button type="button"
                    onClick={this.onBadBtnClick}>
                        Bad
                    </button>
                </div>

                <div>
                    <h2>Statistics</h2>
                    <p>Good:<span>{this.state.good}</span></p>
                    <p>Neutral:<span>{this.state.neutral}</span></p>
                    <p>Bad:<span>{this.state.bad}</span></p>
                    <p>Total:<span>{this.countTotalFeedback}</span></p>
                    <p>Positive feedback:<span></span></p>
                </div>

            </div>
        )
    }
}

// class Statistics extends Component {
// static defaultProps = {
//         initialValue: 0,
//     };

//     state = {
//         goodValue: this.props.initialValue,
//         neutralValue: this.props.initialValue,
//         badValue: this.props.initialValue,
//         totalValue: this.props.initialValue,
//     };

//     render() {
//         return (
//             <div className={css.feedback}>
//                 <h1 className={css.feedback__title}>Please leave your feedback</h1>

//                 <div className={css.feedback__buttons}>
//                     <button type="button">Good</button>
//                     <button type="button">Neutral</button>
//                     <button type="button">Bad</button>
//                 </div>

//                 <div className={css.stats}>
//                     <h2 className={css.stats__title}>Statistics</h2>
//                     <p className={css.stats__text}>Good:<span>0</span></p>
//                     <p className={css.stats__text}>Neutral:<span>0</span></p>
//                     <p className={css.stats__text}>Bad:<span>0</span></p>
//                 </div>

//             </div>
//         )
//     }
// }


export default Statistics;