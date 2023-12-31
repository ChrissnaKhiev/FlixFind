import React from "react";

const MovieList = (props) => {

    const ListComponent = props.listComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
            <div className='d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div className="overlay d=flex align-items-center justify-content-start">
                    <ListComponent />
                </div>
            </div>))}
        </>
    )
}

export default MovieList;