import { useSelector } from "react-redux";

const Details = ({ id, toggleModal }) => {
  const service = useSelector((state) =>
    state.services.services.find((s) => s.id === id)
  );

  if (!service) return <></>;

  return (
    <div className="container mt-5">
      <div
        className="modal show"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
        onClick={toggleModal}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{service.name}</h5>
            </div>
            <div className="modal-body text-left">
              <div>Type: {service.type}</div>
              <div>Status: {service.status}</div>
              <div>Lat: {service.lat}</div>
              <div>Long: {service.lng}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
