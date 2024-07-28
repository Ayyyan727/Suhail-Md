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


global.devs = "+1 (437) 703-2123" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+1 (437) 703-2123";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_46_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM3LFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMGNWVFNMcGNlMCt4WXZkWDhoelhnUVF5K0s4ajZoM2VGYlF1b3k4NW9Fdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNDM3NzAzMjEyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjBGQ0VGNjg3NkM1RTEyRDNBOEU2MjIzNDQ0M0EzQTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTU5OTg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTQzNzcwMzIxMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM3RDMyQUMzOTk0MUUyRkE3RkRDNjBGQjU0OUExNTM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE1OTk4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE0Mzc3MDMyMTIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MjM2RTNFREZGMTAzNTgzQ0JEMENDMDhBQTk2QjkzMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxNTk5OTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNDM3NzAzMjEyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTBDMEI2QUE4MEMyOUYxRDBGNTM1NUFCQzlGRURCQ0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTU5OTkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBoODFucHNQVDBhT0QwbFBoaExHd0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjdjNzI0MjMtOGQyYi00MjY0LWI1ZTYtMGVjZTg4YTI0Yzc3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTgxLFxuICAgICAgMzMsXG4gICAgICAxNjIsXG4gICAgICAyNDAsXG4gICAgICAyMTEsXG4gICAgICAxNzgsXG4gICAgICAxMjYsXG4gICAgICAxNDUsXG4gICAgICA0NCxcbiAgICAgIDE4MSxcbiAgICAgIDY4LFxuICAgICAgMTUwLFxuICAgICAgNjcsXG4gICAgICAxODksXG4gICAgICAzNyxcbiAgICAgIDYyLFxuICAgICAgMTM3LFxuICAgICAgMjksXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgODQsXG4gICAgICA2MSxcbiAgICAgIDE4NixcbiAgICAgIDYxLFxuICAgICAgMjAzLFxuICAgICAgMTQxLFxuICAgICAgMjEyLFxuICAgICAgMjQ2LFxuICAgICAgNjQsXG4gICAgICA2OCxcbiAgICAgIDEzMCxcbiAgICAgIDczLFxuICAgICAgMjM5LFxuICAgICAgMTAzLFxuICAgICAgMTQyLFxuICAgICAgMTQ1LFxuICAgICAgMjE1LFxuICAgICAgMjcsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIVEtKN1hON1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTQzNzcwMzIxMjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ1MTYxODkxODkzNDk0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiaWJhZGtoYW5kdXJhbmk1XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGluLzhrQkVQQ21tTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZMUUyZk9hTS8xYkd5MlFXYzRqN0J4WTA5MU9hQ0QvSzgwNGptRm51U1NRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjgwUVBrRERsSTFrd0RpVG5YTzFaTmpnSTFnU2grWjBNVko2aU9DVDRUbkVQd0YyU2gwOTQ2RnBwWndaeDFiamhrSUpLWTNtV2szWlUvaEErclRSaERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlxTkhKNW9XOGJDK3NYMGNycU5EL1dlOG9DZE05cmt4dTk1Q2RvVzJYbE1sT1h5NE1YbC9kajliNnorNXhEV2dzSjU4SWwyalgyUFZtaVBWYkg2OGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0Mzc3MDMyMTIzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTk5ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIdGtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh0ay5qc29uIjogIntcImtleURhdGFcIjpcIjk5U0YxMzQ5Y2NnR09ka08vUlBma2M0M1VKTmluUktoeEZTdkM1MXg4VGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIzNjEzNDMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNTk5ODk0NDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: AYYANO-XD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏʏᴀɴ²²¹-ᴘᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🏴‍☠️ 𝐈𝐁𝐀𝐃 𝐁𝐎𝐓 🏴‍☠️",
  ownername:process.env.OWNER_NAME|| "IBAD",


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
