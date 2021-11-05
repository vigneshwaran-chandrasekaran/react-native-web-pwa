import React from "react";

export default function Swipe() {
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  function handleTouchStart(e) {
    console.log("handleTouchStart");
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    console.log("handleTouchMove");
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    console.log("handleTouchEnd");
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      console.log("left swipe");
      // moveSliderRight();
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      console.log("right swipe");
      // moveSliderLeft();
    }
  }

  function handleMouseDown(e) {
    console.log("handleMouseDown", e);
  }
  function handleMouseMove(e) {
    // console.log("handleMouseMove", e);
  }

  function handleMouseUp(e) {
    console.log("handleMouseUp", e);
  }

  function handleMouseLeave(e) {
    // console.log("handleMouseLeave", e);
  }

  return (
    <div>
      <div
        className="swipe"
        // onTouchEnd={() => handleTouchEnd()}
        // onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
        // onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}

        onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
        onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
        onMouseUp={() => handleMouseUp()}
        onMouseLeave={() => handleMouseLeave()}
      >
        parent box
      </div>
    </div>
  );
}
