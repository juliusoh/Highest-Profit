const fs = require("fs");
const csv = require("csv-parser");
const results = [];
const inputFile = "./data.csv";

fs.createReadStream(inputFile)
  .pipe(csv())
  .on("data", (data) => {
    try {
      data["Profit (in millions)"] = Number(data["Profit (in millions)"]);
      results.push(data);
    } catch (err) {
      console.log(err);
    }
  })
  .on("end", () => {
    console.log("# of Rows of data is", results.length);
    const validNumericResults = results.filter(
      (el) => !isNaN(el["Profit (in millions)"])
    );
    console.log(
      "# of Rows of data after filtered numeric values is",
      validNumericResults.length
    );
    fs.writeFile("data2.json", JSON.stringify(validNumericResults), (err) => {
      if (err) throw err;
      console.log("data2.json File created");
    });
    const top20Results = validNumericResults.sort((a, b) => {
      return b["Profit (in millions)"] - a["Profit (in millions)"]
    }).slice(0, 20)
    console.log('Top 20 rows with highest profit values', top20Results, `${top20Results.length} number of results`)
  });
