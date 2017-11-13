# PSX Download Helper NodeJS

This project is inspired from https://psxdownloadhelper.codeplex.com/

Since `psx download helper` only runs on windows machine and I don't have one,
I decided to write a simple NodeJS script for it.

I have tested this to work with the app `Twitch` :tada: <br/>
Download the files and put it in the data folder __without renaming__. <br/>
[TWITCH-file1](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA03398_00/3/f_82db308fa9e8f6bc182184bda7356aff43fed62047b1628f38d4809dc076a129/f/EP8816-CUSA03398_00-TWITCHPS4APPSCEE.pkg?downloadId=00000050&du=000000000000005000e21de152f381e2&country=in&downloadType=ob&q=a8318f20bb9240e28bc92c6539296c53e7b1ba45be89a14559d619693330d2b3&threadId=0&serverIpAddr=192.168.1.3&r=00000055)
[TWITCH-file2](http://gs2.ww.prod.dl.playstation.net/gs2/ppkgo/prod/CUSA03398_00/11/f_61028cb42c1a6b407a14bb41b00f2fe68964a093b661014cdc45924ce817aba4/f/EP8816-CUSA03398_00-TWITCHPS4APPSCEE-A0111-V0100.pkg?downloadId=00000052&du=000000000000005200e21de2eb164f9e&downloadType=ob&product=0184&threadId=1&serverIpAddr=192.168.1.3&r=00000046)

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