/* eslint-disable */
import type { Prisma, Patient, Doctor } from "/Users/kacper/Desktop/harmonia/node_modules/@prisma/client";
export default interface PrismaTypes {
    Patient: {
        Name: "Patient";
        Shape: Patient;
        Include: Prisma.PatientInclude;
        Select: Prisma.PatientSelect;
        OrderBy: Prisma.PatientOrderByWithRelationInput;
        WhereUnique: Prisma.PatientWhereUniqueInput;
        Where: Prisma.PatientWhereInput;
        Create: {};
        Update: {};
        RelationName: "doctor";
        ListRelations: never;
        Relations: {
            doctor: {
                Shape: Doctor;
                Name: "Doctor";
            };
        };
    };
    Doctor: {
        Name: "Doctor";
        Shape: Doctor;
        Include: Prisma.DoctorInclude;
        Select: Prisma.DoctorSelect;
        OrderBy: Prisma.DoctorOrderByWithRelationInput;
        WhereUnique: Prisma.DoctorWhereUniqueInput;
        Where: Prisma.DoctorWhereInput;
        Create: {};
        Update: {};
        RelationName: "patients";
        ListRelations: "patients";
        Relations: {
            patients: {
                Shape: Patient[];
                Name: "Patient";
            };
        };
    };
}