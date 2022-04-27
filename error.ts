function generateError(messsage: string, code: number): never {
  throw { messsage, code }
}
console.log(111)
