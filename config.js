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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_37_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaVJJeURvSzl0OWNEVnVxcmNCRStHd1EyS3g4aVQ3b200b05rYmpaUmtFRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NjcyNjQxMzU5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUEyMDJBRjdBOTk4ODA0NkQwMTg2MURCRTI5RTU4NDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDU0MjYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDY3MjY0MTM1OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJBNjJCMjc5NDM5M0REREJGMzQ1NUI3NjJFQzAwRjM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA1NDI2MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ2NzI2NDEzNTk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQ0I5RDFEQjkzQzkxQzhGODI4MkRCRjA2NDZGODQzMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNTQyNjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NjcyNjQxMzU5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzFBNkVFMjdBMkE5NzA0N0QwRUM4NEI3RUU2NkYwQTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDU0MjYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZQamNMbEhLUndTOXhQWkpmeXhRVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODgxMDFjYjgtZjU0OS00OGM5LThlOTYtYzQ1YTFjNzA1ZDA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMTMyLFxuICAgICAgMjQ0LFxuICAgICAgMjQ4LFxuICAgICAgMTU2LFxuICAgICAgMTYwLFxuICAgICAgMjAzLFxuICAgICAgMjE5LFxuICAgICAgMTA0LFxuICAgICAgMTE1LFxuICAgICAgNzQsXG4gICAgICAxNDcsXG4gICAgICAxMTksXG4gICAgICA5NyxcbiAgICAgIDk5LFxuICAgICAgMTAzLFxuICAgICAgMTUsXG4gICAgICA3OCxcbiAgICAgIDEwNixcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTkyLFxuICAgICAgMjE2LFxuICAgICAgNDcsXG4gICAgICA3OCxcbiAgICAgIDIxLFxuICAgICAgMTAzLFxuICAgICAgMTY2LFxuICAgICAgMTg4LFxuICAgICAgMjAyLFxuICAgICAgNzUsXG4gICAgICAyNTEsXG4gICAgICAzMSxcbiAgICAgIDgwLFxuICAgICAgNjEsXG4gICAgICAyMTUsXG4gICAgICAyMSxcbiAgICAgIDIzOCxcbiAgICAgIDEwMCxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMzUjhQOFEzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NjcyNjQxMzU5NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiYWNjb3VudCBpcyBmb3VuZC4uLlwiLFxuICAgIFwibGlkXCI6IFwiMjY5MTAxNjYyNDkwNjY3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWE5K0VzUXIralV0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtVGxIZUtuSUZDNzZ3NEFtMTNCSEFDUkN4Q3E1NzhjQ3lyQlNhTmdDWlh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVHMW8wWm5GYTNBSkw4OG1leGVubGVremo1Y0dPNkNjWFBSQm1kazVaeGpNYTR3OHFYdm5pR1NaazlkUkFyTnR4QkJXVXlHMXI4RkN6L25DT3IyRkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRUUjJVdnRwZ0dRd1pQN0xvbjA3TzhqYzJTN2RtNGFSeC9nNUZjVTFZRnNFMDFkK3Q5SDBsOFdYUms2cE4vak1BQVNkaWdTSjRvQm1FS1ZMRktGUWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ2NzI2NDEzNTk0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA1NDI1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUk1b1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTVvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQXd0Uk9HTW11ejVBOFJPQlRiZkNLSnc0WW1PaHNqcTluRkxyQ0h1ZHZLQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTkyNjAzNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA1NDI1OTg5OVwifSIKfQ=="  // PUT your SESSION_ID 


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
