const fs = require("fs")

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
  } catch {
    return []
  }
}

const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData, null, 2)
  fs.writeFileSync("data10.json", saveAllDataJson)
}

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadInfo()

  const duplicatedData = allData.filter((obj) => {
    return obj.id === id
  })

  if (duplicatedData.length == 0) {
    allData.push({ id, fname, lname, age, city })
    saveAllData(allData)
    console.log("person added successfully")
  } else {
    console.log("ERROR: DUPLICATED ID")
  }
}

const listAllData = () => {
  const allData = loadInfo()
  if (allData.length == 0) {
    console.log("NO DATA FOUND")
  } else {
    console.table(allData)
  }
}

const readData = (id) => {
  const allData = loadInfo()

  const itemNeeded = allData.find((obj) => {
    return obj.id === id
  })

  if (itemNeeded) {
    console.log(itemNeeded)
  } else {
    console.log("ID NEEDED NOT FOUND")
  }
}

const deleteData = (id) => {
  const allData = loadInfo()

  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id
  })

  if (dataToKeep.length == allData.length) {
    console.log("ID NEEDED NOT FOUND")
  } else {
    saveAllData(dataToKeep)
    console.log("person deleted successfully")
  }
}

const deleteAll = () => {
  saveAllData([])
  console.log("all data has been deleted")
}

const listData = () => {
  const allData = loadInfo()

  allData.forEach((obj) => {
    console.log(obj.fname + " " + obj.lname + " - " + obj.city)
  })
}

module.exports = {
  addPerson,
  listAllData,
  readData,
  deleteData,
  deleteAll,
  listData,
}