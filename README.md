# PSX Download Helper NodeJS

This project is inspired from https://psxdownloadhelper.codeplex.com/

Since `psx download helper` only runs on windows machine and I don't have one,
I decided to write a simple NodeJS script for it.

I have tested this to work with the app `Twitch` :tada:
Download the files and put it in the data folder __without renaming__.

Next, I will be testing with big games (over 4 GB).

### Usage
1. Clone this project
2. Run `npm i`
3. Start the script `debug=send node index.js`. This will start the server on `8081` port
4. Start downloading some game/app on your ps4. Once it has started, pause it.
5. Put your IP address and port (8081) in the network settings of ps4.
6. Resume the download. It will fail, check the console and grab the link.
7. Download the file using your favourite download manager and put it in the data folder
8. Resume download again. This time the download bar should increase. Repeat step 6-8 until all the parts are downloaded. You can save time by downloading all the parts before hand.