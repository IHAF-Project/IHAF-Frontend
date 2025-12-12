# Cloudinary "cloud_name is disabled" - Troubleshooting Guide

## ⚠️ Error: `cloud_name is disabled`

This error indicates that your Cloudinary account or the specific cloud name has restrictions preventing uploads.

## Common Causes & Solutions

### 1. **New Account Not Activated**
**Problem**: Brand new Cloudinary accounts may have restrictions until fully activated.

**Solutions**:
- [ ] Log into https://cloudinary.com
- [ ] Check Dashboard → Settings → Account
- [ ] Look for any account activation messages
- [ ] Verify your email address is confirmed
- [ ] Wait 5-10 minutes for account activation to complete
- [ ] Try uploading again

### 2. **Trial Account Restrictions**
**Problem**: Trial accounts have upload limits and may be disabled after trial period.

**Solutions**:
- [ ] Check if your trial has expired
- [ ] Upgrade to a paid plan if needed
- [ ] Go to Settings → Billing to check account status
- [ ] Contact Cloudinary support

### 3. **Account Suspension**
**Problem**: Account might be suspended due to policy violations or payment issues.

**Solutions**:
- [ ] Check Dashboard for any alerts or notifications
- [ ] Go to Settings → Account Status
- [ ] Check Billing tab for payment issues
- [ ] Contact Cloudinary support at support@cloudinary.com

### 4. **Wrong Cloud Name**
**Problem**: The cloud name might be misspelled or incorrect.

**Solutions**:
- [ ] Go to Cloudinary Dashboard
- [ ] Check Settings → Account
- [ ] Copy the exact cloud name
- [ ] Update `.env` file with correct cloud name:
```
REACT_APP_CLOUD_NAME=your_correct_cloud_name
```
- [ ] Restart development server

### 5. **Upload Preset Not Configured**
**Problem**: The upload preset might not exist or not be set as "Unsigned".

**Solutions**:
- [ ] Go to Settings → Upload in Cloudinary Dashboard
- [ ] Look for "Upload presets" section
- [ ] Create or verify preset named `ihaf_uploads`
- [ ] Set **Signing Mode** to **Unsigned**
- [ ] Save the preset
- [ ] Test upload again

## Step-by-Step Activation Check

### For New Cloudinary Accounts:

1. **Create Account**
   - Go to https://cloudinary.com/users/register/free
   - Complete registration
   - Verify email address

2. **Verify Account**
   - Check your email for verification link
   - Click the verification link
   - Return to Cloudinary

3. **Create Upload Preset**
   - Go to Dashboard → Settings → Upload
   - Click "Add upload preset"
   - Name: `ihaf_uploads`
   - Signing Mode: **Unsigned** (important!)
   - Access Mode: **Public**
   - Click Save

4. **Get Cloud Name**
   - Go to Settings → Account
   - Copy your Cloud Name
   - Update `.env`:
   ```
   REACT_APP_CLOUD_NAME=your_cloud_name
   REACT_APP_UPLOAD_PRESET=ihaf_uploads
   ```

5. **Restart Application**
   ```bash
   npm start
   ```

6. **Test Upload**
   - Try uploading a file in the app
   - Check browser console for detailed errors

## Debugging Tips

### Check Browser Console

1. Open DevTools (F12)
2. Go to Console tab
3. Try uploading a file
4. Look for detailed error messages
5. Check Network tab to see the exact response from Cloudinary

### Run Diagnostic Test

Add this to your App.js temporarily:

```javascript
import { diagnosticCloudinary } from './config/cloudinaryDiagnostics';

// In your component
const testCloudinary = async () => {
  const result = await diagnosticCloudinary();
  console.log('Diagnostic result:', result);
};

// Call when needed
<button onClick={testCloudinary}>Test Cloudinary</button>
```

### Check Response Headers

In Network tab:
1. Find the upload request to `api.cloudinary.com`
2. Check the Response tab for exact error message
3. This will show if it's truly a `cloud_name` issue or something else

## Current Configuration

Your configuration file expects:
- **Cloud Name**: `dwmutgktv`
- **Upload Preset**: `ihaf_uploads`
- **Signing Mode**: Unsigned

**Make sure these exactly match your Cloudinary dashboard settings.**

## Contact Support

If you've tried all solutions:
1. Go to https://cloudinary.com/console/support
2. Create a support ticket
3. Include:
   - Your cloud name
   - Error message screenshot
   - Steps you've taken

## Quick Checklist

- [ ] Email verified
- [ ] Account activated (not in trial restrictions)
- [ ] Cloud name is correct
- [ ] Upload preset `ihaf_uploads` exists
- [ ] Upload preset is set to "Unsigned"
- [ ] Environment variables updated
- [ ] Development server restarted
- [ ] Tried incognito/private browser window
- [ ] Cleared browser cache