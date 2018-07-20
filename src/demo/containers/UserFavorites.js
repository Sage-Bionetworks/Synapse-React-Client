import React from 'react'

/**
 * Class that demos obtatining a user's favorites list
 */
class UserFavorites extends React.Component {

    constructor () {
        super()
        this.state = {
            favorites: [],
            errorMessage: ''
        }
        this.getFavorites = this.getFavorites.bind(this)
    }

    getFavorites() {
        this.props.getUserFavoritesEndpoint(this.props.token)
        .then(
            data => {
                this.setState({
                        favorites: data.results
                    })
                }
        ).catch(
            err => {
                this.setState({
                    errorMessage: ''
                })
            }
        )
    }

    render () {

        let listFavorites = null

        if (this.props.token === '') {
            listFavorites = <p> Sign in and click the button to get favorites. </p>
        } else {
            listFavorites = this.state.favorites.map((fav) =>
                <li key={fav.id}> {fav.name} </li>
            );
        }

        return (
            <div className="container border pt-2 mt-5">
                <h3> Demo of getting user favorites</h3>
                <button disabled={this.props.token === "" ? true: false} className={"btn " + (this.props.token === "" ? "btn-outline-secondary" :"btn-primary")} onClick={this.getFavorites}> Get favorites </button>
                {listFavorites}
            </div>
        )
    }
}

export default UserFavorites;