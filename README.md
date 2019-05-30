<img src="https://media.discordapp.net/attachments/453354438267240458/583465156223172610/hifumi-banner-less-lewd.png">

<div align="center">
  <img src="https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg" alt="WIP">
  <a href="https://discord.gg/RM6KUrf">
    <img src="https://img.shields.io/discord/414334929002823680.svg?color=rgb%28216%2C%20115%2C%20215%29&label=Support%20Server" alt="discord">
  </a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/website/https/hifumi.io.svg?label=hifumi.io">
</div>

Hifumi is a service for tagging, ranking and serving images, powered by your favorite Discord communities. Keep track of your memes, anime waifus and fandom gifs by categorizing them under familiar tags and manage them with a web interface!

**Hifumi is in beta right now. You may invite her, but she's not yet stable.**

[Bot Invite Link](https://discordapp.com/oauth2/authorize?&client_id=381033323851415552&scope=bot&permissions=83968)

[Discord Invite](https://discord.gg/RM6KUrf)

---

## Commands
> TBA

## How it works

### Tagging
Once Hifumi is in your server, you can use it to start tagging images. Auto-tag channels allow you to automatically upload images from select channels.

### Searching and editing
Image search is supported through both the bot and the web UI.

### Making your images public
Moderators of your server will have the option to mark your images as public which will allow [image moderators](#image-moderators) to review them. If approved, your images will be publicly viewable but the image tags will be managed by image mods.

## Setting up Hifumi
> TBA

## Modules

### [Discord Bot](/bot)
The heart of the operation, the Discord bot keeps all image information in sync and allows users to upload new images. 

### [Website](/web)
Hifumi's web interface built with Vue

### [Hasura](/hasura)
The API that keeps everything working together, go check out [hasura](https://github.com/hasura/graphql-engine), it's amazing.

### [Authentication](/auth)
Authentication hook for hasura that allows validating users for the API.