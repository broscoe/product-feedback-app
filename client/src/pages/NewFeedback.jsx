import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './newFeedback.css'
//import '../index.css';

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
      <div id="formContainer">
        <Link to="/" className="goBack"> {`< Go Back`}</Link>


        <form onSubmit={handleSubmit}>
          <img src="../assets/icons/icon-plus.svg" alt="Plus Icon" />
          <label htmlFor="feedback_title">
            <h3>feedback Title</h3>
            <h4>Add a short, descriptive headline</h4>
          </label>

          <input
            type="text-area"
            name="feedback_title"
            id="feedback_title"
            value={formData.feedback_title}
            onChange={handleChange}
            required
          />

          <label htmlFor="category">
            <h3>Category</h3>
            <h4>Choose a category for your feedback</h4>
          </label>

          <select
            placeholder="category"
            type="category"
            name="category"
            id="category"
            //defaultValue="FEATURE"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="FEATURE">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="ENHANCEMENTS">Enhancement</option>
            <option value="BUG">Bug</option>
          </select>

          <label htmlFor="feedback_detail">
            <h3>Feedback Detail</h3>
            <h4>Include any specific comments on what should be improved, added, etc.</h4>
          </label>

          <textarea
            type="text"
            name="feedback_detail"
            id="feedback_detail"
            value={formData.feedback_detail}
            onChange={handleChange}
            required
          />

          <div id="buttonContainer">
            <button type="reset" className="cancelButton">Cancel</button>
            <button type="submit" className="addFeedback">Add Feedback</button>
          </div>

        </form>
      </div>
    </>
  )

}