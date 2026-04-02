export default function createModal(element) {
    const backDrop = document.createElement("div");
    backDrop.classList.add("backdrop");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalHeader = document.createElement("header");

    const btnClose = document.createElement("button");
    btnClose.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
  <line x1="6" y1="6" x2="18" y2="18" />
  <line x1="6" y1="18" x2="18" y2="6" />
</svg>`;

    btnClose.addEventListener("click", () => {
        backDrop.remove();
        modal.remove();
    });

    const modalMain = document.createElement("main");

    modalHeader.append(btnClose);

    if (element) {
        modalMain.append(element);
    }

    modal.append(modalHeader, modalMain);

    document.body.append(backDrop, modal);
}
