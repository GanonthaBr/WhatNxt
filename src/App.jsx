import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TransitionGuide from './pages/TransitionGuide';
import DegreePlanner from './pages/DegreePlanner';
import Alumni from './pages/Alumni';
import AIAssistant from './pages/AIAssistant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="transition-guide" element={<TransitionGuide />} />
          <Route path="degree-planner" element={<DegreePlanner />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="ai-assistant" element={<AIAssistant />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
