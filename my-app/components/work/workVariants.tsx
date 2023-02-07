export const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };
  
  export const yellowVariant = {
    visible: {
      y: [0, 10, 10, 30, 30, 10, 10, 0],
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
      transition: {
        duration: 6,
        delay: 6,
        repeat: Infinity,
      },
    },
    hover: {
      scale: 1.2,
    },
  };