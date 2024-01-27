import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

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

// This passes the Apollo Server instance to the Next/Apollo integration
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req })
});

console.log(`Server ready at localhost:3000/api/graphql`);

export { handler as GET, handler as POST };