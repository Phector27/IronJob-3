import React, { Component } from 'react'

class SearchBarIdOffer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    inputSearch = e => {
        const { value } = e.target
        this.setState({search: value}, () => this.props.searchFor(e.target.value))
        
        
    }

    render() {
        return (
            <form style={{textAlign: 'center'}}>
                <input style={{borderRadius: '10px', width: '70%'}} type="text" placeholder="🔎 Búsqueda por id de oferta. Por ejemplo: 96f4dfc" value={this.state.search} onChange={this.inputSearch} />
            </form>
        )
    }
}

export default SearchBarIdOffer