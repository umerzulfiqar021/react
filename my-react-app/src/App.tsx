import { useState } from 'react';
import Splash from './pages/Splash';
import DestinationSelection from './pages/DestinationSelection';
import Dashboard from './pages/Dashboard';

type ScreenState = 'splash' | 'destination' | 'dashboard';

function App() {
  const [screen, setScreen] = useState<ScreenState>('splash');
  const [selectedCity, setSelectedCity] = useState<'dubai' | 'bali'>('dubai');

  const handleSplashFinish = () => {
    setScreen('destination');
  };

  const handleDestinationSelection = (city: 'dubai' | 'bali') => {
    setSelectedCity(city);
    setScreen('dashboard');
  };

  const handleLogout = () => {
    setScreen('splash');
  };

  if (screen === 'splash') {
    return <Splash onFinish={handleSplashFinish} />;
  }

  if (screen === 'destination') {
    return <DestinationSelection onContinue={handleDestinationSelection} />;
  }

  return (
    <Dashboard 
      selectedCity={selectedCity} 
      onCityChange={setSelectedCity} 
      onLogout={handleLogout} 
    />
  );
}

export default App;
