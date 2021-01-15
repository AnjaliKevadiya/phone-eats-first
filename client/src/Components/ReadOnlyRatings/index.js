import React from "react";
import Rating from "@material-ui/lab/Rating";

function ReadOnlyRatings() {
  return (
    <div>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </div>
  );
}

export default ReadOnlyRatings;
