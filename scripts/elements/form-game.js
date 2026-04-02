import { arenasList } from "../state/mock-arenas.js";
import { teamsList } from "../state/mock-teams.js";
import formatTime from "../helpers/format-time.js";
import formatDate from "../helpers/format-date.js";
import setGameStart from "../state/set-game.js";

export default function formGame() {
    const formGame = document.createElement("form");
    formGame.classList = "form-game";

    const selectDate = document.createElement("select");
    selectDate.name = "name";
    for (let i = 0; i < 10; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = formatDate(i);
        selectDate.append(option);
    }

    const selectTime = document.createElement("select");
    selectTime.name = "time";
    for (let i = 0; i < 1440; i += 5) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = formatTime(i);
        selectTime.append(option);
    }

    const selectArena = document.createElement("select");
    selectArena.name = "arena";
    arenasList.forEach((item) => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        selectArena.append(option);
    });

    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Add";

    const selectHomeTeam = document.createElement("select");
    selectHomeTeam.name = "home-team";

    const selectAwayTeam = document.createElement("select");
    selectAwayTeam.name = "away-team";

    teamsList.forEach((team) => {
        const option1 = document.createElement("option");
        option1.value = team.id;
        option1.textContent = team.name;
        selectHomeTeam.append(option1);
        const option2 = document.createElement("option");
        option2.value = team.id;
        option2.textContent = team.name;
        selectAwayTeam.append(option2);
    });

    btnAdd.addEventListener("click", (e) => {
        e.preventDefault();

        if (selectHomeTeam.value === selectAwayTeam.value) {
            alert("Должны быть выбраны разные команды");
            return;
        }

        setGameStart([
            selectHomeTeam.value,
            selectAwayTeam.value,
            selectDate.value,
            selectTime.value,
            selectArena.value,
        ]);
    });

    formGame.append(
        selectHomeTeam,
        selectAwayTeam,
        selectDate,
        selectTime,
        selectArena,
        btnAdd
    );

    return formGame;
}
