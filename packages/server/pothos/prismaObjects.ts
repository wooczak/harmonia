// https://pothos-graphql.dev/docs/plugins/prisma#creating-types-with-builderprismaobject

import builder from "./builder";

builder.prismaObject('Doctor', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name')
  })
});

builder.prismaObject('Patient', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name')
  })
});