import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const current_them = localStorage.getItem('current_them');
  const [them, setThem] = useState(current_them ? current_them : 'light');

  useEffect(() => { 
    localStorage.setItem('current_them', them)
  }, [them])
  return (
    <div className={`container ${them}`}>
      <Navbar them={them} setThem={setThem} />
    </div>
  );
};

export default App;
