# PSX Download Helper NodeJS

This project is inspired from https://psxdownloadhelper.codeplex.com/

Since `psx download helper` only runs on windows machine and I don't have one,
I decided to write a simple NodeJS script for it.

I have tested this to work with small and big games (over 4 GB).

Download links for a few free games to try out this script

| S/N | Name | Size | No. Of parts | Download Link | Description Link |
|-------|------|------|--------------|---------------|------------------|
| 1 | War Thunder	|  	2 |	7.16 |[download link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA00182_00/4/f_eaac94226dbcd51f4b2f346f49847c9e74c1a75f89edf84b5522e9b508da2b6a/f/EP4432-CUSA00182_00-WARTHUNDER000000_0.pkg) | 	[desc link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA00182_00/4/f_eaac94226dbcd51f4b2f346f49847c9e74c1a75f89edf84b5522e9b508da2b6a/f/EP4432-CUSA00182_00-WARTHUNDER000000.json) |
| 2 | Smite	|  	2 |	6.83 |[download link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA04584_00/1/f_530388a4e6ca8fb23b8ac3e5ac4f0821338f0245c097420030dfe97ebb439686/f/EP0331-CUSA04584_00-SMITEXXXXXXXXXXX_0.pkg) | 	[desc link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA04584_00/1/f_530388a4e6ca8fb23b8ac3e5ac4f0821338f0245c097420030dfe97ebb439686/f/EP0331-CUSA04584_00-SMITEXXXXXXXXXXX.json) |
| 3 | Never Winter	|  	4 |	12.83 |[download link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA05528_00/2/f_0bca3a5fc9c95a8e6da637c7c5b7df0ad1cbf85f484c8f55d8f2c4a6804c5025/f/EP1965-CUSA05528_00-2016NEVERWINTER1_0.pkg) | 	[desc link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA05528_00/2/f_0bca3a5fc9c95a8e6da637c7c5b7df0ad1cbf85f484c8f55d8f2c4a6804c5025/f/EP1965-CUSA05528_00-2016NEVERWINTER1.json) |
| 4 | Star trek online	|  	4 |	14.24 |[download link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA05744_00/1/f_24f8823915117df9520f1233d658990015499d486ee213f50d81093a5cf6fbaa/f/EP1965-CUSA05744_00-2016STARTREK0000_0.pkg) | 	[desc link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA05744_00/1/f_24f8823915117df9520f1233d658990015499d486ee213f50d81093a5cf6fbaa/f/EP1965-CUSA05744_00-2016STARTREK0000.json) |
| 5 | Warframe	|  	1 |	3.80 |[download link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA00106_00/4/f_620aa0809d848d2801a45973d8680c1f9de4d4afe8943edf8cc8f13d1a6e13d4/f/EP2097-CUSA00106_00-0000000000000000.pkg) |  [desc link](http://gs2.ww.prod.dl.playstation.net/gs2/appkgo/prod/CUSA00106_00/4/f_620aa0809d848d2801a45973d8680c1f9de4d4afe8943edf8cc8f13d1a6e13d4/f/EP2097-CUSA00106_00-0000000000000000.json) |

### Usage
1. Clone this project
2. Run `npm i`
3. Start the script `debug=send node index.js`. This will start the server on `8081` port
4. Start downloading some game/app on your ps4. Once it has started, pause it.
5. Put your IP address and port (8081) in the network settings of ps4.
6. Resume the download. It will fail, check the console and grab the link.
7. Download the file using your favourite download manager and put it in the data folder
8. Resume download again. This time the download bar should increase. Repeat step 6-8 until all the parts are downloaded. You can save time by downloading all the parts before hand.

### CLI Options
1. "--dataDir"  
    Provide custom directory path where game files are downloaded.
    
    eg:- `debug=send node index.js --dataDir=/home/sachdevnitin/Downloads/`
    
    default:- "data" 
     