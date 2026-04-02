export default function createTable(colNames, rowNames) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    for (name of colNames) {
        const col = document.createElement("th");
        col.textContent = name;
        thead.append(col);
    }

    const ROWS = [];
    const EMPTYCELLS = [];

    for (name of rowNames) {
        const row = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = name;
        row.append(td);

        const ROWREFERENCE = [];

        for (let i = 1; i < colNames.length; i++) {
            const emptyTd = document.createElement("td");
            row.append(emptyTd);
            ROWREFERENCE.push(emptyTd);
        }

        EMPTYCELLS.push(ROWREFERENCE);

        ROWS.push(row);
    }

    tbody.append(...ROWS);
    table.append(thead, tbody);

    return [table, EMPTYCELLS];
}
