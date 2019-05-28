# Contributing to Hifumi

This document is mostly aimed towards people who are interested in contributing but feel intimidated by the project and the technologies used in it or want to find out how things work.

There are 3 main technologies Hifumi uses that you might want to become more familiar with before starting out.

1. [Docker](#docker)
2. [GraphQL](#graphql)
3. [Hasura](#hasura)

**If you are already familiar with these, skip over to [Contributing](#contributing)**

## Docker

<img src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png" width=50>

Docker is a technology that wraps programs into standalone packages called containers. Docker is used in this project for running **Hasura** and **PostgreSQL** separately to make sure the programmer doesn't have to bother with setting them up individually which would be very tedious.

You can download docker and docker-compose [here](https://docs.docker.com/compose/install/).

Once you have them downloaded you can setup both the dependencies by typing `docker-compose up` at the root of the project. That's really all you need to worry about when it comes to docker.

If you want to stop the containers without losing any of the data, just do `docker-compose stop`

Read up on docker more [here](https://www.docker.com/why-docker)

_We use it for almost every part of Hifumi in production_

## GraphQL

<img src="https://cdn.discordapp.com/emojis/466913581045252097.png?v=1" width=30>

Graphql is a query language that aims to be a statically typed alternative to REST. Unlike REST, it's made up of a single endpoint where you send the structure of the request as the body of a POST request.

GraphQL is used in hifumi to interface with the database.

An example query that you might use with Hifumi's API might look something like this

```gql
query {
  images(limit: 2) {
    user {
      user_id
      name
    }
    url
    image_tags {
      name
    }
  }
}
```

What this does is simply retrieve the first 2 images from the database, but unlike REST where you don't get to specify what kind of data you want to get back from the server, GraphQL lets you configure the response to exactly the way you want it.

A response you might get from this query could be something like this
```json
{
  "data": {
    "images": [{
        "user": {
          "user_id": "136663446337880064",
          "name": "Nemu Nemu the Sleep Queen"
        },
        "url": "https://cdn.discordapp.com/attachments/231790205676290049/565545316950999050/image0.png",
        "image_tags": [{
          "tagger_id": "136663446337880064",
          "name": "relatable"
        }]
      },
      {
        "user": {
          "user_id": "185800739090726913",
          "name": "Jordan"
        },
        "url": "https://cdn.discordapp.com/attachments/231790205676290049/565554323468058624/image0.jpg",
        "image_tags": [{
          "tagger_id": "185800739090726913",
          "name": "cute"
        }]
      }
    ]
  }
}
```

As you can see, the response fields match the requests made which is very beneficial since there won't be any unexpected responses.

In Hifumi's codebase, however, you might come across something along the lines of

```js
const { data } = await _client.query({
  image_tags_aggregate: [{
    where: {
      name: {
        _eq: query
      }
    }
  }, {
    aggregate: {
      count: 1,
    }
  }]
});
```

Which might seem odd at first. It's actually [this](https://github.com/helios1138/graphql-typed-client) repo which provides a typesafe way of creating graphql queries. It's the exact same thing as this query

```gql
query {
  image_tags_aggregate(
    where: {
      name: {
        _eq: "whatever query is"
      }
    }
  ) {
    aggregate {
      count
    }
  }
}
```

To use you have to have the graphql server set up and run `npm run codegen` which will pull all the type information from [Hasura](#hasura) and generate typescript types from it.

Learn more about graphql [here](https://graphql.org/)

## Hasura

<img src="https://uploads-ssl.webflow.com/5a9e704c9cbfbc0001836b26/5bb3a54781eef514078ee034_hasura_icon_black_200px.png" width=50>

Hasura is [one of the best open source projects](https://github.com/hasura/graphql-engine) out there! It allows us to interface with the PostgreSQL database using graphql and prevents us from having to write a separate API to be able to do that.

It's not **necessarily** useful for the bot itself, but this is the secret ingredient that allows Hifumi's website to receive live updates from the database with no extra work.

In order to have the bot working properly, you're going to need to have Hasura and PostgreSQL running

Once you have the bot running, you can go check out its console at `http://localhost:8080` which will let you query the database as you wish.

The production URL for the hasura endpoint is `https://db.hifumi.io/v1alpha1/graphql`

The development URL is `http://localhost:8080/v1alpha1/graphql`

# Contributing
Before you push a commit or make a pull request, make sure that:

1. Your code compiles (duh)
2. You have no linter errors from tslint

You can check for linter errors by using `npm run lint`