import React, { useState } from "react";
import { CardView } from "./CardView";
import { ListView } from "./ListView";
import "../../styles/CardContainer.css";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";

export const CardContainer = (props) => {
  const [viewMode, setViewMode] = useState("card-view");

  const handleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="card-container">
      <div className="card-container-header">
        <GridViewIcon
          style={{ marginRight: "10px" }}
          onClick={() => handleViewMode("card-view")}
          className={viewMode === "card-view" ? "active" : ""}
        />
        <ViewListIcon
          onClick={() => handleViewMode("list-view")}
          className={viewMode === "list-view" ? "active" : ""}
        />
      </div>
      <div className="view-mode">
        {viewMode === "card-view" ? (
          <CardView cars={props.cars} />
        ) : (
          <ListView cars={props.cars} />
        )}
      </div>
    </div>
  );
};
