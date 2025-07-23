import { CLOUDINARY_CONFIG } from './cloudinary';

// Test function to verify Cloudinary configuration
export const testCloudinaryConfig = async () => {
  console.log('=== Cloudinary Configuration Test ===');
  console.log('Cloud Name:', CLOUDINARY_CONFIG.cloudName);
  console.log('Upload Preset:', CLOUDINARY_CONFIG.uploadPreset);
  console.log('API URL:', CLOUDINARY_CONFIG.apiUrl);
  
  // Test with a simple text file
  const testBlob = new Blob(['Test file content'], { type: 'text/plain' });
  const testFile = new File([testBlob], 'test.txt', { type: 'text/plain' });
  
  const formData = new FormData();
  formData.append('file', testFile);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  
  try {
    console.log('Testing upload preset availability...');
    
    const response = await fetch(CLOUDINARY_CONFIG.apiUrl, {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Configuration test successful!');
      console.log('Test file uploaded:', data.secure_url);
      return { success: true, url: data.secure_url };
    } else {
      console.error('❌ Configuration test failed:');
      console.error('Status:', response.status);
      console.error('Error:', data.error);
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error('❌ Network error during test:', error);
    return { success: false, error: error.message };
  }
};

// Function to check if upload preset exists
export const checkUploadPreset = async () => {
  const testFormData = new FormData();
  testFormData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  
  // Create a minimal test file
  const testBlob = new Blob([''], { type: 'text/plain' });
  testFormData.append('file', testBlob);
  
  try {
    const response = await fetch(CLOUDINARY_CONFIG.apiUrl, {
      method: 'POST',
      body: testFormData
    });
    
    const data = await response.json();
    
    if (data.error && data.error.message === 'Upload preset not found') {
      return {
        exists: false,
        message: `Upload preset "${CLOUDINARY_CONFIG.uploadPreset}" not found. Please create it in your Cloudinary dashboard.`
      };
    }
    
    return {
      exists: true,
      message: `Upload preset "${CLOUDINARY_CONFIG.uploadPreset}" is available.`
    };
  } catch (error) {
    return {
      exists: false,
      message: `Error checking upload preset: ${error.message}`
    };
  }
};
