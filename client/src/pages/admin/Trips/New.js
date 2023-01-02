import { useState, useContext } from "react";
import { useNavigate }  from "react-router-dom";
import axios from "axios";
import MainContext from "../../../context/MainContext";


const AddTrips = () => {
    const { setAlert } = useContext(MainContext)
    const navigate = useNavigate()

    const [form, setForm ] = useState({
        
        name: '',
        media: '',
        text: '',
        
      })

    const handleForm = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/api/trips/new', form)
        .then(resp => {
            console.log(resp)
            navigate('/admin/trips')
        })
        .catch(error => {
            console.log(error)
            if (error.response.status === 401)
                navigate('/')
        })
    }
    
    return (
        <>
         <div className="container mw-50">
                <div className="page-heading">
                    <h1>Pridėti naują dalį</h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group mb-2">
                        <label className="mb-1">Pavadinimas:</label>
                        <input type="text" name="name"  className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Foto/Video:</label>
                        <input type="text" name="media" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Turinys:</label>
                        <input type="text" name="text" className="form-control" onChange={handleForm} />
                    </div>
                   
                    <button className="btn btn-primary">Siųsti</button>
                </form>
            </div>
        
        </>
    )
}

export default AddTrips