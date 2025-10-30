import './App.css'
import Card from './Component/Card';
import Nabvar from './Component/Nabvar';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div>
      <Nabvar />
      <br />
      <Card name="Aditya" edu="Ph.D." />
      <br />
      <Card name="Deepak" edu="M.Tech" />
      <br />
      <Card name="Rupak" edu="B.Tech"/>
    </div>
  )
}
export default App
