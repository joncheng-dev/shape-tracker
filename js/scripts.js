// Business logic -- function to decide if sides form a triangle
// If it does, determine what type of triangle it is
function triangle(side1, side2, side3) {
  if (side1 + side2 > side3) {
    if (side1 + side3 > side2) {
      if (side2 + side3 > side1) {
        // This is a triangle. Continue on.
        if (side1 === side2) {
          if (side2 === side3) {
            // Equilateral Triangle
            return 1;
          }
          if (side2 != side3) {
            // This is an isosceles triangle.
            return 2;
          }
        } else if (side1 === side3) {
          if (side1 != side2) {
            // This is an isosceles triangle.
            return 2;
          }
        } else if (side2 === side3) {
          if (side2 != side1) {
            // This is an isosceles triangle.
            return 2;
          }
        } else if (side1 != side2) {
          if (side1 != side3) {
            if (side2 != side3) {
              // Scalene triangle
              return 3;
            }
          }
        }
      }
    }
  } else {
    // NOT a Triangle
    return 5;
  }
}

// User interface logic -- user enters information & send it to functions
$(document).ready(function () {
  // Upon clicking the submit button.. do the following:
  $("#triangle").submit(function (event) {
    event.preventDefault();
    // Collect the three sides' values from the html page, and parse to int.
    const s1 = parseInt($("#side1").val());
    const s2 = parseInt($("#side2").val());
    const s3 = parseInt($("#side3").val());

    const result = triangle(s1, s2, s3);
    // Send result to html page.
    if (result === 1) {
      $("#output").text("These sides form an Equilateral Triangle.");
    } else if (result === 2) {
      $("#output").text("These sides form an Isosceles Triangle.");
    } else if (result === 3) {
      $("#output").text("These sides form a Scalene Triangle.");
    } else {
      $("#output").text("These sides do not form a triangle.");
    }
  });
});
