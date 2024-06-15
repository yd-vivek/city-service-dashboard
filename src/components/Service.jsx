function Service({ service, selectedService, onServiceSelect }) {
  return (
    <li
      onClick={() => onServiceSelect(service.id)}
      key={service.id}
      className={`list-group-item pointer text-left ${
        selectedService === service.id ? "active" : ""
      }`}
    >
      <div className="d-flex justify-content-between">
        <span className="text-capitalize h5">{service.name}</span>{" "}
        <span className="text-capitalize">{service.status}</span>
      </div>
      <span className="text-capitalize">{service.type}</span>
    </li>
  );
}

export default Service;
