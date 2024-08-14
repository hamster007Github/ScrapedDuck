const fs = require('fs');
const { argv } = require('node:process');

const events = require('./pages/events')
const raids = require('./pages/raids')
const research = require('./pages/research')
const eggs = require('./pages/eggs')

function main(backupFileBaseUrl = "https://raw.githubusercontent.com/bigfoott/ScrapedDuck/data/")
{
    console.log(`using backupFileBaseUrl: ${backupFileBaseUrl}`);

    if (!fs.existsSync('files'))
        fs.mkdirSync('files');

    events.get(backupFileBaseUrl + "events.min.json");
    raids.get(backupFileBaseUrl + "raids.min.json");
    research.get(backupFileBaseUrl + "research.min.json");
    eggs.get(backupFileBaseUrl + "eggs.min.json");
}

// get optional argument: path for backup json file
const args = argv.slice(2);
main(args[0]);
