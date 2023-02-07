export const nameVariant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 4,
      },
    },
  };

  export const titleVariant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 4.5,
      },
    },
  };
  
  export const whiteVariant = {
    visible: {
      y: [0, 10, 10, 30, 30, 10, 10, 0],
      scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
      transition: {
        duration: 8,
        delay: 5,
        repeat: Infinity,
      },
    },
    hover: {
      scale: 1.2,
    },
  };
  export const blueVariant = {
    visible: {
      y: [0, 10, 10, 30, 30, 10, 10, 0],
      scale: [1, 1.2, 1, 1.2, 1, 1.2, 1],
      transition: {
        duration: 8,
        delay: 5.5,
        repeat: Infinity,
      },
    },
    hover: {
      scale: 1.2,
    },
  };
  export const yellowVariant = {
    visible: {
      y: [0, 10, 10, 30, 30, 10, 10, 0],
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
      transition: {
        duration: 8,
        delay: 6,
        repeat: Infinity,
      },
    },
    hover: {
      scale: 1.2,
    },
  };
  