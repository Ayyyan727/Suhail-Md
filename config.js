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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_50_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZZUEpiZ0dDNWF4L1BjamFpK1ZCOTJsRlpiOXVUT0R2RGgzWnUrYjc4Njg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDA1NjA0NTA5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRUJGQzY3ODE3Mzg3QkQ5QUNEREMzMDlBRjczRjg0OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1Mzc0MjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM2R3UzhRcVRTai1Zb2g0RF9USGRqZ1wiLFxuICBcInBob25lSWRcIjogXCI3YmFhYThiNi0zN2RlLTRhNDQtYjAxOC0wOGQ1Njk2MGYwNjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMTkyLFxuICAgICAgMTk1LFxuICAgICAgMzcsXG4gICAgICA4LFxuICAgICAgMTUwLFxuICAgICAgNzAsXG4gICAgICAxMzIsXG4gICAgICAxNjQsXG4gICAgICAxNDksXG4gICAgICAxODEsXG4gICAgICAxOTEsXG4gICAgICAyNDIsXG4gICAgICAyMDQsXG4gICAgICA1MyxcbiAgICAgIDEsXG4gICAgICAxOTAsXG4gICAgICAyMDUsXG4gICAgICA4OSxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDEzNyxcbiAgICAgIDIzLFxuICAgICAgMTgzLFxuICAgICAgMjU1LFxuICAgICAgMTY4LFxuICAgICAgMTgwLFxuICAgICAgMTc4LFxuICAgICAgNzMsXG4gICAgICA3NyxcbiAgICAgIDM1LFxuICAgICAgMTg0LFxuICAgICAgOCxcbiAgICAgIDMsXG4gICAgICAxNDQsXG4gICAgICAxNDgsXG4gICAgICAyMjAsXG4gICAgICAyNCxcbiAgICAgIDIzLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxOQlBGTTk4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDU2MDQ1MDk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG0jcqAIOG0pMqc4bSHybThtI9cIixcbiAgICBcImxpZFwiOiBcIjIxOTU1OTM0ODkzNjcwNTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xQdzJMWUZFSXVuOHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHBxazFReVlENTZpbmNSR0MvMW9LYUZmQTdVNUZRT2VTUExjLy9EMkVXcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwUUhpSW9GdXZjcUtDTlIxVjRCLzdTcWlIVmFFdWRnTXFjTlMwSlJKcWZNN3lRQkJjRmdxT0hYV1dBQURwbm9VZENBWHJDK1EvamZYbW9QRnJtYVdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEb2J5a25wSnIyZVgxa0h1VXZidVRYcjBSSEg4aHZ2WU1ZcWFuNVEzUktVTEhaN1pkQ2lxYjRlZzdZRWhoUG8vdTRpY0RNRHdXcDhBS1I1cWFONFBqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDU2MDQ1MDk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1Mzc0MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHbmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUduaC5qc29uIjogIntcImtleURhdGFcIjpcIkJPeE9tTHpRdmVFa2xsUDlHRUw3UUxVK3lwUnBWdzgvTFV5a0hTczh2MkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1Njg3OTY2NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ3OTk1MjIwNVwifSIKfQ=="  // PUT your SESSION_ID 


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
