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


global.devs = "92222222222" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+9222222222";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_22_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA5NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5OeHlkY3V5K1p1V0N6dE82TlFka2RKNTgxVGgxK2NtWHEvMDkyVlRaNVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDY3MjY0MTM1OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc2OUI5MUFGQTE2NTdCRTAwREMxNjEzMjhBNkE3NTY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIxMTc0NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ2NzI2NDEzNTk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRDZBQUQ3MjEzMTA3QjFFN0ZDMjk3RUQ2RUFCM0E3RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMTE3NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NjcyNjQxMzU5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTY3OUI2MTM1OEU3MTUxQzdBM0VCMkRBRDAwRDc1RkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjExNzQ4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDY3MjY0MTM1OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFFQjlBNEU1MjlGQ0VGMjk2NEM0NURGNDJCMjQ4OUQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIxMTc0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYeTk2LTB2aFFSZWZrenhRX1hOem5BXCIsXG4gIFwicGhvbmVJZFwiOiBcImJlNDNhNTNlLTFmZGItNGE2Ni04YWU0LWE4MTMzNTNmOWY0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDEzLFxuICAgICAgMTM0LFxuICAgICAgNjQsXG4gICAgICAyNTEsXG4gICAgICAxOTQsXG4gICAgICAxNDgsXG4gICAgICAyNDYsXG4gICAgICAxNDIsXG4gICAgICAyMTgsXG4gICAgICAyMTMsXG4gICAgICA0MCxcbiAgICAgIDIzLFxuICAgICAgMTU3LFxuICAgICAgNSxcbiAgICAgIDY5LFxuICAgICAgMTUwLFxuICAgICAgMTc5LFxuICAgICAgMTY5LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDEwNyxcbiAgICAgIDE5OSxcbiAgICAgIDEzNSxcbiAgICAgIDkwLFxuICAgICAgMjQ1LFxuICAgICAgOCxcbiAgICAgIDgxLFxuICAgICAgNixcbiAgICAgIDgxLFxuICAgICAgMzAsXG4gICAgICA2NixcbiAgICAgIDEyLFxuICAgICAgMTM2LFxuICAgICAgMjQxLFxuICAgICAgMjYsXG4gICAgICAyNDYsXG4gICAgICAxNDcsXG4gICAgICAxMDcsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTFNWVNCRDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ2NzI2NDEzNTk0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigKDwkoGNzZ/Nn82ezZ4gwrvwnZClzZzNoSfKiMyK8J2QrNmtLfCThqnwnZCDyZHNnM2h8J2QsMmRzZzNofCdkKjwnZCd8JOGqi3ZreK4meKAoPCdkKXNnM2hyaTJlsK78JGBjc2Z4oCgIDM6KVwiLFxuICAgIFwibGlkXCI6IFwiMjY5MTAxNjYyNDkwNjY3OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmVncWFJR0VOeTIzclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyRGpzRzU3ZU5vUEgvZkJMeUE0aFFOK1h0SlhLQThFMVAxQ0NSMURCdzFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBoY0RiTGIyMVh5a2ljS2cyM3ZiWm5BSzFYQndZMTJQSGp4VW1zNU05OERlTU9TekE3QkJrT2RCUFJST3ZVdlB4cTJoUkhCVlE5bklJSldoeHVZbUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdJUjZmN2R6WUI4MGxsN3JIZktmYjF1cVptYTBJR29QWHd6SXBMcWhnYU1wUjJsMVYrbFU1b2s0dlkrNUtjbElMcE8rNWE3M0NlbWZoVEo5aGhLMWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ2NzI2NDEzNTk0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMTE3NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNNHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU00dy5qc29uIjogIntcImtleURhdGFcIjpcInAyd2ZRZFBrU3RIai9vZnQrVkw0T2huS0poMktqN04rdlpMeUU3NHJZUjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY4MjU5MTc2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjExNzQ0NTAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: AYYANO-XD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏʏᴀɴ²²¹-ᴘᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴀʏᴀɴ-ᴘʀ",
  ownername:process.env.OWNER_NAME|| "SHENO",


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
