import createTable from "../elements/table.js";
import { THREEPOINTLOCATIONS } from "../helpers/locations.js";

export default function renderPlayersTop3(playersList, gamesList) {
    const checkStart = document.body.querySelector(".players-top-3");

    if (checkStart) {
        checkStart.remove();
    }

    const section = document.createElement("section");
    section.classList.add("players-top-3");

    document.body.append(section);

    top3Points(section, playersList, gamesList);
    top3Rebounds(section, playersList, gamesList);
    top3shooting3PointsPercentage(section, playersList, gamesList);
}

function top3Points(section, playersList, gamesList) {
    const wrapper = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Лучшие по очкам";

    const [topPointsTable, cells] = createTable(["игрок", "очков / игру"], []);

    let playerIdPointsGamesList = [];

    for (const player of playersList) {
        let points = 0;
        let games = 0;

        for (const game of gamesList) {
            if (
                game.homePlayersIdsList.includes(player.id) ||
                game.awayPlayersIdsList.includes(player.id)
            ) {
                games += 1;
                for (const log of game.logs) {
                    if (
                        log.playerId === player.id &&
                        log.action === "shot made"
                    ) {
                        if (THREEPOINTLOCATIONS.includes(log.location)) {
                            points += 3;
                        } else {
                            points += 2;
                        }
                    } else if (
                        log.playerId === player.id &&
                        log.action === "free throw made"
                    ) {
                        points += 1;
                    }
                }
            }
        }

        if (games === 0 || points === 0) {
            playerIdPointsGamesList.push([player.id, 0]);
        } else {
            playerIdPointsGamesList.push([
                player.id,
                (points / games).toFixed(2),
            ]);
        }
    }

    playerIdPointsGamesList.sort((a, b) => b[1] - a[1]);

    console.log(playerIdPointsGamesList);

    for (const player of playerIdPointsGamesList) {
        const myPlayer = playersList.find((item) => item.id === player[0]);

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = `${myPlayer.lastName}`;
        const td2 = document.createElement("td");
        td2.textContent = player[1];

        tr.append(td1, td2);
        topPointsTable.append(tr);
    }
    wrapper.append(h2, topPointsTable);

    section.append(wrapper);
}

function top3Rebounds(section, playersList, gamesList) {
    const wrapper = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Лучшие по подборам";

    const [topReboundsTable, cells] = createTable(
        ["игрок", "подборов / игру"],
        [],
    );

    let playerIdReboundsGamesList = [];

    for (const player of playersList) {
        let rebounds = 0;
        let games = 0;

        for (const game of gamesList) {
            if (
                game.homePlayersIdsList.includes(player.id) ||
                game.awayPlayersIdsList.includes(player.id)
            ) {
                games += 1;
                for (const log of game.logs) {
                    if (
                        (log.playerId === player.id &&
                            log.action === "rebound offensive") ||
                        (log.playerId === player.id &&
                            log.action === "rebound defensive")
                    ) {
                        rebounds += 1;
                    }
                }
            }
        }

        if (games === 0 || rebounds === 0) {
            playerIdReboundsGamesList.push([player.id, 0]);
        } else {
            playerIdReboundsGamesList.push([player.id, rebounds / games]);
        }
    }

    playerIdReboundsGamesList.sort((a, b) => b[1] - a[1]);

    for (const player of playerIdReboundsGamesList) {
        const myPlayer = playersList.find((item) => item.id === player[0]);

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = `${myPlayer.lastName}`;
        const td2 = document.createElement("td");
        td2.textContent = player[1];

        tr.append(td1, td2);
        topReboundsTable.append(tr);
    }
    wrapper.append(h2, topReboundsTable);

    section.append(wrapper);
}

function top3shooting3PointsPercentage(section, playersList, gamesList) {
    const wrapper = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Лучшие по трёхочковым";

    const [top3shooting3PointsPercentageTable, cells] = createTable(
        ["игрок", "3-очк"],
        [],
    );

    let playerIdshooting3PointsPercentageGamesList = [];

    for (const player of playersList) {
        let shots = 0;
        let made = 0;
        let games = 0;

        for (const game of gamesList) {
            if (
                game.homePlayersIdsList.includes(player.id) ||
                game.awayPlayersIdsList.includes(player.id)
            ) {
                games += 1;
                for (const log of game.logs) {
                    if (
                        log.playerId === player.id &&
                        log.action === "shot made"
                    ) {
                        if (THREEPOINTLOCATIONS.includes(log.location)) {
                            shots += 1;
                            made += 1;
                        }
                    } else if (
                        log.playerId === player.id &&
                        log.action === "shot missed"
                    ) {
                        if (THREEPOINTLOCATIONS.includes(log.location)) {
                            shots += 1;
                        }
                    }
                }
            }
        }

        if (games === 0 || shots === 0) {
            playerIdshooting3PointsPercentageGamesList.push([player.id, 0]);
        } else {
            playerIdshooting3PointsPercentageGamesList.push([
                player.id,
                made / shots,
            ]);
        }
    }

    playerIdshooting3PointsPercentageGamesList.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < 3; i++) {
        const myPlayer = playersList.find(
            (item) =>
                item.id === playerIdshooting3PointsPercentageGamesList[i][0],
        );

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = `${myPlayer.lastName}`;
        const td2 = document.createElement("td");
        td2.textContent = `${Math.ceil(
            playerIdshooting3PointsPercentageGamesList[i][1] * 100,
        )}%`;

        tr.append(td1, td2);
        top3shooting3PointsPercentageTable.append(tr);
    }
    wrapper.append(h2, top3shooting3PointsPercentageTable);

    section.append(wrapper);
}
