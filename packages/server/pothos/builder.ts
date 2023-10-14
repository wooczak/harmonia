import SchemaBuilder from '@pothos/core';

import PrismaPlugin from '@pothos/plugin-prisma';
import WithInputPlugin from '@pothos/plugin-with-input';

import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, WithInputPlugin],
  prisma: {
    client: prisma,
    exposeDescriptions: false,
    filterConnectionTotalCount: true,
  }
});

export default builder;