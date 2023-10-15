import { PrismaClient } from "@prisma/client";
import builder from "./builder";

const prisma = new PrismaClient();

builder.queryType({
  fields: (t) => ({
    getDoctorNameById: t.fieldWithInput({
      input: {
        id: t.input.id({ required: true }),
      },
      type: 'ID',
      resolve: async(_query, _root, args) => prisma.doctor.findUniqueOrThrow({
        ...query,
        where: {
          id: args.input.id
        },
        select: {
          name: true
        }
      })
    })
  })
});

