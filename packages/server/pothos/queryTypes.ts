import builder from "./builder";

builder.queryType({
  fields: (t) => ({
    getDoctorById: t.fieldWithInput({
      input: {
        id: t.input.id({ required: true }),
      },
      type: 'ID',
      // Add prisma.findUnique to the resolver
      resolve: async(_root, args) => args.input.id
    })
  })
});

