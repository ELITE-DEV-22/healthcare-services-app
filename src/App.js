// src/App.js
import React, { useState } from "react";
import Navbar from "./components/NavBar";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm"; // Import the form component

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "Comprehensive health checkup.",
      price: 50,
    },
    {
      id: 2,
      name: "Dental Cleaning",
      description: "Complete dental hygiene service.",
      price: 80,
    },
    {
      id: 3,
      name: "Physical Therapy",
      description: "Rehabilitation and pain management.",
      price: 100,
    },
    {
      id: 4,
      name: "Mental Health Counseling",
      description: "One-on-one therapy sessions.",
      price: 150,
    },
  ]);

  const [editingService, setEditingService] = useState(null); // State to track the service being edited
  const [addingService, setAddingService] = useState(false);
  // Function to update the service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditingService(null); // Clear the editing state after update
  };

  const editService = (service) => {
    setEditingService(service); // Set the service to be edited
  };

  const deleteService = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  const addService = (newService) => {
    newService.id = services.length + 1;
    setServices([...services, newService]);
    setAddingService(false);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Healthcare Services</h2>
          <button
            className="btn btn-primary"
            onClick={() => setAddingService(true)} // Show the form when clicking Add Service
          >
            Add Service
          </button>
        </div>
      </div>
      <ServiceList
        services={services}
        onEdit={editService}
        onDelete={deleteService}
      />
      {editingService && (
        <ServiceForm service={editingService} updateService={updateService} />
      )}
      {addingService && (
        <ServiceForm
          service={{ name: "", description: "", price: "" }}
          updateService={addService}
        />
      )}
    </div>
  );
}

export default App;
