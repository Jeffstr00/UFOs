// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear data
    tbody.html("");

    // loop through each object in the data
    data.forEach((dataRow) => {
        // append a row to the table body; tells Javascript to find the tbody tag within the HTML and add a table row "tr"
        let row = tbody.append("tr");
        // tell JS to reference one object from the array of UFO sightings and put it into the dataRow; forEach((val) specifies one object per row)
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
