import { useState } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="App">
      <header className={`transition-all duration-500 ease-in-out ${isHovered ? 'h-64' : 'h-16'} bg-blue-500 flex items-center justify-center`}>
        <a
          href="#"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-white"
        >
          Ссылка
        </a>
      </header>
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bg-blue-500 h-64 flex items-center justify-center">
          <h1 className="text-4xl text-white">Расширенный заголовок</h1>
        </div>
      )}
    </div>
  );
}

export default App;
