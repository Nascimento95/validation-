import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Nav from '../components/Nav';
const ProfSelected = () => {

    const [ profSelect , setProfSelect] = useState(null)
    const {slug} = useParams()
    useEffect(() => {
        fetch( `http://localhost:5000/profs/${slug}`)
            .then(reponse => reponse.json())
            .then(result => setProfSelect(result))
    }, []);
    if (!profSelect) {
        return <h1>chargement ...</h1>
    }

    return (
        <div>
            <Nav />
            <h1>votre prof selectionner</h1>
            <div>
                <div>
                    <img style={{width:"200px",height:"200px"}} src={profSelect.profile_picture} alt="photo de prof" />
                </div>
                <div>
                    <h2>le nom : {profSelect.name} </h2>
                    <p>réside a : {profSelect.city} </p>
                </div>
            </div>
        </div>
    );
};

export default ProfSelected;