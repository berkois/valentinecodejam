import { modal, modalImage, modalName, googleButton, googlePrefix, modalDescription } from "../utils/data.js";

const closeModal = () => {
  modal.classList.remove("modal_active");
  document.removeEventListener("keydown", escapeKey);
};

const escapeKey = (evt) => {
  if (evt.key === "Escape") {
    const isModalOpen = document.querySelector(".modal_active");
    isModalOpen ? closeModal() : null;
  }
};

const openModal = (selectedDate) => {
  modalName.textContent = selectedDate.name;
  modalImage.src = selectedDate.imgUrl;
  modalDescription.textContent = selectedDate.moreInfo;
  googleButton.href = `${googlePrefix}${encodeURIComponent(selectedDate.name)}`;
  modal.classList.add("modal_active");
  document.addEventListener("keydown", escapeKey);
};

export { closeModal, openModal };