// Business logic -- functions to calculate what type of triangle it is
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
              return 4;
            }
          }
        }
      }
    }
  } else {
    return 5;
  }

  // NOT a Triangle
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
    $("#output").text(result);
  });
});
