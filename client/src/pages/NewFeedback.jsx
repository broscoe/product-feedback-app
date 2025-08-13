import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NewFeedback() {

  const [formData, setFormData] = useState({
    feedback_title: '',
    category: '',
    feedback_detail: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = (e) => {

    e.preventDefault();
    
    //----send dataObj to backend----
     addNewSuggestion()

    //----checks the data that is going to be sent to api----
    //console.log(formData, "in submit")

    // Reset the form
    setFormData({ feedback_title: '', category: '', feedback_detail: '' });
  };

  const addNewSuggestion = async () => {

    try {

      await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("api error:", err)
    }
  };

  return (

    <>
      <Link to="/" className="goBack"> {`< Go Back`}</Link>

      <form onSubmit={handleSubmit}>

        <label htmlFor="feedback_title">
          <p>feedback Title</p>
          <p>Add a short, descriptive headline</p>
        </label>

        <input
          type="text"
          name="feedback_title"
          id="feedback_title"
          value={formData.feedback_title}
          onChange={handleChange}
        />

        <label htmlFor="category">
          <p>Category</p>
          <p>Choose a category for your feedback</p>
        </label>

        <select
          placeholder="category"
          type="category"
          name="category"
          id="category"
          //defaultValue="FEATURE"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="FEATURE">Feature</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="ENHANCEMENTS">Enhancement</option>
          <option value="BUG">Bug</option>
        </select>

        <label htmlFor="feedback_detail">
          <p>Feedback Detail</p>
          <p>Include any specific comments on what should be improved, added, etc.</p>
        </label>

        <input
          type="text"
          name="feedback_detail"
          id="feedback_detail"
          value={formData.feedback_detail}
          onChange={handleChange}
        />

        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>

      </form>
    </>
  )

}