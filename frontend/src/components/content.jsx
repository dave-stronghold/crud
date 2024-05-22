import { View, Image } from "@adobe/react-spectrum";
import React, { useRef, useEffect, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import './content.css';

export default function Content() {
  const imageRef = useRef(null);
  const viewRef = useRef(null); // Ref for the View component
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const controls = useDragControls();

  const handleClickOutside = (event) => {
    if (imageRef.current && !imageRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  const handleZoom = (event) => {
    if (!event.ctrlKey) return; // Only zoom if Ctrl key is pressed

    event.preventDefault(); // Prevent default browser zoom

    // Check if the event target is the imageRef element or one of its descendants
    if (!imageRef.current.contains(event.target)) return;

    const newScale = Math.max(0.2, scaleValue + event.deltaY * -0.0025); // Ensure scale value does not go below 0.2
    const rect = imageRef.current.getBoundingClientRect();
    const rectWidth = rect.width;
    const rectHeight = rect.height;

    // Ensure the image has non-zero dimensions and the event coordinates are within the image bounds
    if (rectWidth > 0 && rectHeight > 0) {
      const offsetX = ((event.pageX - rect.left) / rectWidth) * 100;
      const offsetY = ((event.pageY - rect.top) / rectHeight) * 100;

      if (offsetX >= 0 && offsetX <= 100 && offsetY >= 0 && offsetY <= 100) {
        setTransformOrigin(`${offsetX}% ${offsetY}%`);
      }
    }

    setScaleValue(newScale);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("wheel", handleZoom, { passive: false }); // Set passive to false
    return () => {
      document.removeEventListener("wheel", handleZoom);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [scaleValue]);

  const handleImageClick = () => {
    setIsClicked(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDragEnd = (event, info) => {
    // This function is kept in case you want to handle drag end logic
  };

  return (
    <View ref={viewRef} overflow={"hidden"} position={"relative"} height={"100%"}>
      <p style={{
        position: "absolute",
        zIndex: '1'
      }}>
        {scaleValue.toFixed(2)} || {transformOrigin}
      </p>
      <motion.div
        className="backdrop"
        drag
        dragControls={controls}
        dragMomentum={false}
        dragPropagation={true}
        onDragEnd={handleDragEnd}
        ref={imageRef}
        onClick={handleImageClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `scale(${scaleValue})`,
          transformOrigin: transformOrigin,
          border:
            isClicked || isHovered
              ? "1.5px solid var(--spectrum-blue-500)"
              : "1.5px solid transparent",
          maxWidth: "70%",
          position: "absolute",
          top: "25%",
          left: "25%",
        }}
      >
        <Image
          UNSAFE_style={{
            pointerEvents: "none",
          }}
          alt="k"
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </motion.div>
    </View>
  );
}
