import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWords } from "../../../actions/words";


// export class Search extends Component {

//     state = {
//         search: ''
//     }
//     static propTypes = {
//         words: PropTypes.array.isRequired,
//         getWords: PropTypes.func.isRequired
//     };
//     componentDidMount() {
//         this.props.getWords();
//     }

//     onSearch = (e) => {
//         // e.preventDefault();
//         console.log({ value: e.target.value });
//         this.setState({ search: e.target.value });

//     }
//     render() {
//         const filter = this.props.words.filter(word => {
//             return word.word.toLowerCase().includes(this.state.search.toLowerCase())
//         });
//         console.log(filter);
//         return (
//             <Fragment>
//                 <div>
//                     <input type="search" value={this.state.words} placeholder="Search" onChange={this.onSearch} />
//                 </div>
//             </Fragment>
//         )
//     }
// }
// const mapStateToProps = state => ({
//     words: state.words.words
// });
// export default connect(mapStateToProps, { getWords })(Search);



const Search = ({  onSearch }) => {
    return (
        <Fragment>
            <div>
                <input type="search" placeholder="Search" onChange={onSearch} />
            </div>
        </Fragment>
    )
}

export default Search

