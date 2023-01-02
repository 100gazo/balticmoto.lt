import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MainContext from "../../../context/MainContext";

const EditMoto = () => {
    const { setAlert } = useContext(MainContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const [form, setForm ] = useState({
        price: '',
        marke: '',
        model: '',
        year: '',
        engine: '',
        cooling: '',
        mileage: '',
        condition: '',
        fuelType: '',
        photo: ''
    })

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    
    const handleSubmit= (e) => {
        e.preventDefault()

        axios.put('/api/moto/edit/' + id, form)
            .then(resp => {
                console.log(resp);
                navigate('/admin/moto')
            }).catch(error => {
                console.log(error)
                
                if (error.response.status === 401)
                    navigate('/admin/moto')
            })
        }

    useEffect(() => {
        axios.get('/api/moto/single/' + id)
        .then(resp => setForm(resp.data))
        .catch(error =>{
            console.log(error)
        })
    }, [ id ])
    
    
    return (
<>
         <div className="container mw-50">
                <div className="page-heading">
                    <h1>Redaguoti motociklą</h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-2">
                        <label className="mb-1">Markė:</label>
                        <input type="text" name="marke"  className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Modelis:</label>
                        <input type="text" name="model" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Kaina:</label>
                        <input type="text" name="price" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Metai:</label>
                        <input type="text" name="year" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Variklis</label>
                        <input type="text" name="engine" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Aušinimas</label>
                        <input type="text" name="cooling" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Rida</label>
                        <input type="text" name="mileage" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Būklė</label>
                        <input type="text" name="condition" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Kuro Tipas</label>
                        <input type="text" name="fuelType" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Nuotraukos</label>
                        <input type="text" name="photo" className="form-control" onChange={handleForm} />
                    </div>
                    <button className="btn btn-primary">Siųsti</button>
                </form>
            </div>
        
        </>
    )
}   

export default EditMoto