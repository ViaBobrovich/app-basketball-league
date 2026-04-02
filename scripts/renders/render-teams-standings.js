import createTable from "../elements/table.js";
import { gamesList } from "../state/mock-games.js";
import { THREEPOINTLOCATIONS } from "../helpers/locations.js";

function countPoints(game, teamId) {
    let points = 0;

    if (game.homeTeamId === teamId) {
        game.logs.forEach((log) => {
            if (
                log.action === "shot made" &&
                game.homePlayersIdsList.includes(log.playerId)
            ) {
                if (THREEPOINTLOCATIONS.includes(log.location)) {
                    points += 3;
                } else {
                    points += 2;
                }
            } else if (
                log.action === "free throw made" &&
                game.homePlayersIdsList.includes(log.playerId)
            ) {
                points += 1;
            }
        });
    } else {
        game.logs.forEach((log) => {
            if (
                log.action === "shot made" &&
                game.awayPlayersIdsList.includes(log.playerId)
            ) {
                if (THREEPOINTLOCATIONS.includes(log.location)) {
                    points += 3;
                } else {
                    points += 2;
                }
            } else if (
                log.action === "free throw made" &&
                game.awayPlayersIdsList.includes(log.playerId)
            ) {
                points += 1;
            }
        });
    }

    return points;
}

export default function renderTeamsStandings(teamsList) {
    const startCheck = document.querySelector("#standings-section");
    if (startCheck) {
        startCheck.remove();
    }

    const RECORDS = [];

    teamsList.forEach((team) => {
        RECORDS.push([team.id, 0, 0]);
    });

    gamesList.forEach((game) => {
        const homePoints = countPoints(game, game.homeTeamId);
        const awayPoints = countPoints(game, game.awayTeamId);
        if (homePoints === awayPoints) {
            return;
        } else if (homePoints > awayPoints) {
            const winnerArray = RECORDS.find((item) => {
                return item[0] === game.homeTeamId;
            });
            winnerArray[1] += 1;
            const looserArray = RECORDS.find((item) => {
                return item[0] === game.awayTeamId;
            });
            looserArray[2] += 1;
        } else {
            const winnerArray = RECORDS.find((item) => {
                return item[0] === game.awayTeamId;
            });
            winnerArray[1] += 1;
            const looserArray = RECORDS.find((item) => {
                return item[0] === game.homeTeamId;
            });
            looserArray[2] += 1;
        }
    });

    const section = document.createElement("section");
    section.id = "standings-section";

    const heading = document.createElement("h2");
    heading.innerText = "Положение команд";

    section.append(heading);

    const arrayOfTeamsNames = [];

    teamsList.forEach((team) => {
        arrayOfTeamsNames.push(team.name);
    });

    let [table, cells] = createTable(
        ["команда", "победы", "поражения"],
        arrayOfTeamsNames,
    );

    let i = 0;

    RECORDS.forEach((team) => {
        cells[i][0].textContent = team[1];
        cells[i][1].textContent = team[2];
        i++;
    });

    section.append(table);

    document.body.append(section);
}
