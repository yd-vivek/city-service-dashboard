function Filter({
  selectedType,
  selectedStatus,
  handleTypeChange,
  handleStatusChange,
}) {
  return (
    <div className="row mb-2">
      <div className="col-6 text-left">
        <label>Filter by Type</label>
        <select
          onChange={handleTypeChange}
          value={selectedType}
          className="form-select form-select-sm outline-none"
        >
          <option value="all">All</option>
          <option value="hospital">Hospital</option>
          <option value="police">Police</option>
          <option value="park">Park</option>
        </select>
      </div>
      <div className="col-6 text-left">
        <label>Filter by Status</label>
        <select
          onChange={handleStatusChange}
          value={selectedStatus}
          className="form-select form-select-sm outline-none"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">In Active</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
