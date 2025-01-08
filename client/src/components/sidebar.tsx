"use client";

import { cx } from "class-variance-authority";
import React from "react";
import { Separator } from "./ui/separator";
import MovieSorter from "./movie-sorter";
import DecadeSlider from "./decade-slider";
import ScoreSlider from "./score-slider";
import { Paintbrush } from "lucide-react";
import { MovieProviderContext } from "@/contexts/movie-list-props";
import SemanticSearch from "./semantic-search";

const Sidebar = ({ className }: { className?: string }) => {
  const { form, handleFormSubmit } = React.useContext(MovieProviderContext);

  const handleReset = () => {
    form.reset();
  };

  const handleDecadeValuesChange = (values: number[]) => {
    form.setValue("decadeMin", values[0]);
    form.setValue("decadeMax", values[1]);
  };

  const handleScoreValuesChange = (values: number[]) => {
    form.setValue("scoreMin", values[0]);
    form.setValue("scoreMax", values[1]);
  };

  return (
    <aside
      className={cx(
        "flex",
        "flex-col",
        "justify-start",
        "items-center",
        "rounded-lg",
        "px-4",
        "py-2",
        "dark:bg-gray-900",
        "min-h-[calc(100vh-9rem)]",
        className
      )}
    >
      <div className="flex items-center w-full pt-3 px-4">
        <h1 className="text-xl flex-1 text-gray-600 dark:text-white">
          Filtros
        </h1>
        <Paintbrush
          onClick={handleReset}
          className="h-4 w-4 cursor-pointer hover:text-orange-700"
        />
      </div>
      <Separator />
      <div className="mt-2 flex flex-col gap-4 items-center px-4">
        <MovieSorter />
        <DecadeSlider
          setDecade={handleDecadeValuesChange}
          range={[form.getValues().decadeMin, form.getValues().decadeMax]}
        />
        <ScoreSlider
          setScore={handleScoreValuesChange}
          range={[form.getValues().scoreMin, form.getValues().scoreMax]}
        />
      </div>
      <SemanticSearch handleFormSubmit={handleFormSubmit} form={form} />
    </aside>
  );
};

export default Sidebar;
