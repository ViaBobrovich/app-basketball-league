import { gamesList } from "../state/mock-games.js";
import formatTime from "../helpers/format-time.js";
import { playersList } from "../state/mock-players.js";
import createTable from "../elements/table.js";
import { ACTIONSVOCABULARY } from "../helpers/actions.js";

export default function renderGameLogs(gameId) {
    const section = document.createElement("section");
    section.className = "game-logs";

    const [table, cells] = createTable(
        ["номер", "игрок", "событие", "локация", "время"],
        []
    );

    table.className = "game-logs";

    const game = gamesList.find((item) => {
        return item.id === gameId;
    });

    game.logs.forEach((log) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");

        const player = playersList.find((elem) => elem.id === log.playerId);

        td1.innerText = player.number;
        td2.innerText = player.lastName;
        td3.innerText = ACTIONSVOCABULARY[log.action];
        td4.innerText = log.location;
        td5.innerText = formatTime(log.time);

        tr.append(td1, td2, td3, td4, td5);

        table.append(tr);
    });

    section.append(table);
    return section;
}
