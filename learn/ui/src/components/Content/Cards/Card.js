import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWords } from "../../../actions/words";

export class Card extends Component {
    state = {
        search: ''
    }
    static propTypes = {
        words: PropTypes.array.isRequired,
        getWords: PropTypes.func.isRequired
    };
    onSearch = (e) => {
        e.preventDefault();
        console.log({ value: e.target.value });
        this.setState({ search: e.target.value });

    }

    componentDidMount() {
        this.props.getWords();
    }

    render() {

        const filterwords = this.props.words.filter(word => {
            return word.word.toLowerCase().includes(this.state.search.toLowerCase())
        });
        return (
            <Fragment>
                <div id="searchbar">
                    <input className="form-control col-md-6" type="search" state={this.state} placeholder="Search" onChange={this.onSearch} />
                </div>
                <div className="card-columns">
                    {
                        filterwords.map(word => (
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

export default connect(mapStateToProps, { getWords })(Card);
