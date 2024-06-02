const { Client, GatewayIntentBits } = require('discord.js');
const db = require('./database');
const app=require('./server');
const URL = require('./models/urlschema');
const shortid = require('shortid');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.on('messageCreate', (message) => {
    if (message.content.toLowerCase().startsWith('hi') || message.content.toLowerCase().startsWith('hello')) {
        message.reply({
            content: "Welcome to CoolURL Bot, your Ultimate Link Stylist! ✨\n\n" +
            `Tired of lengthy URLs cluttering your posts? I'm here to transform them into something sleek and memorable. Share your links, and I'll make them cool and concise.\n\n` +
            "Welcome to CoolURL! Type `!createurl:[your-long-url]` to shorten your link 🚀 Check number of clicks with `!ClickCounter:[shortened-url]`"

        });
    } 
});
   
client.on('messageCreate', async (message) => {
    if (message.content.startsWith("!createurl:http")) {
        const shortId = shortid.generate();
        console.log(shortId);
        const url = String(message.content.split('!createurl:')[1]);
        const newdata = new URL({ ShortId: shortId, RedirectURL: url });
        try {
            const response = await newdata.save();
            console.log('Data saved successfully');
            message.reply({
                content: 'Generating shortURL for You.....',
            })
             message.reply({
                content: 'Your shortURL id is: http://localhost:9999/'+shortId
            });
        } catch (error) {
            console.error('Error saving data:', error);
            return message.reply({
                content: 'Error saving data. Please try again later.',
            });
        }
    }

 });
 client.on('messageCreate', async (message) => {
    if (message.content.startsWith("!ClickCounter:")) {
        const url = String(message.content.split('!ClickCounter:http://localhost:9999/')[1]);
        const click= await URL.findOne({ShortId:url})
        message.reply({
            content: 'Total Clicks:'+click.clickcounter,
        })
    }
 });
client.login(process.env.TOKEN);

