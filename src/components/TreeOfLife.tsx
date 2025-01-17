import React, { useState } from "react";
import Sefira from "./tree/Sefira";
import Path from "./tree/Path";
import SefiraDetails from "./tree/SefiraDetails";
import { SEPHIROTH_INFO, SEPHIROTH_COORDS, PATHS_INFO } from "../data/tree";
import type { Path as PathType } from "../data/tree";

interface TreeOfLifeProps {
  sendero: string;
  showDetails?: boolean;
}

const TreeOfLife: React.FC<TreeOfLifeProps> = ({ sendero, showDetails = true }) => {
  const [activeSefira, setActiveSefira] = useState<keyof typeof SEPHIROTH_COORDS | null>(null);

  const handleSefiraClick = (sefira: keyof typeof SEPHIROTH_COORDS) => {
    setActiveSefira(activeSefira === sefira ? null : sefira);
  };

  return (
    <div className="relative">
      <svg
        viewBox="0 0 600 600"
        className="w-full max-w-2xl mx-auto"
        style={{ background: "transparent" }}
      >
        {/* Renderizar los senderos */}
        {PATHS_INFO.map((path) => (
          <Path
            key={`${path.start}-${path.end}`}
            x1={SEPHIROTH_COORDS[path.start].x}
            y1={SEPHIROTH_COORDS[path.start].y}
            x2={SEPHIROTH_COORDS[path.end].x}
            y2={SEPHIROTH_COORDS[path.end].y}
            letra={path.letra}
            isActive={sendero === `${path.start}-${path.end}`}
            onClick={() => {}}
          />
        ))}

        {/* Renderizar las Sefirot */}
        {(Object.entries(SEPHIROTH_INFO) as [keyof typeof SEPHIROTH_COORDS, typeof SEPHIROTH_INFO[keyof typeof SEPHIROTH_COORDS]][]).map(([key, sefira]) => (
          <Sefira
            key={key}
            {...sefira}
            x={SEPHIROTH_COORDS[key].x}
            y={SEPHIROTH_COORDS[key].y}
            isActive={activeSefira === key}
            onClick={() => handleSefiraClick(key)}
          />
        ))}
      </svg>

      {/* Panel de detalles */}
      {showDetails && activeSefira && (
        <SefiraDetails
          {...SEPHIROTH_INFO[activeSefira]}
          isVisible={true}
        />
      )}
    </div>
  );
};

export default TreeOfLife;
