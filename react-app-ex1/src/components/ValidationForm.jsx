import { useState } from "react";

function ValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation rules
    if (formData.name.length < 2) {
      newErrors.name = "Name must contain at least two characters.";
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }

    const age = calculateAge(formData.dob);
    if (isNaN(age) || age < 19) {
      newErrors.dob = "You must be at least 19 years old.";
    }

    setErrors(newErrors);

    // If no errors → success
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>User Validation Form</h2>

      {/* Name */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* DOB */}
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
  );
}

export default ValidationForm;