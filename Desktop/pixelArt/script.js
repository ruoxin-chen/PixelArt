/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

// Draw a highlight around the entire grid
// const grid = document.querySelector(".grid");

// grid.addEventListener("mouseenter", () => {
//   grid.style.outline = "2px solid goldenrod";
// });

// grid.addEventListener("mouseleave", () => {
//   grid.style.outline = "";
// });

// Highlight the pixel cell when hovering the mouse over it
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.outline = "2px solid goldenrod";
  });

  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });
});

// Highlight the color cell when hovering the mouse over it
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.addEventListener("mouseenter", () => {
    color.style.outline = "2px solid black";
  });

  color.addEventListener("mouseleave", () => {
    color.style.outline = "";
  });
});

// Pick the color to fill pixels
colors.forEach((color) => {
  console.log(color.style.backgroundColor);
  color.addEventListener("click", () => {
    fillColor(color.style.backgroundColor); // CAN NOT GET ITS BACKGROUND COLOR
  });
});

function fillColor(colorPicked) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.style.backgroundColor) {
        cell.style.backgroundColor = "";
      } else {
        cell.style.backgroundColor = colorPicked;
      }
    });
  });
}
