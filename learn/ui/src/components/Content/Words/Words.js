import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWords } from "../../../actions/words";
import sty from './words.css';



export class Words extends Component {

    static propTypes = {
        words: PropTypes.array.isRequired,
        getWords: PropTypes.func.isRequired
    };


    componentDidMount() {
        this.props.getWords();
    }

    render() {

        return (
            <Fragment>
                <div className="card-columns">
                    {
                        this.props.words.map(word => (
                            <div className="card" key={word.id}>
                                <div className="card-body">
                                    <h3 className="card-title"> {word.word}</h3>
                                    <h5 className="card-subtitle"> {word.meaning}</h5>
                                    <h6 className="card-text">  {word.synonym}</h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Fragment>
        )
    }

}
const mapStateToProps = state => ({
    words: state.words.words
});

// const mapDispatchToProps = dispatch => ({
//     getWords: () => dispatch(getWords())
// })

export default connect(mapStateToProps, { getWords })(Words);
