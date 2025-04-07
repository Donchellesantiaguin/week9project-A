import React, { useState } from "react";

const NewItemForm = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    inspiration: "",
    cover: "",
    slug: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, year } = formData;

    if (!name || !year) {
      alert("Please fill in at least 'name' and 'year'.");
      return;
    }

    const newItem = {
      ...formData,
      rank: Date.now(),
    };

    onAddItem(newItem);

    setFormData({
      name: "",
      year: "",
      inspiration: "",
      cover: "",
      slug: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <h3>Add a New DVD</h3>

      <label>
        Movie Title <span className="required">*</span>
        <input
          name="name"
          placeholder="Movie Title"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Slug (e.g. the-little-mermaid)
        <input
          name="slug"
          placeholder="Movie Name"
          value={formData.slug}
          onChange={handleChange}
        />
      </label>

      <label>
        Release Year <span className="required">*</span>
        <input
          name="year"
          placeholder="Release Year"
          type="number"
          value={formData.year}
          onChange={handleChange}
        />
      </label>

      <label>
        Inspiration
        <input
          name="inspiration"
          placeholder="Location Inspo"
          value={formData.inspiration}
          onChange={handleChange}
        />
      </label>

      <label>
        Cover Img (e.g. mermaid.jpg)
        <input
          name="cover"
          placeholder="Cover Image"
          value={formData.cover}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="princess-button">Add to Collection</button>
    </form>
  );
};

export default NewItemForm;
