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

export const descriptionVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
export const stacksVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};




