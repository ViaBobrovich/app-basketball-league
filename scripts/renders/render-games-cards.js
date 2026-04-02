import renderModal from "../elements/modal.js";
import formGame from "../elements/form-game.js";
import renderGameTeamsStats from "./render-game-teams-stats.js";
import renderGameLogs from "./render-game-logs.js";
import formLog from "../elements/form-log.js";
import { teamsList } from "../state/mock-teams.js";
import formatTime from "../helpers/format-time.js";
import formatDate from "../helpers/format-date.js";
import renderGamePlayersStats from "../renders/render-game-players-stats.js";

export default function renderGamesCards(gamesList) {
    const startCheck = document.querySelector("#games-section");
    if (startCheck) {
        startCheck.remove();
    }

    const gamesSection = document.createElement("section");
    gamesSection.id = "games-section";

    gamesList.forEach((game) => {
        const gameCard = document.createElement("div");
        gameCard.classList = "game-card";

        const homeTeam = teamsList.find((item) => item.id === game.homeTeamId);
        const awayTeam = teamsList.find((item) => item.id === game.awayTeamId);

        const gameCardHeader = document.createElement("header");
        gameCardHeader.innerText = `${homeTeam.name} / ${awayTeam.name}`;

        const gameCardMain = document.createElement("main");
        gameCardMain.textContent = `${formatDate(game.date)} ${formatTime(
            game.time,
        )} @ ${game.arena}`;

        const gameCardFooter = document.createElement("footer");

        const btnGameTeamStats = document.createElement("button");
        btnGameTeamStats.innerText = "Статистика команд";
        btnGameTeamStats.addEventListener("click", () => {
            renderModal(renderGameTeamsStats(game.id));
        });

        const btnGamePlayersStats = document.createElement("button");
        btnGamePlayersStats.innerText = "Статистика игроков";
        btnGamePlayersStats.addEventListener("click", () => {
            renderModal(renderGamePlayersStats(game.id));
        });

        const btnGameLogs = document.createElement("button");
        btnGameLogs.innerText = "Список событий";
        btnGameLogs.addEventListener("click", () => {
            renderModal(renderGameLogs(game.id));
        });

        const btnFormLog = document.createElement("button");
        btnFormLog.innerText = "Добавить событие";
        btnFormLog.addEventListener("click", () => {
            renderModal(formLog(game.id));
        });

        gameCardFooter.append(
            btnGameTeamStats,
            btnGamePlayersStats,
            btnGameLogs,
            btnFormLog,
        );

        gameCard.append(gameCardHeader, gameCardMain, gameCardFooter);

        gamesSection.append(gameCard);
    });

    const btnAddGame = document.createElement("button");
    btnAddGame.id = "add-game";
    btnAddGame.textContent = "Добавить игру";
    btnAddGame.addEventListener("click", () => {
        renderModal(formGame());
    });

    gamesSection.append(btnAddGame);

    document.body.append(gamesSection);
}
