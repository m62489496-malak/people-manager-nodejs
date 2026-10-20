const yargs = require("yargs")
const data10 = require("./data10")

yargs.command({
  command: "add",
  describe: "to add a person",
  builder: {
    id: {
      describe: "person id",
      demandOption: true,
      type: "number",
    },
    fname: {
      describe: "first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "last name",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "age",
      demandOption: true,
      type: "number",
    },
    city: {
      describe: "city",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.addPerson(x.id, x.fname, x.lname, x.age, x.city)
  },
})

yargs.command({
  command: "listAll",
  describe: "to view all people",
  handler: () => {
    data10.listAllData()
  },
})

yargs.command({
  command: "read",
  describe: "to view a specific person",
  builder: {
    id: {
      describe: "person id",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data10.readData(x.id)
  },
})

yargs.command({
  command: "delete",
  describe: "to delete a specific person",
  builder: {
    id: {
      describe: "person id",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    data10.deleteData(x.id)
  },
})

yargs.command({
  command: "deleteAll",
  describe: "to delete all people",
  handler: () => {
    data10.deleteAll()
  },
})

yargs.command({
  command: "list",
  describe: "to view full name and city of each person",
  handler: () => {
    data10.listData()
  },
})

yargs.parse()

