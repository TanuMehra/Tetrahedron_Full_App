'use client'
import { useState } from 'react';
import styles from './CreateBlogModal.module.css';

export default function CreateBlogModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    image: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }
    if (!formData.description.trim()) {
      setError('Description is required');
      return;
    }

    setIsLoading(true);

    try {
      // Get token from localStorage
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('You must be logged in to create a blog');
        setIsLoading(false);
        return;
      }

      // Create FormData object for multipart/form-data
      const submitFormData = new FormData();
      submitFormData.append('title', formData.title);
      submitFormData.append('description', formData.description);
      if (formData.date) {
        submitFormData.append('date', formData.date);
      }
      if (formData.image) {
        submitFormData.append('image', formData.image);
      }

      // Make API call
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: submitFormData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create blog');
      }

      setSuccess('Blog created successfully!');
      setFormData({
        title: '',
        description: '',
        date: '',
        image: null,
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message || 'An error occurred while creating the blog');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Create a New Blog</h2>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorMessage}>{error}</div>}
          {success && <div className={styles.successMessage}>{success}</div>}

          <div className={styles.formGroup}>
            <label htmlFor="title">
              Title <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter blog title"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">
              Description <span className={styles.required}>*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter blog description"
              rows="6"
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date (Optional)</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="image">Image (Optional)</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              disabled={isLoading}
            />
            {formData.image && (
              <p className={styles.fileName}>Selected: {formData.image.name}</p>
            )}
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
