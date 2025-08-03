import { useState } from "react";

const zoomOptions = ["Fit", "50%", "75%", "90%", "100%", "125%", "150%", "200%"];

interface ZoomDropdownProps {
  onZoomChange: (scale: number | "fit") => void;
}

const ZoomDropdown: React.FC<ZoomDropdownProps> = ({ onZoomChange }) => {
  const [selectedZoom, setSelectedZoom] = useState("Fit");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedZoom(value);

    if (value === "Fit") {
      onZoomChange("fit");
    } else {
      onZoomChange(parseInt(value) / 100);
    }
  };

  return (
    <select
      value={selectedZoom}
      onChange={handleChange}
      className="border rounded px-2 py-1 text-sm"
    >
      {zoomOptions.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default ZoomDropdown;