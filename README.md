# Hifumi
A Discord bot built on discord.js for the best girl, Hifumi Takimoto!

## Helping out
Not a programmer? No problem, We would still love to get your input!


<a href="https://discord.gg/ZWW5CJw">
  <img width="250" src="https://i.imgur.com/GlEHVES.png"></img>
</a>

Most discussion will be in the `#tech-talk` channel.

## Commands

###### TBA

## Setting up Hifumi

Step 0: copy `.env.example` to `.env` and add your bot token

### The big boy way

1. install docker-compose
2. `git clone https://github.com/moedevs/hifumi.git`
3. `cd hifumi`
4. `npm install`
5. `docker-compose -d up`
6. `npm run dev`

Docker compose gives you **Mongodb** on port 27017 and **Mongo-Express**
on port 8081. To access your database, go to `http://localhost:8081` when
docker-compose is running

### The lame way

1. install node
2. install mongodb
3. `git clone https://github.com/moedevs/hifumi.git`
4. `cd hifumi`
5. `npm install`
6. make sure mongodb is running on port 27017
7. `npm run dev`

##### Made with <3 by the /r/NewGame community
