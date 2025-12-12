import React, { useState } from 'react';
import { CLOUDINARY_CONFIG } from '../config/cloudinary';

const CloudinaryTest = () => {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    setTestResult(null);

    try {
      // Create a test file
      const testBlob = new Blob(['Cloudinary test'], { type: 'text/plain' });
      const testFile = new File([testBlob], 'cloudinary-test.txt', { type: 'text/plain' });

      const formData = new FormData();
      formData.append('file', testFile);
      formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

      console.log('Testing Cloudinary configuration:');
      console.log('Cloud Name:', CLOUDINARY_CONFIG.cloudName);
      console.log('Upload Preset:', CLOUDINARY_CONFIG.uploadPreset);
      console.log('API URL:', CLOUDINARY_CONFIG.apiUrl);

      const response = await fetch(CLOUDINARY_CONFIG.apiUrl, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setTestResult({
          success: true,
          message: '✅ Cloudinary connection successful!',
          details: {
            uploadedUrl: data.secure_url,
            publicId: data.public_id,
            size: data.bytes
          }
        });
      } else {
        setTestResult({
          success: false,
          message: `❌ Upload failed: ${data.error?.message || 'Unknown error'}`,
          details: data.error
        });
      }
    } catch (error) {
      setTestResult({
        success: false,
        message: `❌ Error: ${error.message}`,
        details: error
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      margin: '20px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Cloudinary Connection Test</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <p><strong>Cloud Name:</strong> {CLOUDINARY_CONFIG.cloudName}</p>
        <p><strong>Upload Preset:</strong> {CLOUDINARY_CONFIG.uploadPreset}</p>
        <p><strong>API URL:</strong> {CLOUDINARY_CONFIG.apiUrl}</p>
      </div>

      <button 
        onClick={testConnection}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '14px'
        }}
      >
        {loading ? 'Testing...' : 'Test Connection'}
      </button>

      {testResult && (
        <div style={{
          marginTop: '15px',
          padding: '15px',
          backgroundColor: testResult.success ? '#d4edda' : '#f8d7da',
          border: `1px solid ${testResult.success ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '4px',
          color: testResult.success ? '#155724' : '#721c24'
        }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
            {testResult.message}
          </p>
          <details>
            <summary style={{ cursor: 'pointer', marginTop: '10px' }}>
              Show Details
            </summary>
            <pre style={{
              marginTop: '10px',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '12px'
            }}>
              {JSON.stringify(testResult.details, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default CloudinaryTest;