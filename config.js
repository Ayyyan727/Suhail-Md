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


global.devs = "923196765146" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923196765146";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_15_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIT0NJNVE5Z05FUVhXSkwvMzlyWDJMSnAyeE4rNVNYMVF5VFNpYmZncVY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjM1ODQ1NzM5NjYyODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgwMzVFODFCQzAxQzk1NzkxRUQxODJGRjgwRUQ1OEVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDkzNzcyN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjM1ODQ1NzM5NjYyODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjExMTE5M0UyMDg2Q0IzMjRCODVENEVDQzQzMzk5Njk5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDkzNzcyN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjM1ODQ1NzM5NjYyODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwMzEwQkM1RjE3QjBBQjVGMjgyNjUzNzhFRkNEMEY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDkzNzcyOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjM1ODQ1NzM5NjYyODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE3QzlDNjE4RjczNjA1MTI0Mzk4NUM0MUM0MTE1OUI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDkzNzcyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjaUdUY3F3clJVMkE5YlJOY2VMeFJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZmNjIwOTFhLWU5NWUtNDczNS1hZmE4LWU2Y2UwMzI0YzEzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxNDIsXG4gICAgICAxOTgsXG4gICAgICAxNTMsXG4gICAgICAyMzIsXG4gICAgICA5MCxcbiAgICAgIDg5LFxuICAgICAgMTg1LFxuICAgICAgMTk5LFxuICAgICAgMjE4LFxuICAgICAgMzYsXG4gICAgICAxNTgsXG4gICAgICAxNjEsXG4gICAgICAxMjEsXG4gICAgICAyNDAsXG4gICAgICAxNzYsXG4gICAgICAyMDgsXG4gICAgICA3MyxcbiAgICAgIDE4MSxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNyxcbiAgICAgIDE1OSxcbiAgICAgIDIzNSxcbiAgICAgIDE4MixcbiAgICAgIDE4MCxcbiAgICAgIDE0OCxcbiAgICAgIDg3LFxuICAgICAgOTIsXG4gICAgICA1MixcbiAgICAgIDQyLFxuICAgICAgODAsXG4gICAgICAzLFxuICAgICAgMjAwLFxuICAgICAgMjAxLFxuICAgICAgNjUsXG4gICAgICAxNjEsXG4gICAgICA5NSxcbiAgICAgIDE5NyxcbiAgICAgIDIzMCxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlY0R1YyQ1ZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIzNTg0NTczOTY2MjgyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ3OTgwMzIxNTg4MTY6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDcmlzdGlhbm8ndiBJbnhpZGUndiA7MyDinKhcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJQ29pNDRGRVByWnpiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitneTFDSkQ3andDVlRkellydzAzaTB6ZVdFSlpaZ2EvUTV0RjFaS29sbGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQzNSYXNneCtKSmZPYkJ3S0xvWlE1eFFoZlBScXBHTnpMWVhYUTNIZ2pzbFNZMzlJVnVxMktzclFKZEw4STNSamhKMFE3bjFPakhtRjVXZ3VDc21VQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHZnS2dSVDFRNGNlak1rRlRDS0VZcCtTTGZLSHlQdC9LZFJXY0MvckFMV0Nza0cyV0IwOWxTMkRZMDdrRy9TUS9TZ1plaWt3MitXRWlRam03aUVUanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzU4NDU3Mzk2NjI4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkzNzcyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU80blwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzRuLmpzb24iOiAie1wia2V5RGF0YVwiOlwibzFQcEh1Z2NQM0Q1cnI0UkxDR1E1djR4eEl5ZytKcmNXbXNKRjI4VUVPOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzcxNzIyNzUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5Mzc3MjY1NjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MR PAKHTOON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
