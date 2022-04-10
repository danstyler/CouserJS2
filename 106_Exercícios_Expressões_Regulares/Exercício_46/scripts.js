let validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validarNomeUsuario.test("Daniel_Sas1"))