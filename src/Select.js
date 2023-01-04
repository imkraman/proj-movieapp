import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const MovieSearch = ()=> {
    const [year, setYear] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect( ()=> {
        if( !year) return;

        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=25f29436=${year}`)
        .then(response => response.json())
        .then(data => setMovies(data.movies));
    }, [year]);

    const yearOptions = [
        { value: 2017, label: '2017'},
        { value: 2019, label: '2019'},
        { value: 2020, label: '2020'},
    ];

    return (
        <div>
        <Select
        options = {yearOptions}
        value={year}
        onChange = { selectedOption => setYear(selectedOption.value) } />
        
        {movies.map(movie => (
            <div key={movie.id}>{movie.title}</div>
        ))}
        </div>
    );
};
export default MovieSearch;