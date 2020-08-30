const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
  tabPanels.forEach((panel) => (panel.hidden = true));

  tabButtons.forEach((tab) => tab.setAttribute("aria-selected", false));

  event.currentTarget.setAttribute("aria-selected", true);

  const id = event.currentTarget.id;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;

  // method 2: turn tabPanels from nodelist to array and use .find().
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick),
);
