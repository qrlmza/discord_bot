const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json'); /* Déclaration du fichier de config */
const prefix = "!"; /* Déclaration du préfix */

client.once('ready', () => {
    console.log(">> Bot prêt à l'emploie"); /* Afficher un message dans la console au démarrage */
});

client.login(config.token) /* connexion au bot via la token (config.json) */