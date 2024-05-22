import React, { useState } from "react";
import { Flex } from "@adobe/react-spectrum";
import Launch from "@spectrum-icons/workflow/Launch";
import Code from "@spectrum-icons/workflow/Code";
import Add from "@spectrum-icons/workflow/Add";
import Education from "@spectrum-icons/workflow/Education";
import Gauge4 from "@spectrum-icons/workflow/Gauge4";

export default function Toolbar() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const getIconStyle = (iconName) => {
    return { fill: activeIcon === iconName ? 'var(--spectrum-blue-900)' : '#ababab' };
  };

  return (
    <Flex direction="column" alignItems="center" gap="size-400">
      <div onClick={() => handleClick('Launch')}>
        <Launch size="S" UNSAFE_style={getIconStyle('Launch')} />
      </div>
      <div onClick={() => handleClick('Code')}>
        <Code size="S" UNSAFE_style={getIconStyle('Code')} />
      </div>
      <div onClick={() => handleClick('Add')}>
        <Add size="S" UNSAFE_style={getIconStyle('Add')} />
      </div>
      <div onClick={() => handleClick('Gauge4')}>
        <Gauge4 size="S" UNSAFE_style={getIconStyle('Gauge4')} />
      </div>
      <div onClick={() => handleClick('Education')}>
        <Education size="S" UNSAFE_style={getIconStyle('Education')} />
      </div>
    </Flex>
  );
}
