import './App.scss';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/dashboard';
import data from './Backend/Data';

function App() {
  var empData = data.employees;
  return (
    <>
      <Dashboard empsdata = {empData}/>
      {/* <Login /> */}
    </>
  );
}

export default App;
