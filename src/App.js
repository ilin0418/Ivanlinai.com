import './App.css';
import AppRoutes from './AppRoutes';
import Background from './components/Background';
import 'react-tooltip/dist/react-tooltip.css';
function App() {
  return (
    <div className="App">
      <Background/>
      <AppRoutes/>
    </div>
  );
}

export default App;
