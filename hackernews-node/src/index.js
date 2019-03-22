const { GraphQLServer } = require("graphql-yoga");

// dummy data stored in memory. Would be in a database.
let links = [{
    id: 'link-0',
    url: 'howtographql.com',
    description: 'Fullstack tutorial for Graphql'
}];

const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
}
type Link {
    id: ID!
    description: String!
    url: String!
}
`

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews clone`,
        feed: () => links
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    },
};

const server = new GraphQLServer ({
    typeDefs,
    resolvers
});

server.start(() => console.log('Server is running on http://localhost:4000'));





