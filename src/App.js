import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import{ init } from 'emailjs-com';
init("user_xFpag1LUuWEOjVKvQVIJd");

function App() {
  return (
    <div className="App">
      <Form /> 
    </div>
  );
}

export default App;
