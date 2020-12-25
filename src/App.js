import './App.css';
import { RenderRoutes } from './routing/RenderRoutes';
import ROUTES from './routing/routes';

function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
}

export default App;
