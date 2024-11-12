const Filters = ({ filters, setFilters }) => {
    const handleFilterChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <label>
          Type:
          <select name="type" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="tablet">Tablet</option>
            <option value="capsule">Capsule</option>
            <option value="syrup">Syrup</option>
          </select>
        </label>
  
        <label>
          Manufacturer:
          <select name="manufacturer" onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="Pfizer">Pfizer</option>
            <option value="GSK">GSK</option>
          </select>
        </label>
  
        <label>
          Price Range:
          <input
            type="range"
            name="price"
            min="0"
            max="100"
            onChange={handleFilterChange}
          />
        </label>
      </div>
    );
  };
  
  export default Filters;
  