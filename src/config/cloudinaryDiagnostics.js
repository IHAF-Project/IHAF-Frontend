import { CLOUDINARY_CONFIG } from './cloudinary';

export const diagnosticCloudinary = async () => {
  console.log('=== Cloudinary Diagnostic Test ===');
  console.log('Cloud Name:', CLOUDINARY_CONFIG.cloudName);
  console.log('Upload Preset:', CLOUDINARY_CONFIG.uploadPreset);
  console.log('API URL:', CLOUDINARY_CONFIG.apiUrl);
  console.log('');

  // Test 1: Check if cloud name is valid format
  console.log('Test 1: Cloud name format validation');
  if (CLOUDINARY_CONFIG.cloudName && CLOUDINARY_CONFIG.cloudName.length > 0) {
    console.log('✅ Cloud name is present:', CLOUDINARY_CONFIG.cloudName);
  } else {
    console.log('❌ Cloud name is missing or empty');
    return;
  }

  // Test 2: Try a simple upload request to get actual error
  console.log('\nTest 2: Testing upload endpoint');
  
  const testBlob = new Blob(['test'], { type: 'text/plain' });
  const testFile = new File([testBlob], 'diagnostic-test.txt', { type: 'text/plain' });
  
  const formData = new FormData();
  formData.append('file', testFile);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

  try {
    const response = await fetch(CLOUDINARY_CONFIG.apiUrl, {
      method: 'POST',
      body: formData
    });

    const responseData = await response.json();
    
    if (response.ok) {
      console.log('✅ Upload successful!');
      console.log('Uploaded URL:', responseData.secure_url);
      return { success: true, data: responseData };
    } else {
      console.log('❌ Upload failed with status:', response.status);
      console.log('Error details:', responseData.error);
      
      // Provide specific solutions based on error
      if (responseData.error?.message === 'cloud_name is disabled') {
        console.log('\n🔧 Solution:');
        console.log('1. Log into https://cloudinary.com');
        console.log('2. Verify your account is ACTIVE (not in trial restrictions)');
        console.log('3. Go to Dashboard → Settings → Account');
        console.log('4. Check if account restrictions are enabled');
        console.log('5. Ensure upload preset "ihaf_uploads" exists and is UNSIGNED');
        console.log('6. Try activating/reactivating your account');
      } else if (responseData.error?.message === 'Upload preset not found') {
        console.log('\n🔧 Solution:');
        console.log('1. Go to Cloudinary Dashboard');
        console.log('2. Settings → Upload');
        console.log('3. Create/verify upload preset named "ihaf_uploads"');
        console.log('4. Set signing mode to UNSIGNED');
        console.log('5. Save and test again');
      }
      
      return { success: false, error: responseData.error };
    }
  } catch (error) {
    console.log('❌ Network error:', error.message);
    console.log('\n🔧 This might indicate:');
    console.log('1. Network connectivity issue');
    console.log('2. CORS problem (check Cloudinary CORS settings)');
    console.log('3. Invalid URL format');
    return { success: false, error: error.message };
  }
};

// Run this in browser console to diagnose
window.diagnosticCloudinary = diagnosticCloudinary;