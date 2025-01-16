"use client";
import { MovieType } from "@/types";
import React from "react";
import Image from "next/image";
import { cx } from "class-variance-authority";
import { format } from "date-fns";
import { motion } from "framer-motion";

const MovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer"
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", // Sombras más ligeras
      }}
      transition={{
        type: "spring",
        stiffness: 200, // Transición más fluida
        damping: 10, // Reduce el rebote
      }}
    >
      {" "}
      <div
        className={cx(
          "absolute",
          "top-2",
          "right-2",
          "opacity-80",
          "bg-orange-800",
          "py-1",
          "px-2",
          "text-white",
          "font-bold",
          "text-xs",
          "border",
          "border-orange-100",
          "dark:border-gray-600"
        )}
      >
        {movie.vote_average.toFixed(1)}
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt={movie.title}
        width={200}
        height={300}
        priority
        className="border border-gray-100 dark:border-gray-600"
      />
      <div
        className={cx(
          "absolute",
          "text-center",
          "bottom-2",
          "left-2",
          "right-2",
          "rounded-lg",
          "bg-black",
          "text-white",
          "px-2",
          "py-1",
          "opacity-80",
          "text-xs",
          "border",
          "border-gray-100",
          "dark:border-gray-600",
          "hidden",
          "group-hover:block"
        )}
      >
        {movie.title} ({format(movie.release_date, "yyyy")})
      </div>
    </motion.div>
  );
};

export default MovieCard;
