import React from 'react';
import Nav from '../components/Nav';
import FormCreateProf from '../components/FormCreateProf';
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    // border :1px solid black;
    display:flex;
    justify-content: space-between;
    
`
const Container1 = styled.div`
    // width:300px;
    // border :1px solid black
    padding:200px 0px;
    
`
const Container2 = styled.div`
    width:300px;
    padding:200px 0px;

    img{
        width:300px;
        height:300px;
    }
`
const FormNewTeacher = () => {
    return (
        <div> 
            <Nav />
            <Container>
                <Container2>
                    <img src="https://upload.wikimedia.org/wikipedia/fr/3/32/Lesprofs.png" alt="logo de prof"/>
                </Container2>
                <Container1>
                    <h1>ajouter votre nouveau professeur</h1>
                    <FormCreateProf />
                </Container1>
            </Container>
        </div>  
    );
};

export default FormNewTeacher;