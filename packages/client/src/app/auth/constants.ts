export const RegExp = {
  Email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
  Password: /^(?=.*[A-Z])(?=.*[!:.?;,])[\w!:.?;,]{8,}$/
}

export const Error = {
  Email: "To pole musi zawierać poprawną formę adresu e-mail.",
  Password: "Hasło musi zawierać co najmniej 8 znaków, co najmniej jedną wielką literę oraz co najmniej jeden znak specjalny."
}