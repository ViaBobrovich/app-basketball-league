import { playersList } from "../state/mock-players.js";
import { gamesList } from "../state/mock-games.js";
import { teamsList } from "../state/mock-teams.js";
import createTable from "../elements/table.js";
import { THREEPOINTLOCATIONS } from "../helpers/locations.js";

function spreadStatsToCells(table, logs, playersIdsList) {
    for (let playerId of playersIdsList) {
        const player = playersList.find((item) => item.id === playerId);

        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = `#${player.number} ${player.firstName} ${player.lastName}`;

        const td2 = document.createElement("td");

        const td3 = document.createElement("td");

        const td4 = document.createElement("td");

        const td5 = document.createElement("td");

        const td6 = document.createElement("td");

        const td7 = document.createElement("td");

        const td8 = document.createElement("td");

        const td9 = document.createElement("td");

        const td10 = document.createElement("td");

        const td11 = document.createElement("td");

        const td12 = document.createElement("td");

        const td13 = document.createElement("td");
        const td14 = document.createElement("td");

        tr.append(
            td1,
            td2,
            td3,
            td4,
            td5,
            td6,
            td7,
            td8,
            td9,
            td10,
            td11,
            td12,
            td13,
            td14
        );

        const myLogs = logs.filter((item) => item.playerId === playerId);

        let points = 0;
        let shotsFGTake = 0;
        let shotsFGMade = 0;
        let shots3ptTake = 0;
        let shots3ptMade = 0;
        let shots2ptTake = 0;
        let shots2ptMade = 0;
        let shots1ptTake = 0;
        let shots1ptMade = 0;
        let assists = 0;
        let rebounds = 0;
        let reboundsOffensive = 0;
        let reboundsDefensive = 0;
        let blocks = 0;
        let steals = 0;
        let turnovers = 0;
        let fouls = 0;

        myLogs.forEach((log) => {
            switch (log.action) {
                case "shot made":
                    if (THREEPOINTLOCATIONS.includes(log.location)) {
                        points += 3;
                        shotsFGTake += 1;
                        shotsFGMade += 1;
                        shots3ptTake += 1;
                        shots3ptMade += 1;

                        td2.innerText = `${points}`;
                        td3.innerText = `${shotsFGMade} / ${shotsFGTake}`;
                        td6.innerText = `${shots3ptMade} / ${shots3ptTake}`;
                    } else {
                        points += 2;
                        shotsFGTake += 1;
                        shotsFGMade += 1;
                        shots2ptTake += 1;
                        shots2ptMade += 1;
                        td2.innerText = `${points}`;
                        td3.innerText = `${shotsFGMade} / ${shotsFGTake}`;
                        td5.innerText = `${shots2ptMade} / ${shots2ptTake}`;
                    }
                    break;
                case "shot missed":
                    if (THREEPOINTLOCATIONS.includes(log.location)) {
                        shotsFGTake += 1;
                        shots3ptTake += 1;

                        td3.innerText = `${shotsFGMade} / ${shotsFGTake}`;
                        td6.innerText = `${shots3ptMade} / ${shots3ptTake}`;
                    } else {
                        shotsFGTake += 1;
                        shots2ptTake += 1;

                        td3.innerText = `${shotsFGMade} / ${shotsFGTake}`;
                        td5.innerText = `${shots2ptMade} / ${shots2ptTake}`;
                    }
                    break;

                case "free throw made":
                    shots1ptMade += 1;
                    shots1ptTake += 1;
                    td4.innerText = `${shots1ptMade} / ${shots1ptTake}`;
                    break;

                case "free throw missed":
                    shots1ptTake += 1;
                    td4.innerText = `${shots1ptMade} / ${shots1ptTake}`;
                    break;

                case "assist":
                    assists += 1;
                    td7.innerText = assists;
                    break;

                case "rebound offensive":
                    rebounds += 1;
                    reboundsOffensive += 1;
                    td8.innerText = rebounds;
                    td9.innerText = reboundsOffensive;
                    break;
                case "rebound defensive":
                    rebounds += 1;
                    reboundsDefensive += 1;
                    td8.innerText = rebounds;
                    td10.innerText = reboundsDefensive;
                    break;

                case "steal":
                    steals += 1;
                    td12.innerText = steals;
                    break;
                case "block":
                    blocks += 1;
                    td11.innerText = blocks;
                    break;
                case "foul offensive":
                    fouls += 1;
                    td14.innerText = fouls;
                    break;
                case "foul defensive":
                    fouls += 1;
                    td14.innerText = fouls;
                    break;
                case "foul technical":
                    fouls += 1;
                    td14.innerText = fouls;
                    break;
                case "turnover":
                    turnovers += 1;
                    td13.innerText = turnovers;
                    break;
            }
        });

        table.append(tr);
    }
}

export default function renderGamePlayersStats(gameId) {
    const section = document.createElement("section");
    section.className = "players-stats";

    const game = gamesList.find((item) => item.id === gameId);

    const homeTeam = teamsList.find((item) => item.id === game.homeTeamId);
    const homeTeamLogs = game.logs.filter((item) =>
        game.homePlayersIdsList.includes(item.playerId)
    );

    const awayTeam = teamsList.find((item) => item.id === game.awayTeamId);
    const awayTeamLogs = game.logs.filter((item) =>
        game.awayPlayersIdsList.includes(item.playerId)
    );

    const homeHeading = document.createElement("h2");
    homeHeading.innerText = homeTeam.name;

    const [homeTable, homeCells] = createTable(
        [
            "Игрок",
            "Очки",
            "Броски с игры",
            "1-очк",
            "2-очк",
            "3-очк",
            "Передачи",
            "Подборы",
            "- в атаке",
            "- в защите",
            "Блокшоты",
            "Перехваты",
            "Потери",
            "Фолы",
        ],
        []
    );

    spreadStatsToCells(homeTable, homeTeamLogs, game.homePlayersIdsList);

    const awayHeading = document.createElement("h2");
    awayHeading.innerText = awayTeam.name;

    const [awayTable, awayCells] = createTable(
        [
            "Игрок",
            "Очки",
            "Броски с игры",
            "1-очк",
            "2-очк",
            "3-очк",
            "Передачи",
            "Подборы",
            "- в атаке",
            "- в защите",
            "Блокшоты",
            "Перехваты",
            "Потери",
            "Фолы",
        ],
        []
    );

    spreadStatsToCells(awayTable, awayTeamLogs, game.awayPlayersIdsList);

    section.append(homeHeading, homeTable, awayHeading, awayTable);

    return section;
}
