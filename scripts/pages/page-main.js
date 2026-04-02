import { gamesList } from "../state/mock-games.js";
import { teamsList } from "../state/mock-teams.js";
import { playersList } from "../state/mock-players.js";
//
import renderGamesCards from "../renders/render-games-cards.js";
import renderTeamsStandings from "../renders/render-teams-standings.js";
import renderPlayersTop3 from "../renders/render-players-top-3.js";
//
export default function pageMain() {
    renderGamesCards(gamesList);
    renderPlayersTop3(playersList, gamesList);
    renderTeamsStandings(teamsList);
}
