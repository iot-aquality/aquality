function Notification({ tipo, nivel }) {
    // Determinar el color y el texto según el tipo y el nivel

    const color = nivel === 'alto' ? 'bg-red-300' : 'bg-yellow-300';
  
  
    return (
        <button className={`relative ${color} p-3 mt-5`}>
          <h1>{tipo}</h1>
          <span className="absolute flex h-10 w-10 right-1 top-1">
            <span className="text-center animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          </span>
        </button>
      );
    }

export default Notification;