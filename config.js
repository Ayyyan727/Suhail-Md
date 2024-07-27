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


global.devs = "994405604509" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994405604509";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_20_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDcxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRMall4SXAvQTZEUHlmaWFVTDlOMWdyeWMyV3NkVVZkU0NSNUJyUGFYT3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDA5MzY4NDI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5N0FEQTdFRTAzRjAwRjUwM0U5RUREMEE0RjAyNEI3NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwOTAwMjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWUlpaU1JNTFTamE0YjJHamRqMXFDUVwiLFxuICBcInBob25lSWRcIjogXCIwNTQ3ZjNkZi00MzRkLTQ1ZTAtOGNkMy03MmJiYTc1ZDNiNTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxMTYsXG4gICAgICAxNTUsXG4gICAgICA3MSxcbiAgICAgIDc4LFxuICAgICAgNDYsXG4gICAgICAxODcsXG4gICAgICAyNTUsXG4gICAgICAxNTYsXG4gICAgICAyMDEsXG4gICAgICAxMjYsXG4gICAgICAyNTMsXG4gICAgICAyMTQsXG4gICAgICAyNTIsXG4gICAgICAxOTEsXG4gICAgICA4OSxcbiAgICAgIDE3NixcbiAgICAgIDkzLFxuICAgICAgMTQzLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgMTgyLFxuICAgICAgMTU3LFxuICAgICAgMTk1LFxuICAgICAgMTA5LFxuICAgICAgMTQ0LFxuICAgICAgMTAsXG4gICAgICA5MCxcbiAgICAgIDQwLFxuICAgICAgMjA4LFxuICAgICAgMTk4LFxuICAgICAgMTI2LFxuICAgICAgMTM4LFxuICAgICAgMTE4LFxuICAgICAgMTQyLFxuICAgICAgNDMsXG4gICAgICAyMDYsXG4gICAgICA3LFxuICAgICAgMzMsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEZMRFBUNzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwOTM2ODQyOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bSNyoAg4bSkypzhtIfJtOG0j1wiLFxuICAgIFwibGlkXCI6IFwiMTIzOTM2MDQ2MDg0Mjc5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGZSNDc0Q0VLT0VsTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0c1NseE9JZ2Vxb200eW9EOEtvcnkzSmpqdXV4dDJnUllqa3RWSkt0OGk4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNxQ1lHN2RVRUtaZU0ycEpHbUNRSVd6QmhycHI0YUhTdlMrUzZ4bWN0Y0c0WmRVcDVzcW5vQ09RV2ZMOUxuWVNERWh4MUhOMjFxODFDTGcwbC9lTkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFoeExYaFhzbUlaellqUFFGb2gzNEcyMHhGT2szVDJ5b0xkVXd4Y3MxaU9FNVdTN1oya2tlUmpFNVJmMmhzR1R3cDdXRVhDallTWnJsYm5tUmJSYkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwOTM2ODQyOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwOTAwMjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNblpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1uWi5qc29uIjogIntcImtleURhdGFcIjpcIk52OTN1NTYzQjh6YXRmNHI4TktsM1JHV0s5UFVLUkdjYjlHZ1UrdVU5SVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY4NTI2ODM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: AYYANO-XD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏʏᴀɴ²²¹-ᴘᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " 🏴‍☠️-𝐀𝐘𝐀𝐍-🏴‍☠️",
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
