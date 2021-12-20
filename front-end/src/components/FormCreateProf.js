import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik ,ErrorMessage } from "formik"

// import * as Yup from 'yup';

const FormCreateProf = () => {

    const [errors , setErrors] = useState([])

    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            slug: '',
            name: '',
            password: '',
            city: '',
            profile_picture: '',
            email: '',
        },
        // validationSchema: Yup.object({
        //     name: Yup.string()
        //         .min(4, 'minimum 4 caractère')
        //         .required('champ obligatoire'),
        //     password: Yup.string()
        //         .min(8,'minimum 8 caractère')
        //         .required('champ obligatoire'),
        //     city: Yup.string('paris','lisbonne','tokyo')
        //         .required('champ obligatoire'),
        // }),

        onSubmit: values => {
        //   alert(JSON.stringify(values));
          fetch(`http://localhost:5000/profs`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            // je transforme mon objet hero  en string
            body: JSON.stringify(values)
        })

        .then(response => response.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                console.log(data)
                navigate("/")
            }
        })
        
        },
    });
    

    return (
        
            <form onSubmit={formik.handleSubmit} >
                <input
                type="text"
                name="slug"
                value={formik.values.slug}
                onChange={formik.handleChange}
                placeholder='name'
                />

                <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder='name2'
                />
                {/* <ErrorMessage name="name" /> */}
                <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder='paswword'
                />

                {/* <label>isAlive</label> */}
                <input
                type="text"
                name="city"
                checked={formik.values.city}
                onChange={formik.handleChange}
                placeholder='enter your city'
                />
                
                <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder='entrez votre email'
                />

                <input
                type="text"
                name="profile_picture"
                value={formik.values.profile_picture}
                onChange={formik.handleChange}
                placeholder='image url'
                />

                <button type="submit">Valider</button>
                {errors.map(error => <p>{error.msg}</p>)}
            </form>
            
        
    )
};

export default FormCreateProf;