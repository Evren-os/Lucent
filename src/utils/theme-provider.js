const lsData = localStorage.getItem("data-theme");
let isLightModeEnabled = false;

if (lsData) {
  try {
    const parsedData = JSON.parse(lsData);
    isLightModeEnabled = parsedData?.state?.isLightMode || false;
  } catch (error) {
    console.error("Invalid JSON in localStorage for data-theme:", error);
  }
}

document.documentElement.setAttribute(
  "data-theme",
  isLightModeEnabled ? "light" : "dark"
);
