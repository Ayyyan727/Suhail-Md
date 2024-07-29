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


global.devs = "994404817231" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994404817231";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_56_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI3LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDUzLFxuICAgICAgICAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc3LFxuICAgICAgICA4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZN3VkQ2tYdGpZdzhnMkVaN3NNaFlrSWxKMThTNkRQQ3BMSlR5YmlQdkYwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxVGdXNEh6bVJLaWlDX1JRaFRZT3RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0MzA0YmI2LTViMDUtNDQ5OC05N2UwLTRkZTQ3YjM1MTFiMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDE3MSxcbiAgICAgIDg3LFxuICAgICAgMTkxLFxuICAgICAgMTMsXG4gICAgICAxNSxcbiAgICAgIDEyNSxcbiAgICAgIDMzLFxuICAgICAgMzIsXG4gICAgICAxMTUsXG4gICAgICAzMyxcbiAgICAgIDE1OSxcbiAgICAgIDIxOCxcbiAgICAgIDEyNSxcbiAgICAgIDE5OCxcbiAgICAgIDE0MyxcbiAgICAgIDE4LFxuICAgICAgMTUwLFxuICAgICAgMjIsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjQzLFxuICAgICAgMjA2LFxuICAgICAgMjIyLFxuICAgICAgMjA4LFxuICAgICAgMzMsXG4gICAgICA2OCxcbiAgICAgIDE5LFxuICAgICAgOSxcbiAgICAgIDI2LFxuICAgICAgMTM4LFxuICAgICAgMTQ0LFxuICAgICAgMTUyLFxuICAgICAgMTA2LFxuICAgICAgMTg0LFxuICAgICAgMTI1LFxuICAgICAgMTY2LFxuICAgICAgMzgsXG4gICAgICAxODgsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0TDlOMlNLMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg4MDQ3ODUxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg2NTM5ODQ5NzQ0NDQ0OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwizp7wk4ap4oiY8J2TnPCdk6rwnZO38J2TuOKImPCThqrOnlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDLzZ6SVFoL2VldFFZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiend5WTJZZ29kd05YSlVid09NcDN4SlNvbW5CNDJMbjV3Z3hsL1oveUVpdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoU25FYkVDRjVybVRNZ2RLdzEvTmIya1R5TXRIM2VocTNMSTdFZHczdXhEQ1Bubm5aQ09LQnJDZ2VNR25IMEttN1pPLzRaL0NhRHpPbkpBeHVhclVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMd2JuMEhQTU5XYlMwN1M1ZFZxaWFxLzFKWkZwUXJSUXI2ejJhRVo3WGdmcldBaSsza01zV0EwTlBIZzBSS2VDVHRjS1VGT3NHbnA5YXZFdFlzL2hqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODgwNDc4NTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNjg1NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDUHRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNQdC5qc29uIjogIntcImtleURhdGFcIjpcIkZ2bnlOQTFUcFlUOVRhVE8zck03YXNlZ2orTXUra2Z6T1Z1VExXc0dRRnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2NjE4Nzg0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: AYYANO-XD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʏʏᴀɴ²²¹-ᴘᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " Ξ𓆩∘𝓜𝓪𝓷𝓸∘ 𝑩𝒐𝒕𓆪Ξ",
  ownername:process.env.OWNER_NAME|| "𝄟≛⃝🖤𝑺𝑻𝐀𝑺𝑶 𝑳𝐀𝑳𝐀♥️✨੍᭄͜͡°•𓆩🖤𓆪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝄟≛⃝🖤𝑺𝑻𝐀𝑺𝑶 𝑳𝐀𝑳𝐀♥️✨੍᭄͜͡°•𓆩🖤𓆪"  ).toUpperCase(),



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
