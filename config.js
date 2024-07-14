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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_09_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzU2FuYnBOR3pYRjJKWGV2dzFoL1RaVWpQUnplVTNDZTZ6dSt4YS9XR3lZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvbEZnMTYwTFQ4U3pvOWxCcEdROXlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEyZGMzNzQ3LTQ5YzYtNDRhNy04MjYwLWYxZjNkNzQzMzQzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDkxLFxuICAgICAgMTYwLFxuICAgICAgMTQyLFxuICAgICAgMjQ3LFxuICAgICAgNzUsXG4gICAgICAxOTUsXG4gICAgICA5MCxcbiAgICAgIDIwNSxcbiAgICAgIDIzMCxcbiAgICAgIDEwNixcbiAgICAgIDIxNixcbiAgICAgIDY4LFxuICAgICAgMjE5LFxuICAgICAgMjE0LFxuICAgICAgMzYsXG4gICAgICAxNTUsXG4gICAgICAyNixcbiAgICAgIDIzOSxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDIxOCxcbiAgICAgIDIxMixcbiAgICAgIDI4LFxuICAgICAgMjQ5LFxuICAgICAgMjM4LFxuICAgICAgMTY0LFxuICAgICAgMTMxLFxuICAgICAgMTYzLFxuICAgICAgNDcsXG4gICAgICA4MyxcbiAgICAgIDQ4LFxuICAgICAgMTY0LFxuICAgICAgMjEsXG4gICAgICAyNDAsXG4gICAgICAxNTgsXG4gICAgICAyOSxcbiAgICAgIDYyLFxuICAgICAgNjUsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjRSTDk1VjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjM1ODQ1NzM5NjYyODY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRIRSBMM1YzTCA4XCIsXG4gICAgXCJsaWRcIjogXCI1OTU4MDIzOTM0NzkzNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t5Y3hwRUhFTWZ3ejdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXl3VHpiOFdjM3RZb21WTVkxRjkyYnh6TmVSdjZYcnBuRlFVK25weHFsYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1SWc3c0orK29xOXlsZ01ZdWNEcVFPaHdGV3JpVldpU2FWd3liQXVvVlVvZjlvRFhXZUlMdUZGTWhHZVlXMXM0ajFaZmQzdkJqcFlXcW5WK3RMV1JCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKWm56YVB4RDVwR3lYZ1pSQmZqRW9mTVlaa3pFVllrZndjQVIwNWU3ZXkxbmdlMTlacEpyRTdPcFdXUjhsSmZoRkJwNmpjaFQ0dG1YSmc5OVdHNEtqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzNTg0NTczOTY2Mjg2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTczMzg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkg1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGSDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwQnV5YnVrbHl5TjlheW1vR0ExR0ZPc0dRa2N4SjI1SGxKYmx3Rk0xWUZRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTU4NTAyODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
