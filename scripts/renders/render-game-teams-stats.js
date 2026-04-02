import createTable from "../elements/table.js";
import { THREEPOINTLOCATIONS } from "../helpers/locations.js";
import { gamesList } from "../state/mock-games.js";
import { teamsList } from "../state/mock-teams.js";

export default function renderGameTeamsStats(gameId) {
    const sectionTeamStats = document.createElement("section");

    const game = gamesList.find((item) => {
        return item.id === gameId;
    });

    const homeTeam = teamsList.find((elem) => elem.id === game.homeTeamId);
    const awayTeam = teamsList.find((elem) => elem.id === game.awayTeamId);

    const [table, cells] = createTable(
        ["", homeTeam.name, awayTeam.name],
        [
            "Очки",
            "1-очк",
            "2-очк",
            "3-очк",
            "Передачи",
            "Подборы",
            "- в атаке",
            "- в защите",
            "Перехваты",
            "Блокшоты",
            "Фолы",
            "- в атаке",
            "- в защите",
            "Потери",
        ]
    );

    table.className = "game-teams-stats";

    let homeScore = 0;
    let home1ptShot = 0;
    let home1ptMade = 0;
    let home2ptShot = 0;
    let home2ptMade = 0;
    let home3ptShot = 0;
    let home3ptMade = 0;
    let homeAssists = 0;
    let homeRebounds = 0;
    let homeReboundsOffensive = 0;
    let homeReboundsDefensive = 0;
    let homeSteals = 0;
    let homeBlocks = 0;
    let homeFouls = 0;
    let homeFoulsOffensive = 0;
    let homeFoulsDefensive = 0;
    let homeTurnovers = 0;
    //
    let awayScore = 0;
    let away1ptShot = 0;
    let away1ptMade = 0;
    let away2ptShot = 0;
    let away2ptMade = 0;
    let away3ptShot = 0;
    let away3ptMade = 0;
    let awayAssists = 0;
    let awayRebounds = 0;
    let awayReboundsOffensive = 0;
    let awayReboundsDefensive = 0;
    let awaySteals = 0;
    let awayBlocks = 0;
    let awayFouls = 0;
    let awayFoulsOffensive = 0;
    let awayFoulsDefensive = 0;
    let awayTurnovers = 0;

    game.logs.forEach((log) => {
        switch (log.action) {
            case "shot made":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    if (THREEPOINTLOCATIONS.includes(log.location)) {
                        homeScore += 3;
                        home3ptShot += 1;
                        home3ptMade += 1;
                        cells[3][0].textContent = `${home3ptMade} / ${home3ptShot}`;
                    } else {
                        homeScore += 2;
                        home2ptShot += 1;
                        home2ptMade += 1;
                        cells[2][0].textContent = `${home2ptMade} / ${home2ptShot}`;
                    }
                    cells[0][0].textContent = homeScore;
                    break;
                } else {
                    if (THREEPOINTLOCATIONS.includes(log.location)) {
                        awayScore += 3;
                        away3ptShot += 1;
                        away3ptMade += 1;
                        cells[3][1].textContent = `${away3ptMade} / ${away3ptShot}`;
                    } else {
                        awayScore += 2;
                        away2ptShot += 1;
                        away2ptMade += 1;
                        cells[2][1].textContent = `${away2ptMade} / ${away2ptShot}`;
                    }
                    cells[0][1].textContent = awayScore;
                    break;
                }

            case "shot missed":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    if (THREEPOINTLOCATIONS.includes(log.location)) {
                        home3ptShot += 1;
                        cells[3][0].textContent = `${home3ptMade} / ${home3ptShot}`;
                    } else {
                        home2ptShot += 1;
                        cells[2][0].textContent = `${home2ptMade} / ${home2ptShot}`;
                    }
                    break;
                } else {
                    if (THREEPOINTLOCATIONS.includes(log.location)) {
                        away3ptShot += 1;
                        cells[3][1].textContent = `${away3ptMade} / ${away3ptShot}`;
                    } else {
                        away2ptShot += 1;
                        cells[2][1].textContent = `${away2ptMade} / ${away2ptShot}`;
                    }
                    break;
                }

            case "free throw made":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    home1ptMade += 1;
                    home1ptShot += 1;
                    cells[1][0].textContent = `${home1ptMade} / ${home1ptShot}`;
                    homeScore += 1;
                    cells[0][0].textContent = homeScore;
                } else {
                    away1ptMade += 1;
                    away1ptShot += 1;
                    cells[1][1].textContent = `${away1ptMade} / ${away1ptShot}`;
                    awayScore += 1;
                    cells[0][1].textContent = awayScore;
                }
                break;

            case "free throw missed":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    home1ptShot += 1;
                    cells[1][0].textContent = `${home1ptMade} / ${home1ptShot}`;
                } else {
                    away1ptShot += 1;
                    cells[1][1].textContent = `${away1ptMade} / ${away1ptShot}`;
                }
                break;

            case "assist":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeAssists += 1;
                    cells[4][0].textContent = homeAssists;
                } else {
                    awayAssists += 1;
                    cells[4][1].textContent = awayAssists;
                }
                break;

            case "rebound offensive":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeRebounds += 1;
                    homeReboundsOffensive += 1;
                    cells[5][0].textContent = homeRebounds;
                    cells[6][0].textContent = homeReboundsOffensive;
                } else {
                    awayRebounds += 1;
                    awayReboundsOffensive += 1;
                    cells[5][1].textContent = awayRebounds;
                    cells[6][1].textContent = awayReboundsOffensive;
                }
                break;
            case "rebound defensive":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeRebounds += 1;
                    homeReboundsDefensive += 1;
                    cells[5][0].textContent = homeRebounds;
                    cells[7][0].textContent = homeReboundsDefensive;
                } else {
                    awayRebounds += 1;
                    awayReboundsDefensive += 1;
                    cells[5][1].textContent = awayRebounds;
                    cells[7][1].textContent = awayReboundsDefensive;
                }
                break;

            case "steal":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeSteals += 1;
                    cells[8][0].textContent = homeSteals;
                } else {
                    awaySteals += 1;
                    cells[8][1].textContent = awaySteals;
                }
                break;
            case "block":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeBlocks += 1;
                    cells[9][0].textContent = homeBlocks;
                } else {
                    awayBlocks += 1;
                    cells[9][1].textContent = awayBlocks;
                }
                break;
            case "foul offensive":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeFouls += 1;
                    homeFoulsOffensive += 1;
                    cells[10][0].textContent = homeFouls;
                    cells[11][0].textContent = homeFoulsOffensive;
                } else {
                    awayFouls += 1;
                    awayFoulsOffensive += 1;
                    cells[10][1].textContent = awayFouls;
                    cells[11][1].textContent = awayFoulsOffensive;
                }
                break;
            case "foul defensive":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeFouls += 1;
                    homeFoulsDefensive += 1;
                    cells[10][0].textContent = homeFouls;
                    cells[12][0].textContent = homeFoulsDefensive;
                } else {
                    awayFouls += 1;
                    awayFoulsDefensive += 1;
                    cells[10][1].textContent = awayFouls;
                    cells[12][1].textContent = awayFoulsDefensive;
                }
                break;
            case "foul technical":
                // не считается в общие фолы
                break;
            case "turnover":
                if (game.homePlayersIdsList.includes(log.playerId)) {
                    homeTurnovers += 1;
                    cells[13][0].textContent = homeTurnovers;
                } else {
                    awayTurnovers += 1;
                    cells[13][1].textContent = awayTurnovers;
                }
                break;
        }
    });

    sectionTeamStats.append(table);

    return sectionTeamStats;
}
