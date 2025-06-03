const Unauthorized = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-yellow-600">Unauthorized</h1>
          <p className="text-xl mt-3">You must log in to access this page.</p>
        </div>
      </div>
    );
  };
  
  export default Unauthorized;
  