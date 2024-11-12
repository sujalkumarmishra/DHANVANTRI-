const SearchResults = ({ results }) => {
    return (
      <div>
        {results.map((medicine, index) => (
          <div key={index} className="medicine-card">
            <img src={medicine.image} alt={medicine.name} />
            <h3>{medicine.name}</h3>
            <p>Formula: {medicine.formula}</p>
            <p>Price: ₹{medicine.price}</p>
            <p>Manufacturing: {medicine.manufacturing}</p>
            <p>Expiry: {medicine.expiry}</p>
            <p>Company: {medicine.company}</p>
            <p>{medicine.description}</p>
            <button>Compare</button>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default SearchResults;
  
   