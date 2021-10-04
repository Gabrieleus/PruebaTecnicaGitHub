import Info from './components/Info';
import Titlebar from './containers/Titlebar';
import Search from './components/Api/Search'
import LiveSearch from './components/Api/LiveSearch';
function App() {

  return (
    <div className="">
      <Titlebar />
      <div style={{backgroundColor: '#696969'}}className=" ">
      <div className="">
        <br></br>
      <h3 className="text-center text-white">Ingrese la informacion de sus acudientes</h3>
      <br></br>
      <div className="m-0 vh-100 row justify-content-center align-items-center">
        <div style={{width: '500px'}}className="col-auto">
      <Info />
      </div>
      </div>
      </div>
      </div>
      <div style={{backgroundColor: '#696969'}}className="m-0 row justify-content-center ">
        <div style={{width: '500px'}}className="col-auto">
          <h3 className="text-white text-center">Consulte Los Repositorios por Nombre de usuario</h3>
          <Search />
          <br></br>
          </div>
      <div style={{backgroundColor: '#696969'}}className="m-0 row justify-content-center ">
        <div style={{width: '500px'}}className="">
          <h3 className="text-center text-white">Consulte Repositorio por nombre</h3>
          <LiveSearch />
          </div>
          </div>
          </div>
          </div>
  );
}

export default App;
