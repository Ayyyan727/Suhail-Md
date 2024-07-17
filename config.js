const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCCUQoJ93wLxSIftN0H";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCCUQoJ93wLxSIftN0H" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "92*******" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "92******";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_01_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib2YyWEpYZlU5R29zVkVWclpjdlpxNUUybE10QnEra1AzcGlJWDZZMDgxTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNDM3NTAwOTU3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREQ0MkJGOUNBRERDODU2NzAwQUE0RDhDQThCOTlGRTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjAzMzA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTQzNzUwMDk1NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYxNTFFRjBGMDFFMEM0QkZEOTRFQUVEODg1QTZFMUNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIwMzMwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE0Mzc1MDA5NTc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RjYwOTAyMTlEMjY0MTdFQjk2MjhERTM1NzI3MzI0QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMDMzMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNDM3NTAwOTU3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjU1ODczMDlCQTI1RENBMDk5ODExMjY3OTIzNDY0RDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjAzMzEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBHSVQtLXZ5U2E2bkg3MTdQTlE1aHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDNlZWIwMTUtZTE0Yi00ZWE0LWJiYWItMjg3NjZmNDA5ZTUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDEyMyxcbiAgICAgIDEwLFxuICAgICAgMTEwLFxuICAgICAgMTY2LFxuICAgICAgNTgsXG4gICAgICAyOSxcbiAgICAgIDExMixcbiAgICAgIDQ3LFxuICAgICAgMjEwLFxuICAgICAgMTM2LFxuICAgICAgODIsXG4gICAgICAxMzcsXG4gICAgICAxNTEsXG4gICAgICAxNjYsXG4gICAgICAxNCxcbiAgICAgIDEyLFxuICAgICAgNzIsXG4gICAgICAyMzksXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMzUsXG4gICAgICAyNDksXG4gICAgICAyMyxcbiAgICAgIDE0MCxcbiAgICAgIDI3LFxuICAgICAgNDIsXG4gICAgICAyNDIsXG4gICAgICAyOSxcbiAgICAgIDExNyxcbiAgICAgIDQ0LFxuICAgICAgMTc3LFxuICAgICAgMjI5LFxuICAgICAgNDgsXG4gICAgICAxMDMsXG4gICAgICAyNCxcbiAgICAgIDM0LFxuICAgICAgMjUyLFxuICAgICAgMjAsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0pYMUxSWjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE0Mzc1MDA5NTc0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MzYxMjc0NDYzMDMyMToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImliYWRraGFuZHVyYW5pNVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtMTd2a0JFT2YwM2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN041NUZ1VW02R3ZIanZPcG1oekI3Y2pobVZMejlDRVZwSEdHTDJBeW9HMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuTkljR1dtOGJIOWs2UU0zTUJWK21SYjNvOEl5KzRROWN4bVpKSGNHdlRKMkhETFVQQkJCM0lxQ0FZTlRqZWxsYnFFTllTcm9OaUxpTzVxcmdidUJCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2K0ExaXhQTU83T0Q1OUtjbFNoM3FGUzBpK3pGcnVvSjB5WXBpcWdRQzAvTHRtbnFKTjZUWVpGUWJFazczekpyZUVYWElWQjNBNEN2NG9seXp6aUJoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNDM3NTAwOTU3NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjAzMzA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWc3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZzcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqVVAwNitVUFhsZEhsNUtMMmYybXY2RVVwZUgwT3ZScUh4U1NmTmNJNHhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyMzk5OTkyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjAzMzA4NjYyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴀʏᴀɴ-ᴘʀ",
  ownername:process.env.OWNER_NAME|| "AKASH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "AYYAN"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
