# How to Validate Google Tag Manager (GTM) Installation

You have successfully added the GTM container ID: **GTM-5BC733J8**. Here are the ways to verify it is working correctly:

## 1. Developer Tools (Quickest Method)
1. Open your website in a browser.
2. Right-click anywhere and select **Inspect** (or press F12).
3. Go to the **Network** tab.
4. In the filter box, type `gtm`.
5. Refresh the page.
6. You should see a request for `gtm.js?id=GTM-5BC733J8`.
   - **Status:** Should be `200` (OK) or `304` (Not Modified).
   - **Initiator:** Should be `(index)` or your site URL.

## 2. View Page Source
1. Right-click on your website and select **View Page Source**.
2. Press `Ctrl+F` (or `Cmd+F` on Mac) and search for `GTM-5BC733J8`.
3. You should see two occurrences:
   - One in the `<head>` section (the main script).
   - One in the `<body>` section (the `<noscript>` fallback).

## 3. Google Tag Assistant (Extension)
1. Install the **Tag Assistant Legacy (by Google)** Chrome extension.
2. Navigate to your site.
3. Click the Tag Assistant icon in your browser toolbar.
4. Click **Enable** and then refresh the page.
5. It should show the tag `GTM-5BC733J8` as "Green" (Working) or "Blue" (Working with non-critical suggestions).

## 4. GTM Preview Mode (Best for Testing Tags)
1. Go to your Google Tag Manager account workspace.
2. Click the **Preview** button in the top right.
3. Enter your website URL and click **Connect**.
4. A new window will open with your site, and a "Tag Assistant Connected" badge should appear.
5. If it connects successfully, your GTM code is installed and working perfectly.
