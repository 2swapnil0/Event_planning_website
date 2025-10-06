# Google Drive Integration for Your Gallery

This is the final, definitive version of the script. It is optimized for speed and includes the necessary CORS header to fix the "Error fetching images" issue.

## Step 1: Update your Google Apps Script

1.  Go to the [Google Apps Script dashboard](https://script.google.com/home) and open your script project.
2.  Delete the old content in the `Code.gs` file and paste the **new, final CORS-enabled code** below:

```javascript
function doGet(e) {
  var folderId = e.parameter.folderId;
  var page = parseInt(e.parameter.page, 10) || 1;
  var limit = parseInt(e.parameter.limit, 10) || 6;

  if (!folderId) {
    return ContentService.createTextOutput(JSON.stringify({ error: "folderId parameter is missing." })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var folder = DriveApp.getFolderById(folderId);
    var files = folder.getFiles();
    var imageList = [];
    var startIndex = (page - 1) * limit;
    var endIndex = startIndex + limit;
    var i = 0;

    while (files.hasNext()) {
      var file = files.next();
      if (i >= startIndex && i < endIndex) {
        var fileId = file.getId();
        var fileName = file.getName();
        var directLink = "https://drive.google.com/thumbnail?id=" + fileId + "&sz=w1000";
        
        imageList.push({
          id: fileId,
          title: fileName,
          src: directLink
        });
      }
      i++;
      if (i >= endIndex) {
        break;
      }
    }

    // This is the crucial part: Add the CORS header
    var output = ContentService.createTextOutput(JSON.stringify(imageList)).setMimeType(ContentService.MimeType.JSON);
    output.withHeaders({
      "Access-Control-Allow-Origin": "*" // Allows any domain to access this script
    });
    return output;

  } catch (error) {
    var errorOutput = ContentService.createTextOutput(JSON.stringify({ 
      error: "An error occurred.",
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
    errorOutput.withHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    return errorOutput;
  }
}
```

4.  Save the project.

## Step 2: Redeploy the Script

1.  In the Apps Script editor, click on **Deploy** > **Manage deployments**.
2.  Find your active deployment, click the **pencil icon (Edit)**.
3.  From the **Version** dropdown, select **New version**.
4.  Click **Deploy**.

Your existing Web App URL will now be running the final, corrected script.

## Step 3: Let me know when you're done

Please let me know once you have updated and redeployed the script. The gallery will then be fully functional.