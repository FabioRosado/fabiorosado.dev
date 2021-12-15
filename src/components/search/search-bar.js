import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: []
        }
    }


    render() {
        return (
            <div className="my-5 relative">
                <div className="flex justify-center items-center margin-top">
                    <i className="fas fa-search icon" />
                    <input type="text" value={this.state.query} onChange={this.search} placeholder="Search..." className="input" />
                </div>
                {this.state.results.length !== 0 ?
                    <div className="flex flex-col search-results">
                        {this.state.results.map(page =>
                            <Link className="link m-1" to={`${page.slug}`} key={page.title}>
                                <span className="underline">{page.title}</span> <span className="white-text">: </span><span className="orange-text">{page.categories}</span>
                            </Link>

                        )
                        }
                    </div>
                    : ''}
            </div>
        )
    }

    getOrCreateIndex = () =>
        this.index ? this.index : Index.load(this.props.searchIndex)

    search = evt => {
        const query = evt.target.value
        this.index = this.getOrCreateIndex()
        this.setState({
            query,
            results: this.index
                .search(query, { expand: true })
                .map(({ ref }) => this.index.documentStore.getDoc(ref))
        })
    }
}