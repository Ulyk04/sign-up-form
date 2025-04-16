import { Routes , Route } from "react-router-dom";
import SignUpForm from "./component/SignUpForm";
import LoginForm from "./component/LoginForm";
import HelloPage from "./component/NewPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUpForm/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/hello' element={<HelloPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
