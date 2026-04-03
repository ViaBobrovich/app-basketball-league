import formatTime from "../helpers/format-time.js";
import { gamesList } from "../state/mock-games.js";
import { ACTIONS, ACTIONSVOCABULARY } from "../helpers/actions.js";
import { LOCATIONS, THREEPOINTLOCATIONS } from "../helpers/locations.js";
import setLog from "../state/set-log.js";
import { renderCourt, renderCourtSegments } from "./court.js";
import { playersList } from "../state/mock-players.js";

export default function formLog(gameId) {
    const game = gamesList.find((item) => {
        return item.id === gameId;
    });

    const form = document.createElement("form");
    form.className = "form-log";

    const selectPlayer = document.createElement("select");
    selectPlayer.name = "player";

    game.homePlayersIdsList.forEach((playerId) => {
        const player = playersList.find((elem) => elem.id === playerId);

        const option = document.createElement("option");
        option.value = player.id;
        option.innerText = player.lastName;
        selectPlayer.append(option);
    });

    game.awayPlayersIdsList.forEach((playerId) => {
        const player = playersList.find((elem) => elem.id === playerId);

        const option = document.createElement("option");
        option.value = player.id;
        option.innerText = player.lastName;
        selectPlayer.append(option);
    });

    const selectTime = document.createElement("select");
    selectTime.name = "time";
    for (let i = 1; i <= 600; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = formatTime(i);
        selectTime.append(option);
    }

    const selectAction = document.createElement("select");
    selectAction.name = "action";
    ACTIONS.forEach((item) => {
        const option = document.createElement("option");
        option.value = item;
        option.innerText = ACTIONSVOCABULARY[item];
        selectAction.append(option);
    });

    const selectLocation = document.createElement("select");
    selectLocation.name = "location";

    LOCATIONS.forEach((item) => {
        const option = document.createElement("option");
        option.innerText = item;
        selectLocation.append(option);
    });

    const btnLog = document.createElement("button");
    btnLog.innerText = "Log";
    btnLog.addEventListener("click", (e) => {
        e.preventDefault();
        setLog([
            game.id,
            selectPlayer.value,
            selectAction.value,
            selectLocation.value,
            selectTime.value,
        ]);
        alert("Событие создано успешно");
    });

    const court = renderCourt();
    court.classList.add("crt");

    const segments = renderCourtSegments();

    court.append(segments);

    for (const segment of segments.children) {
        if (segment.id === "0-A") {
            segment.classList.add("crt-selected");
        }
    }

    for (const segment of segments.children) {
        segment.addEventListener("click", () => {
            selectLocation.value = segment.id;
            for (const segment of segments.children) {
                segment.classList.remove("crt-selected");
            }
            segment.classList.add("crt-selected");
        });
    }

    selectLocation.addEventListener("change", () => {
        let segmentSelected;

        for (const segment of segments.children) {
            if (segment.id === selectLocation.value) {
                segmentSelected = segment;
            }
        }

        for (const segment of segments.children) {
            segment.classList.remove("crt-selected");
        }
        segmentSelected.classList.add("crt-selected");
    });

    form.append(
        selectPlayer,
        selectAction,
        selectLocation,
        selectTime,
        btnLog,
        court,
    );

    return form;
}
