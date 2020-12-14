import React, { Component } from 'react'

class SearchBarName extends Component {
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
                <input style={{borderRadius: '10px', width: '70%'}} type="text" placeholder="🔎 Búsqueda por nombre de usuario. Por ejemplo: Héctor Carramiñana" value={this.state.search} onChange={this.inputSearch} />
            </form>
        )
    }
}

export default SearchBarName