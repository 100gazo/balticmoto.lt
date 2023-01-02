import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import axios from 'axios';
import MainContext from './context/MainContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

// import Alert from './components/Alert/Alert'
import './App.css';

// Admin
// Moto components
import NewMoto from './pages/admin/Moto/New';
import EditMoto from './pages/admin/Moto/Edit';
import AdminPannelMoto from './pages/admin/Moto/AdminPannel';
// NewParts components
import AddNewPart from './pages/admin/PartsNew/New';
import AdminPannelParts from './pages/admin/PartsNew/AdminPannel';
import EditNewPart from './pages/admin/PartsNew/Edit';
// UsedParts components
import AddUsedPart from './pages/admin/PartsUsed/New';
import AdminPannelPartsUsed from './pages/admin/PartsUsed/AdminPannel';
import EditUsedPart from './pages/admin/PartsUsed/Edit';
// Trips components
import AdminPannelTrips from './pages/admin/Trips/AdminPannel';
import AddTrips from './pages/admin/Trips/New';
import EditTrips from './pages/admin/Trips/Edit';
// NewTyres components
import AdminPannelTyresNew from './pages/admin/TyresNew/AdminPannel';
import AddNewTyres from './pages/admin/TyresNew/New';
import EditNewTyres from './pages/admin/TyresNew/Edit';
// UsedTyres components
import AdminPannelTyresUsed from './pages/admin/TyresUsed/AdminPannel';
import AddUsedTyres from './pages/admin/TyresUsed/New';
import EditUsedTyres from './pages/admin/TyresUsed/Edit';


// Public
import Login from './pages/public/Login';
import Register from './pages/public/Register';



const App = () => {

  const [userInfo, setUserInfo] = useState({})

  const contextValues = {  userInfo, setUserInfo }

  // useEffect(() => {
  //   axios.get('/api/users/check-auth/')
  // .then(resp => {
  //   setUserInfo(resp.data)
  // })
  // }, [])

  return (
      <BrowserRouter>
        <MainContext.Provider value={contextValues}>
          <Header />
          <div className='container'>
            <Routes>
              {/* {admin routes} */}
              {userInfo.role === 1 &&
              <Route path="admin"> 
                      <Route path="moto/new" element={<NewMoto />} />
                      <Route path='moto/edit/:id' element={<EditMoto />} />
                      <Route path='moto/' element={<AdminPannelMoto />} />
                      <Route path='new-parts/new' element={<AddNewPart />} />
                      <Route path='new-parts/' element={<AdminPannelParts />} />
                      <Route path='new-parts/edit/:id' element={<EditNewPart />} />
                      <Route path='used-parts/edit/:id' element={<EditUsedPart/>} />
                      <Route path='used-parts/' element={<AdminPannelPartsUsed/>} />
                      <Route path='used-parts/new' element={<AddUsedPart/>}/>
                      <Route path='trips/' element={<AdminPannelTrips/>}/>
                      <Route path='trips/new' element={<AddTrips/>}/>
                      <Route path='trips/edit/:id' element={<EditTrips/>}/>
                      <Route path='new-tyres/' element={<AdminPannelTyresNew/>}/>
                      <Route path='new-tyres/new' element={<AddNewTyres/>}/>
                      <Route path='new-tyres/edit/:id' element={<EditNewTyres/>}/>
                      <Route path='used-tyres/' element={<AdminPannelTyresUsed/>}/>
                      <Route path='used-tyres/new' element={<AddUsedTyres/>}/>
                      <Route path='used-tyres/edit/:id' element={<EditUsedTyres/>}/>
              </Route>}
            {/* } */}

            {/* public routes */}
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>

            </Routes>
          </div>
          <Footer />
        </MainContext.Provider>
      </BrowserRouter>

  )
}


export default App;
