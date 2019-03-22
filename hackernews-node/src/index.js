const { GraphQLServer } = require("graphql-yoga");

// dummy data stored in memory. Would be in a database.
let links = [{
    id: 'link-0',
    url: 'howtographql.com',
    description: 'Fullstack tutorial for Graphql'
}];

let idCount = links.length;
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews clone`,
        feed: () => links,
        link: (parent, args) => links.find(link => link.id === `link-${args.id}`),
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };
            links.push(link);
            return link;
        },
        updateLink: (parent, args) => {
            const link = links.find(link => link.id === `link-${args.id}`);
            if (args.url) {link.url = args.url}
            if (args.description) {link.description = args.description}
            return link;
        },
        deleteLink: (parent, args) => {
            links = links.filter(link => link.id !== `link-${args.id}`);
            return `link-${args.id} deleted.`

        },
    },
};

const server = new GraphQLServer ({
    typeDefs: './src/schema.graphql',
    resolvers
});

server.start(() => console.log('Server is running on http://localhost:4000'));





