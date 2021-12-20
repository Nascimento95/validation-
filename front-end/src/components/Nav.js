import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Homepage</Link>
            <Link style={{marginLeft:"20px"}} to="/profs">Ajouter votre proffeseur</Link>
        </div>
    );
};

export default Nav;