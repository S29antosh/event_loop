const Card =()=> {
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://source.unsplash.com/random"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card title</div>
          <p className="text-gray-700 text-base">Some card content.</p>
        </div>
      </div>
    );
  
}

export default Card;