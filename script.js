const percentageFrontend = [90, 90, 90, 90, 80, 80, 70, 50];

const setSkillPercentage = () => {
  const filledPercentage = document.querySelectorAll(
    ".skills  .flex-container .percentage-container .percentage .percentage-filled"
  );
  for (let i = 0; i < filledPercentage.length; i++) {
    filledPercentage[i].style.width = `${percentageFrontend[i]}%`;
  }
};

setSkillPercentage();
