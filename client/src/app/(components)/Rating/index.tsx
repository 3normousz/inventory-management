import { Star } from "lucide-react";
import React from "react";

type RatingProps = {
  rating: number;
};

const Rating = (props: RatingProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={index}
      color={index <= props.rating ? "#FFD700" : "#D3D3D3"}
      className={`w-4 h-4`}
    />
  ));
};

export default Rating;
