
import './App.css';
import './bootstrap.min.css'

import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';

import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
   
    <div className="container bg-white rounded-3px" style={{ backgroundColor: 'black', minHeight: 'auto', borderRadius:'10px' , paddingTop:'10px' }} >
      {/* <Link to='/'>List</Link> |
      <Link to="/add">Add</Link> |
      <Link to="/update/:id">Update</Link> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark mb-3  " style={{ borderRadius:'10px'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>Form-Page</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active btn btn-light text-dark custom-link" style={{ width: '100px',marginRight:'5px' }} aria-current="page" to='/'>LIST</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active btn btn-light text-dark custom-link" aria-current="page" to="/add" style={{ width: '100px' }}>ADD</Link>
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/update/:id">UPDATE</Link>
            </li> */}
            
          </ul>
        </div>
      </div>
    </nav>
      <Routes>
        <Route path='/' element={<List />} exact/>
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
