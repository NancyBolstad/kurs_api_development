import React from "react";
import {Link, withRouter} from 'react-router-dom'


class Book extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            author: this.props.author ? this.props.author : "",
            title: this.props.title ? this.props.title : "",
            year: this.props.year ? this.props.year : ""
        };

        this.ok = this.props.ok ? this.props.ok : "Ok";
    }

     onFormSubmit = async (event) => {
        event.preventDefault();

        const completed = await this.props.okCallback(
            this.state.author,
            this.state.title,
            this.state.year,
            this.props.bookId);

        if(completed) {
            this.props.history.push('/');
        } else {
            alert("Failed to create new Book")
        }
    };

    onAuthorChange = (event) => {
        this.setState({author: event.target.value});
    };

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    };

    onYearChange = (event) => {
        this.setState({year: event.target.value});
    };

    render() {

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="inputTitle">Author(s):</div>
                    <input
                        placeholder={"Type the author(s) of this book"}
                        value={this.state.author}
                        onChange={this.onAuthorChange} 
                        className="bookInput"
                    />
                    <div className="inputTitle">Title:</div>
                    <input
                        placeholder={"Type the title of this book"}
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        className="bookInput"
                    />
                    <div className="inputTitle">Year:</div>
                    <input
                        placeholder={"Type the year in which this book was published"}
                        value={this.state.year}
                        onChange={this.onYearChange}
                        className="bookInput"
                    />

                    <button type="submit" className={"btn"}>{this.ok}</button>
                    <Link to={"/"}><button className={"btn"}>Cancel</button></Link>
                </form>
            </div>
        );
    }
}


/*
    Needed, because otherwise this.props.history would be undefined
 */
export default withRouter(Book);