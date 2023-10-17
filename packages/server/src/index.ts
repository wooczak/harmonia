import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = `#graphql
    type Patient {
        id: ID!
        name: String,
    }
    
    type Doctor {
        id: ID!,
        name: String
    }

    type Query {
        patient(id: ID!): Patient
        doctor(id: ID!): Doctor,
        patients(doctorId: ID!): [Patient]
    }
`;

const resolvers = {
    Query: {
        patients: (_: any, args: { id: number }) => prisma.patient.findMany({
            where: {
                doctorId: args.id
            },
        })
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