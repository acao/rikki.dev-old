---
title: GraphQL Federation - emerging options!
date: 2022-04-01
---

This landscape is really growing, especially after the guild launched the new graphql stitching that allows you to build federation patterns.

There are now multiple open source implementations of this architecture across multiple languages, including now several in typescript, one in C#/dotnet, and several in golang!

If i missed any, [please open an issue here](https://github.com/acao/rikki.dev/issues)

## proprietary:
* [tyk](https://tyk.io/releases/v4-0)
* [hasura data mesh](https://hasura.io/blog/graphql-and-the-data-mesh-developer-productivity-in-an-age-of-exploding-data)
* a colleauge of mine launched another that I can’t find right now

## open source:
* [Mercurius](https://github.com/mercurius-js/mercurius/blob/master/docs/federation.md) - (typescript)
  * [nestjs + mercurius examples](https://docs.nestjs.com/graphql/federation#federation-with-mercurius)
* [GraphQL Tools Schema Stitching](https://github.com/gmac/schema-stitching-handbook) - (typescript) - (not to be confused with the old apollo stitching pattern pre-federation)
* [Nautilus](https://github.com/nautilus/gateway_) (golang)
* [bramble](https://movio.github.io/bramble) - (golang)
* [ChilliCream](https://chillicream.com/docs/hotchocolate/distributed-schema/schema-federations) - (dotnet)
* [kraken.d](https://www.krakend.io/docs/backends/graphql/#graphql-federation) (golang)
