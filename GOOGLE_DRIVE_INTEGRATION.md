# Google Drive Integration for Your Gallery

Follow these steps to securely connect your Google Drive folder to your website's gallery.

## Step 1: Create a Google Apps Script

1.  Go to the [Google Apps Script dashboard](https://script.google.com/home).
2.  Click on **New project**.
3.  Delete the default content in the `Code.gs` file and paste the following code:

```javascript
function doGet(e) {
  var folderId = e.parameter.folderId;
  if (!folderId) {
    return ContentService.createTextOutput(JSON.stringify({ error: "folderId parameter is missing." })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var imageList = [];

    while (files.hasNext()) {
      var file = files.next();
      var fileId = file.getId();
      var fileName = file.getName();
      // Construct a direct view link.
      var viewUrl = "https://drive.google.com/uc?export=view&id=" + fileId;
      
      imageList.push({
        id: fileId,
        title: fileName,
        src: viewUrl
      });
    }

    return ContentService.createTextOutput(JSON.stringify(imageList)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4.  Save the project. You can name it something like "Gallery Image Fetcher".

## Step 2: Deploy the Script as a Web App

1.  In the Apps Script editor, click on **Deploy** > **New deployment**.
2.  Click on the gear icon next to "Select type" and choose **Web app**.
3.  In the "New deployment" dialog:
    *   For **Description**, you can enter "Gallery Image Fetcher".
    *   For **Execute as**, select **Me (your email address)**.
    *   For **Who has access**, select **Anyone**. This is important so your website can access it.
4.  Click **Deploy**.
5.  Google will ask you to authorize the script. Click **Authorize access** and follow the prompts. You might see a "Google hasn't verified this app" warning. If so, click **Advanced** and then **Go to (your project name) (unsafe)**.
6.  After authorizing, you will be given a **Web app URL**. Copy this URL.

## Step 3: Provide the Web App URL

Please provide the copied Web app URL to me so I can integrate it into your website.