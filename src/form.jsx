import React, { useRef, useState } from "react";

const Form = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  // eslint-disable-next-line
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };
    setSubmittedData([...submittedData, newData]);
    setFormData({});
    // Clear input fields
    nameRef.current.value = "";
    ageRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameRef} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" ref={ageRef} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" ref={addressRef} required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.email}</td>
                  <td>{data.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Form;