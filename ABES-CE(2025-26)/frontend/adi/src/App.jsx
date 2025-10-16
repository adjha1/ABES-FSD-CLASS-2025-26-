import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from './assets/Images/logo.jpg';
function App() {
  return (
    <div>

      {/* start navbar code  */}
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            <img src={img} height={40} width={40} alt="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Link</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search" />
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div class="container-fluid mt-3">
        <h3>Navbar Forms</h3>
        <p>You can also include forms inside the navigation bar.</p>
      </div>
      {/* end navbar code */}

      <button type="button" class="btn btn-warning">Warning</button>
    </div>
  )
}
export default App
