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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923439019639" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923439019639";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_35_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMixcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK1lZckxyN3lCbW0yU3VHdGgwNHEvQXJPNGg5a0owaFYwVTJOVVptZm14dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0FNRDdUZUZUcEdzUW53aDhveDVvZ1wiLFxuICBcInBob25lSWRcIjogXCI4MTE5NmVmOS1hYjI4LTQ1OWMtYTcyOS00NGUzMzA1YjU0OGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjMxLFxuICAgICAgMTIyLFxuICAgICAgMTE4LFxuICAgICAgMTg0LFxuICAgICAgNTQsXG4gICAgICAxNTcsXG4gICAgICAxNDIsXG4gICAgICAyMzMsXG4gICAgICAyMDksXG4gICAgICA5MyxcbiAgICAgIDE3MCxcbiAgICAgIDI0MyxcbiAgICAgIDQzLFxuICAgICAgMjI0LFxuICAgICAgMTU1LFxuICAgICAgMixcbiAgICAgIDE3NixcbiAgICAgIDE1OCxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICA5OCxcbiAgICAgIDE1MCxcbiAgICAgIDgsXG4gICAgICAxODQsXG4gICAgICA2NixcbiAgICAgIDE1MCxcbiAgICAgIDE3OSxcbiAgICAgIDExMCxcbiAgICAgIDIzOCxcbiAgICAgIDQ0LFxuICAgICAgMTU5LFxuICAgICAgMTc2LFxuICAgICAgMjQxLFxuICAgICAgNTksXG4gICAgICAzOCxcbiAgICAgIDI1NCxcbiAgICAgIDEzOSxcbiAgICAgIDExMyxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0txY3hwRUhFTEg2dmJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicXJHc003cDJwRHVVeG9qcnNXZklEaUkrZGF6TkF0bDlOazJ4bGw1WUFEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDYm9vQkozTlRrZ0p1aDZqTU1NZU9OZXFUZ0g3MmxYRnBkalZzNjIyRFBxbDd3dWpobW94NEdheDJYWldXMW8wa0NMKyt5VGx0ZDN3cCt0VFdvZ2JCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPN3BqLzlCdllEa2cva2Y1N2ZOT01LRWFVeVhPbGhHT0h2T1E3TWQ5L2I4Y0lTZ1BRSDgzUno4WFdoK3pEWTRRcmpLajBYTkIrdlkzanRoTVQxenBEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjc3Mjc0NjQ0ODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQcWLxYvKjCBCyZjJrcmtyoxcIixcbiAgICBcImxpZFwiOiBcIjU2ODU3MjYzNjQ0ODY1OjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI3NzI3NDY0NDg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2Nzk3MzVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ayyan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
