import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images/sample.jpg';

function App() {
  return (
    <>
      <div>
        <div>
          <img src={img} height={200} width={200} alt="image " />
        </div>


        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Link</a></li>
                    <li><a class="dropdown-item" href="#">Another link</a></li>
                    <li><a class="dropdown-item" href="#">A third link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container-fluid mt-3">
          <h3>Navbar With Dropdown</h3>
          <p>This example adds a dropdown menu in the navbar.</p>
        </div>

        <div className="container mt-3">
          <h2>Basic Table</h2>
          <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>
          <table className="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
          <button bt-3>click</button>



        </div>


      </div>

    </>
  )
}

export default App
