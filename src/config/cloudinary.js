// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: process.env.REACT_APP_CLOUD_NAME || 'dwmutgktv',
  uploadPreset: process.env.REACT_APP_UPLOAD_PRESET || 'ihaf_uploads',
  apiUrl: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME || 'dwmutgktv'}/auto/upload`
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
    console.log('Cloud name:', CLOUDINARY_CONFIG.cloudName);
    
    const response = await fetch(CLOUDINARY_CONFIG.apiUrl, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Cloudinary upload failed:', errorData);
      
      // Detailed error handling
      if (errorData.error?.message === 'cloud_name is disabled') {
        const errorMsg = `Cloudinary Error: Your cloud name "${CLOUDINARY_CONFIG.cloudName}" is disabled. 
        
        Please try:
        1. Log into https://cloudinary.com
        2. Check Account Status in Dashboard → Settings → Account
        3. Verify the cloud name is correct and account is active
        4. Contact Cloudinary support if account is restricted
        5. For new accounts, ensure email verification is complete`;
        throw new Error(errorMsg);
      }
      
      if (errorData.error && errorData.error.message === 'Upload preset not found') {
        throw new Error(`Upload preset "${CLOUDINARY_CONFIG.uploadPreset}" not found. Please create an unsigned upload preset in your Cloudinary dashboard.`);
      }
      
      throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    
    if (!data.secure_url) {
      throw new Error('Upload succeeded but no secure URL returned');
    }

    console.log('Upload successful:', data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};
