import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Card';
import Nav from './components/Nav';
function App() {
  return (
    <div>
      <Nav />
      <br />
      <Card name="mohan" edu="ph.D." />
      <br />
      <Card name="sohan" edu="M.tech" />
      <br />
      <Card name="rupak" edu="b.tech" />
    </div>
  )
}
export default App
