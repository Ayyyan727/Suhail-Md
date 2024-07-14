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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_59_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDMzLFxuICAgICAgICA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiLzZpcy8zUVdwVWQ4aU9hWGx4K2cxSEo3cWF3Nk04TTZTcEpLUVlNYzlXUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNjQ3MjQ5MDczMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkE1NDMzNERFODdEN0ZFMTgwNzQzNkE4MTA3MkJCOURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwOTE4Nzk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTY0NzI0OTA3MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVCMkMwMTQwRDk0RTIyRTQ5Qzg1RjdGMUIwNzU1MTMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDkxODc5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMMi1jYm8zNlFiS3F5M2stUWpHWnVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiNDJjY2M1LTUzOWMtNDU4Mi05NTkxLTExZGVhOWUwNGMxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDE0MCxcbiAgICAgIDE2MSxcbiAgICAgIDExMCxcbiAgICAgIDE2NixcbiAgICAgIDg1LFxuICAgICAgODMsXG4gICAgICAxODAsXG4gICAgICAxMTAsXG4gICAgICAxNDUsXG4gICAgICAyMzEsXG4gICAgICAyMTcsXG4gICAgICA0NyxcbiAgICAgIDYzLFxuICAgICAgMTIxLFxuICAgICAgNDQsXG4gICAgICAyNixcbiAgICAgIDIwNyxcbiAgICAgIDQxLFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDc3LFxuICAgICAgMzYsXG4gICAgICAyMTcsXG4gICAgICAyNDYsXG4gICAgICAxMzAsXG4gICAgICAxNDUsXG4gICAgICAxMDUsXG4gICAgICAxMDcsXG4gICAgICAxNzksXG4gICAgICA1MyxcbiAgICAgIDE3OSxcbiAgICAgIDc2LFxuICAgICAgMTM5LFxuICAgICAgMTU0LFxuICAgICAgNjUsXG4gICAgICAxOTUsXG4gICAgICAxNyxcbiAgICAgIDIwLFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldOSDZGSFQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNjQ3MjQ5MDczMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg0Njg3MjQwMDA0MjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEOWdSb1FnOGJNdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOFNKS1E1cXQwZjYvQlZHRWFtb2xoM05jaktHTWZLZHQzcGhydEpIVHpoND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXcnRpdFM0U2lCNU5iZDFEM2VhaytwWDRyQlBHU0xHL0YvNHZ4ZTBsNXFsWVFqc215Z05EaEduejcydXIzMEIvOXhmcUdkVjFBb2U3UUlNaG45VElEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3bDVvR1FTNG56WitrYTluMWVzekdrYjNxSGtRNlF0akYrMk5QeFVnRW1HWWZSN0ZBL04rcXBaanhydit5RUs4M0lMeFZhVW5CdHB6L3lwWEtBYVVEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxNjQ3MjQ5MDczMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTE4NzkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQU93XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBT3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTRzQxajA0NU9yeDh2VU5qZC96d2I2SHgrRlpTVTFRSU44YUNVdldZVnUwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU0NTU4MzM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5MTg3OTYwMjZcIn0iCn0="  // PUT your SESSION_ID 


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
