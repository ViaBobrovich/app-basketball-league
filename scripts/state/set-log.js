import pageMain from "../pages/page-main.js";
import { gamesList } from "./mock-games.js";

export default function setLog([
    gameId,
    selectPlayerId,
    selectAction,
    selectLocation,
    selectTime,
]) {
    const game = gamesList.find((elem) => elem.id === gameId);

    let i = game.logs.length + 1;

    game.logs.push({
        logId: i.toString(),
        playerId: selectPlayerId,
        action: selectAction,
        location: selectLocation,
        time: selectTime,
        playerExtra: null,
    });

    pageMain();
}
