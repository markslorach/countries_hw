import React from 'react'

const Country = function({country}) { 

    if (!country) {
        return null
    }

    return (
        <>
        <h3>Name: {country.name.common} {country.flag}</h3>
        <p><b>Population:</b> {country.population}</p>
        </>
    )

};


export default Country; 