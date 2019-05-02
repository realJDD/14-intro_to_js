// from data.js
const tableData = data

// Select the submit button
const submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  const inputElement = d3.select("#datetime");

  // Get the value property of the input element
  const inputDateValue = inputElement.property("value");

  // Filter the dataset by the user-entered date range
  const filteredData = tableData.filter(data => data.datetime === inputDateValue);

  // Use D3 to select the table
  var table = d3.select("table")

  // Use D3 to select the table body
  var tbody = d3.select("tbody")

  // Empty table
  tbody.selectAll("td").remove()

  // Use arrow function and D3 to update the table body
  filteredData.forEach((alienSighting) => {
      const row = tbody.append("tr")
      for (key in alienSighting){
          const cell = tbody.append("td")
          cell.text(alienSighting[key])
      }
  })
})
