import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function ReadOnlyRatings(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={props.ratingValue} readOnly />
      </Box>
    </div>
  );
}

export default ReadOnlyRatings;
