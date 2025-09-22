const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_IMG : process.env.ALIVE_IMG || "https://pomf2.lain.la/f/uzu4feg.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃bot name 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : Bot Name",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MONGODB_URI : process.env.MONGODB_URI || 'mongodb+srv://shanuka:Shanuka@cluster0.i9l2lts.mongodb.net/Shanuka?retryWrites=true&w=majority'    
};
