const argv = require("minimist")(process.argv.slice(2), {
  string: [
    "clientID",
    "details",
    "state",
    "largeImageKey",
    "smallImageKey",
    "largeImageText",
    "smallImageText"
  ],
  boolean: [
    "timestampStartNow"
  ]
});

const clientID = argv.clientID;
const details = argv.details;
const state = argv.state;
const largeImageKey = argv.largeImageKey;
const smallImageKey = argv.smallImageKey;
const largeImageText = argv.largeImageText;
const smallImageText = argv.smallImageText;
const startTimestamp = argv.timestampStartNow ? Date.now() / 1000 : argv.startTimestamp;
const endTimestamp = argv.endTimestamp;

const client = require("discord-rich-presence")(clientID);

client.updatePresence({
  details: details,
  state: state,
  startTimestamp: Date.now() / 1000,
  largeImageKey: largeImageKey,
  smallImageKey: smallImageKey,
  largeImageText: largeImageText,
  smallImageText: smallImageText
});
