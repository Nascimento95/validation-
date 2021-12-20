import React from 'react';
import { Link } from 'react-router-dom';

const CardProf = ({teachers}) => {
    console.log("mes prosp",teachers);
    return (
        <div style={{display:"flex"}} >
            {teachers.map(prof => 
                <div key={prof.slug} style={{border:"solid 1px black", margin:"20px 20px"}} >
                    <div style={{border:"solid 1px black"}}>
                        <Link to={`/profs/${prof.slug}`}><img style={{width:"200px",height:"200px"}} src={prof.profile_picture} alt="photo de prof" /></Link>
                    </div>
                    <h2>le nom : {prof.name} </h2>
                    <p>réside a : {prof.city} </p>
                </div>
            )}
        </div>
    );
};

export default CardProf;