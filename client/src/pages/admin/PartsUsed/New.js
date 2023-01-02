import { useState, useContext } from "react";
import { useNavigate }  from "react-router-dom";
import axios from "axios";
import MainContext from "../../../context/MainContext";


const AddUsedPart = () => {
    const { setAlert } = useContext(MainContext)
    const navigate = useNavigate()

    const [form, setForm ] = useState({
        price: '',
        name: '',
        description: '',
        photo: '',
        condition: '',
      })

    const handleForm = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/api/used-parts/new', form)
        .then(resp => {
            console.log(resp)
            navigate('/admin/used-parts')
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
                        <label className="mb-1">Kaina:</label>
                        <input type="text" name="price" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Pavadinimas:</label>
                        <input type="text" name="name" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Aprašymas:</label>
                        <input type="text" name="description" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Nuotraukos:</label>
                        <input type="text" name="photo" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Būklė</label>
                        <input type="text" name="condition" className="form-control" onChange={handleForm} />
                    </div>
                   
                    <button className="btn btn-primary">Siųsti</button>
                </form>
            </div>
        
        </>
    )
}

export default AddUsedPart