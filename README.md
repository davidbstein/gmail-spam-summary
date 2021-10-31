# Gmail Spam Summary

**Sometime Gmail's spam filter is too agressive. **

I was missing a lot of important emails, so I made a thing that emails me a summary of everything in my spam filter.

It takes about 2 minutes to set up, and you only need to set it up once.

It looks like this:

![Screen Shot 2021-10-31 at 14 40 41](https://user-images.githubusercontent.com/1490241/139597231-1ae02c42-2d65-4aaf-82d9-8db87f112929.png)

## Features

 - Checks for new spam at some regular interval - either hourly, daily, or weekly.
 - Sends a list of any new spam
 - Preivews include a link that will open the relevant message.
 - marks any spam that's appeared in the summary as "read"

## How to install.

 - I don't want your data, so I don't operate the service. Everything runs as a google script on your own account.
 1. Go to https://script.google.com/home
 2. Click "New Project"
 3. Copy the contents of [`Code.gs`](https://github.com/davidbstein/gmail-spam-summary/blob/main/Code.gs) into the editor.
 4. Open the "triggers" menu - the tiny clock on the left of the screen.
    - ![Screen Shot 2021-10-31 at 14 52 18](https://user-images.githubusercontent.com/1490241/139597686-ec0cb819-2ce9-4110-a424-15137ad106a2.png)
 5. Click the "Add Trigger" button in the bottom right corner
 6. \[OPTIONAL] The default settings will run the script hourly. The bottom two options allow you to change the interval. For a daily summary, use a "Day Timer" and choose the time of day you'd like an alert.
 7. The script will ask for permission. You may need to disable your popup blocker to see the confirmation window from Google.

**NOTE** The script works by checking for _unread_ messages, and marks messages as read when it includes them in a summary. You may want to empty your spam folder or mark everything in spam as "read" before running the script for the first time.
