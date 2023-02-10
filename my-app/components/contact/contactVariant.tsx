export const whiteVariant = {
    visible: {
      y: [0, 10, 10, 30, 30, 10, 10, 0],
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
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
      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
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

  export const orangeVariant = {
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

  export const contactVariant = {
    hidden: {
      opacity: 0,
      scale: .8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5
      }
    },
  };

// --------------bottom left element variant
  export const blVariant = {
    hidden: {
      opacity: 0,
      x: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1
      }
    },
    hover: {
      x: 10
    }
  };