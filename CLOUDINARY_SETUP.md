# Cloudinary Setup Guide

## Error: "Upload preset not found"

This error occurs when the upload preset specified in your configuration doesn't exist in your Cloudinary account.

## Solution: Create an Upload Preset

### Step 1: Log into Cloudinary Dashboard
1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Log into your account
3. Navigate to the **Settings** page

### Step 2: Create Upload Preset
1. Click on the **Upload** tab in Settings
2. Scroll down to **Upload presets** section
3. Click **Add upload preset**

### Step 3: Configure Upload Preset
1. **Preset name**: Enter `ihaf_uploads` (or update the REACT_APP_UPLOAD_PRESET in your .env file)
2. **Signing Mode**: Select **Unsigned** (this is crucial for client-side uploads)
3. **Use filename as public_id**: You can leave this unchecked
4. **Unique filename**: Recommended to check this box
5. **Overwrite**: You can leave this unchecked
6. **Resource type**: Select **Auto**
7. **Access mode**: Select **Public**

### Step 4: Optional Settings
- **Folder**: You can specify a folder like `ihaf/uploads` to organize your files
- **Tags**: Add tags like `ihaf`, `user-uploads` for better organization
- **Allowed formats**: You can restrict to specific formats like `jpg,png,pdf` if needed

### Step 5: Save
Click **Save** to create the upload preset.

## Alternative: Use an Existing Upload Preset

If you already have an upload preset in your Cloudinary account:
1. Go to Settings → Upload tab
2. Find your existing upload preset name
3. Update the `.env` file:
   ```
   REACT_APP_UPLOAD_PRESET=your_existing_preset_name
   ```

## Current Configuration

Your current configuration uses:
- **Cloud Name**: `di8yozs46`
- **Upload Preset**: `ihaf_uploads`

Make sure these values match your Cloudinary account settings.

## Testing

After creating the upload preset, restart your development server:
```bash
npm start
```

Then try uploading a file to test if the configuration works.

## Troubleshooting

1. **Cloud name is disabled**: Make sure you're using the correct cloud name from your Cloudinary dashboard
2. **Upload preset not found**: Ensure the preset exists and is set to "Unsigned"
3. **Access denied**: Make sure the upload preset allows the file type you're trying to upload

## Security Note

Unsigned upload presets allow anyone to upload files to your Cloudinary account. Consider adding restrictions like:
- File size limits
- Allowed file formats
- Upload rate limits
- Folder restrictions
