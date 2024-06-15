import { useEffect, useState } from "react";
import List from "../components/List";
import Map from "../components/Map";
import Details from "../components/Details";
import { useDispatch } from "react-redux";
import { getServices } from "../store/actions/serviceActions";

function Home() {
  const dispatch = useDispatch();
  const [selectedServiceId, setServiceId] = useState(null);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <>
      <div className="w-100 mt-4">
        <div className="row">
          <div className="col-md-6">
            <List
              selectedService={selectedServiceId}
              onServiceSelect={(id) => setServiceId(id)}
            />
          </div>
          <div className="col-md-6">
            <Map onServiceSelect={(id) => setServiceId(id)} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            {selectedServiceId && (
              <Details
                toggleModal={() => setServiceId(null)}
                id={selectedServiceId}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
