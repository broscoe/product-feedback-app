import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
        addNewSuggestion();
        let dataObj = formData;
        // console.log(dataObj);
        // console.log(JSON.stringify(formData))
    
        //----send dataObj to backend----
    
        //----checks the data that is going to be sent to api----
        console.log(formData, "in submit")
    
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
        <Link to="/"> {`< Go Back`}</Link>

            <form onSubmit={handleSubmit}>
            <label htmlFor="feedback_title">
                <p>feedback Title</p>
                <p>Add a short, descriptive headline</p>
                </label>
          <input
            placeholder="Feedback Title"
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
          <input
            placeholder="category"
            type="category"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
          <label htmlFor="feedback detail">
            <p>Feedback Detail</p>
            <p>Include any specific comments on what should be improved, added, etc.</p>
          </label>
          <input
            placeholder="feedback detail"
            type="text"
            name="feedback_detail"
            id="feedback_detail"
            value={formData.feedback_detail}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
            </form>
        </>
    )
    
}
