import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleLeaseAction } from '../redux/lease/lease';

const MyLeaseDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { leaseDetails } = useSelector((state) => state);
  const { lease, loading, err: error } = leaseDetails;

  useEffect(() => {
    dispatch(getSingleLeaseAction(params.lease_id));
  }, [dispatch]);

  return (
    <div className="container">
      {error && (
      <p className="alert alert-danger">
        {error}
      </p>
      ) }
      {loading ? 'loading' : (
        <div className=" card mb-3 mt-5">
          <div className="row g-0">
            <div className="col-md-5">
              <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-100 img-fluid rounded-start" alt="..." />
              {' '}

            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title text-center">
                  {lease.leaseDetails.name}
                </h5>
                <p className="text-center">Lorem Ipsum Depricano lasander Lorem Ipsum Depricano </p>

                <table className="table">
                  <tbody>
                    <tr>
                      <td />
                      <td>City</td>
                      <td> - </td>
                      <td />
                      <td>{lease.apartmentDetails.name}</td>
                    </tr>
                    <tr>
                      <td />

                      <td>Monthly Rent</td>
                      <td> - </td>
                      <td />
                      <td>
                        $
                        {lease.apartmentDetails.monthly_rent}
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>Maintenance Fee</td>
                      <td> - </td>
                      <td />
                      <td>
                        $
                        {lease.apartmentDetails.maintenance_fee}
                      </td>
                    </tr>
                    <tr>
                      <td />

                      <td>Expiry Date</td>
                      <td> - </td>
                      <td />
                      <td>{lease.apartmentDetails.reservation_expiry_date}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-center text-info  my-5">Interiors</h2>
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2 g-2 g-lg-3 mb-5 ">
        { loading ? '' : (lease.apartmentDetails.interior.map((interior) => (
          <div key={interior} className="col d-flex justify-content-center ">
            <div className="p-3 border bg-light h-75 w-75">
              <img src={interior} className="img-fluid rounded-start h-100 w-100 align-center" alt="..." />
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};

export default MyLeaseDetails;
