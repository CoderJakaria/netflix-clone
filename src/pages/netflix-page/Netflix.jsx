import React from 'react'
import Banner from '../../components/banner/Banner'
import Nav from '../../components/navbar/Nav'
import Row from '../../components/row/Row'
import requests from '../../lib/request'

const Netflix = () => {
    return (
        <div>
            <Nav />

            <Banner />

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default Netflix
