import { gamesList } from "./mock-games.js";
import { teamsList } from "./mock-teams.js";
import pageMain from "../pages/page-main.js";

function random() {
    const id = Math.random().toString();
    return id;
}

export default function setGameStart([
    selectHomeTeamId,
    selectAwayTeamId,
    selectDate,
    selectTime,
    selectArena,
]) {
    const homeTeam = teamsList.find((elem) => elem.id === selectHomeTeamId);
    const awayTeam = teamsList.find((elem) => elem.id === selectAwayTeamId);

    gamesList.push({
        id: random(),
        homeTeamId: selectHomeTeamId,
        awayTeamId: selectAwayTeamId,
        date: Number(selectDate),
        time: Number(selectTime),
        arena: selectArena,
        homePlayersIdsList: [...homeTeam.playersIdsList],
        awayPlayersIdsList: [...awayTeam.playersIdsList],
        logs: [],
    });

    pageMain();
}
