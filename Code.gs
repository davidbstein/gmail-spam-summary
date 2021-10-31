function main() {
  listAllSpam();
}

function spamThreadToString(thread) {
  const msg = thread.getMessages()[0]
  const message = Utilities.formatString(
    "%s\n - %s\n - %s\n\n", 
    th.getFirstMessageSubject(), 
    msg.getFrom(), 
    msg.getReplyTo()
  );
}

function spamThreadToHTML(thread) {
  const msg = thread.getMessages()[0]
  const htmlMessage = Utilities.formatString(
    "<p> <a href='%s'>%s</a> <br/> FROM: %s <i>%s</i> <br/> TO: %s <p>", 
    getLink(msg, true), 
    (th.getFirstMessageSubject()), 
    (msg.getFrom()), 
    (msg.getReplyTo()), 
    (msg.getTo()));
}

/**
 * Given a message, return a link to a search function that will find exclusively the message (for anyone one who recieved the message)
 * For spam or trash, add the second variable.
 */
function getLink(message, allowSpam) {
  msgid = message.getHeader("Message-ID")
  return Utilities.formatString(
    "https://mail.google.com/mail/u/0/#search/rfc822msgid%3A%s%s", 
    msgid, allowSpam ? "+in%3Aspam" : "")
}

function getEmail(tag){
  const email = Session.getActiveUser().getEmail();
  if (tag) {
    return email.replace("@", `+{tag}@`)
  }
  return email
}


/**
 * Check for unread spam.
 * If there is unread spam, create a list of all unread spam and email it to my inbox.
 * If the email sends successfully, mark all spam as read.
 */
function listAllSpam(){
  const spamThreads = GmailApp.search("is:unread is:spam"); //GmailApp.getSpamThreads();
  var notification = ""
  var htmlNotification = ""
  var count = 0;
  for (var th of spamThreads){
      notification += spamThreadToString(thread)
      htmlNotification += spamThreadToHTML(thread)
      count++;
  }
  if (count == 0){return;}
  GmailApp.sendEmail(
    getEmail("spam_summary"), 
    ""+count+" new spam messages recieved!", 
    notification,
    {htmlBody: "<p> this email was sent to you by an addon that you or someone with access to your account installed in your gmail settings or at script.google.com; disable the 'Gmail Spam Summary' app to turn it off.</p>" + htmlNotification}  
  );
  for (var th of spamThreads){
    th.markRead();
  }
}
