import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import CardProf from '../components/CardProf';

const Home = () => {
    const [ profs , setProfs] = useState(null)
    
    useEffect(() => {
        fetch( `http://localhost:5000/profs`)
            .then(reponse => reponse.json())
            .then(result => setProfs(result))
    }, []);
    if (profs === null) {
        return <h1>chargement ...</h1>
    }

    return (
        <div>
            <h1>Homepage</h1>
            <Nav />
            <div>
                <CardProf teachers = {profs} />
            </div>
        </div>
    );
};

export default Home;