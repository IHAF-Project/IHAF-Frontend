// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: process.env.REACT_APP_CLOUD_NAME || 'di8yozs46',
  uploadPreset: process.env.REACT_APP_UPLOAD_PRESET || 'ihaf_uploads',
  apiUrl: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME || 'di8yozs46'}/auto/upload`
};

// Upload function with better error handling
export const uploadToCloudinary = async (file) => {
  if (!file) {
    throw new Error('No file provided');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

  try {
    console.log('Uploading to:', CLOUDINARY_CONFIG.apiUrl);
    console.log('Using upload preset:', CLOUDINARY_CONFIG.uploadPreset);
    
    const response = await fetch(CLOUDINARY_CONFIG.apiUrl, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Cloudinary upload failed:', errorData);
      
      if (errorData.error && errorData.error.message === 'Upload preset not found') {
        throw new Error(`Upload preset "${CLOUDINARY_CONFIG.uploadPreset}" not found. Please create an unsigned upload preset in your Cloudinary dashboard.`);
      }
      
      throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.secure_url) {
      throw new Error('Upload succeeded but no secure URL returned');
    }

    console.log('Upload successful:', data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    
    // Re-throw with more context
    if (error.message.includes('cloud_name is disabled')) {
      throw new Error('Cloudinary configuration error: Please check your cloud name settings');
    }
    
    if (error.message.includes('Upload preset not found')) {
      throw new Error(`Upload preset "${CLOUDINARY_CONFIG.uploadPreset}" not found. Please create an unsigned upload preset in your Cloudinary dashboard with this name.`);
    }
    
    throw error;
  }
};
