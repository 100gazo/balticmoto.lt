import { useState, useContext } from "react";
import { useNavigate }  from "react-router-dom";
import axios from "axios";
import MainContext from "../../../context/MainContext";


const AddNewTyres = () => {
    const { setAlert } = useContext(MainContext)
    const navigate = useNavigate()

    const [form, setForm ] = useState({
        price: '',
        marke: '',
        wheelcamera: '',
        dimension: '',
        speedindex: '',
        speedindex2: '',
        constructiontype: '',
        loadindex: '',
        loadindex2: '',
        protector: '',
        purpose: '',
        devcode: '',
        width: '',
        diameter: '',
        type: '',
        eancode: '',
        
      })

    const handleForm = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/api/new-tyres/new', form)
        .then(resp => {
            console.log(resp)
            navigate('/admin/new-tyres')
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
                    <h1>Pridėti objektą</h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group mb-2">
                        <label className="mb-1">Kaina:</label>
                        <input type="text" name="price"  className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Markė:</label>
                        <input type="text" name="marke" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Kameros Tipas:</label>
                        <input type="text" name="wheelcamera" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Matmenys:</label>
                        <input type="text" name="dimension" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Greičio indeksas</label>
                        <input type="text" name="speedindex" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Greičio indeksas2</label>
                        <input type="text" name="speedindex2" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Konstrukcijos Tipas</label>
                        <input type="text" name="constructiontype" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Apkrovos indeksas</label>
                        <input type="text" name="loadindex" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Apkrovos indeksas 2</label>
                        <input type="text" name="loadindex2" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Protektorius</label>
                        <input type="text" name="protector" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Paskirtis</label>
                        <input type="text" name="purpose" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">DEV Kodas</label>
                        <input type="text" name="devcode" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Plotis</label>
                        <input type="text" name="width" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Diametras</label>
                        <input type="text" name="diameter" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">Rūšis</label>
                        <input type="text" name="type" className="form-control" onChange={handleForm} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1">EAN Kodas</label>
                        <input type="text" name="eancode" className="form-control" onChange={handleForm} />
                    </div>
                   
                    <button className="btn btn-primary">Siųsti</button>
                </form>
            </div>
        
        </>
    )
}

export default AddNewTyres