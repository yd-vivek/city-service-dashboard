import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByStatus,
  filterByType,
  searchServices,
} from "../store/actions/serviceActions";
import { useDebounce } from "use-debounce";
import Filter from "./Filter";
import Loader from "./Loader";
import Service from "./Service";

const List = ({ onServiceSelect, selectedService }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const isLoading = useSelector((state) => state.services.loading);
  const [debounced] = useDebounce(searchQuery, 500);

  // Note: Handling only basic search and filter, more complex can be implement like search and filter together
  useEffect(() => {
    dispatch(searchServices(debounced));
  }, [debounced, dispatch]);

  useEffect(() => {
    dispatch(filterByType(type));
  }, [type]);

  useEffect(() => {
    dispatch(filterByStatus(status));
  }, [status]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2 className="text-left">Service List</h2>
      <div className="card p-3 mb-2">
        <div className="card-content">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="form-control mb-3"
          />
          <Filter
            selectedType={type}
            selectedStatus={status}
            handleStatusChange={(e) => setStatus(e.target.value)}
            handleTypeChange={(e) => setType(e.target.value)}
          />
        </div>
      </div>
      <ul className="list-group">
        {isLoading && <Loader />}
        {services.map((service) => (
          <Service
            service={service}
            selectedService={selectedService}
            onServiceSelect={onServiceSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
