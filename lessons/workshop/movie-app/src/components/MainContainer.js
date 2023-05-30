import React, { Component } from 'react'
import { Card, CardSection, Image, Header } from './common'
const movieApiKey = process.env.REACT_APP_MOVIE_KEY
export default class MainContainer extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            queries:['300'],
            query: '',
            isLoading: false
        }
    }

    async componentDidMount() {
        await this.fetchMovies()
    }

    fetchMovies = async () => {
        return this.state.queries.forEach(async (query) => {
        const url = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=767eb60340f9b3d5222d0db31a53bf47&language=en-US&query=${query}&page=1&include_adult=false`
        )
        const resp = await url.json()
        console.log(resp.results)
        this.setState({data: [...this.state.data, ...resp.results]})
       })
    }

    renderItems = () => {
        const { data } = this.state
        return data.map((movie) => {
            console.log(movie)
            return (
                <Card key={movie.id}>
                    <CardSection>
                        <h3>{movie.title}</h3>
                    </CardSection>
                    <CardSection>
                        <Image image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                    </CardSection>
                    <CardSection>
                        <p>Rating {movie.vote_average}</p>
                        <p>{movie.overview.substr(0, 100)}...</p>
                    </CardSection>
                </Card>
            )

        })
    }

    render() {
        return( 
        <div className="main">
            <Header>
                <input type='text' placeholder="Search Movies" />
            </Header>
            <div classname="list-container">{this.renderItems()}</div>
        </div>
        )
    }
}