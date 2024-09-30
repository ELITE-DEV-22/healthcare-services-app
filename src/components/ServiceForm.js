import React, { useState } from "react";

const ServiceForm = ({ service, updateService }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const newService = {
        id: service.id, // Use existing id for editing, or undefined for a new service
        name,
        description,
        price: parseFloat(price), // Convert price to a number
      };
      updateService(newService);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-5 p-4 bg-light rounded shadow-sm"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Service Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-success">
        Save Service
      </button>
    </form>
  );
};

export default ServiceForm;
