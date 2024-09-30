// src/components/ServiceList.js
import React from 'react';

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-3" key={service.id}>
            <div className="card h-100 d-flex flex-column">
              <div className="card-body flex-grow-1">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text">
                  <strong>Price: </strong>Rs.{service.price}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => onEdit(service)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(service.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
