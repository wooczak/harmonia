import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
    type Patient {
        id: ID!
        name: String,
        lastVisit: String
    }

    type Query {
        patient(id: ID!): Patient,
        patients: [Patient]
    }
`;

const patients = [
    {
        id: '1',
        name: 'John Krasinski',
        lastVisit: "2023-06-29",
    },
    {
        id: '2',
        name: "Brian Novak",
        lastVisit: "2023-05-12"
    }
];

const resolvers = {
    Query: {
        patients: () => patients,
        patient: (_: any, args: { id: string; }) => patients.find((patient) => patient.id === args.id)
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// This below creates an Express app, install our ApolloServer instance as middleware and prepares
// the app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`Server ready at: ${url}`);