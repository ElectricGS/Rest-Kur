# Rest-Kur
An automated service that informs your when the date you wanted in the restaurant becomes available. 

# Description
Rest-Kur is built to check if a seat in your beloved restaurant becomes available.
Currently scanning for restaurants that are using Ontopo service.
Tabit is coming soon too.
The project runs as a Node.js application using cron to schedule the searches to occur every 15 minutes.

# Installation
1. clone this repo.
2. install Node.js (if not already installed)
3. run the command npm install.

# Usage
1. First you need to extract the slug which is the id of the restaurant on the Ontopo website.
    just navigate to your preferred restaurant and you will find it in the URL for example,
    the URL of Taizu restaurant is https://ontopo.co.il/36960535/ and the slug is 36960535
2. Edit the config.ts file which is located in /src/config/config.ts, and add your slug, your preferences, and email client details 
    that will send you the notification when a spot becomes available. <br/>
    **Note:** if you are using an email service other than Mailtrap you might also need to re-configure the email reporter
    which is located in /src/mailer/mailer.ts
3. Run npm start


