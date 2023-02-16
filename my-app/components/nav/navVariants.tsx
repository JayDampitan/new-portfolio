export const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 5,
    },
  },
};

export const navVariant = {
  hidden: {
    y: "-100%",
  },
  navVisible: {
    y: ["-100%", "0%"],
    transition: {
      duration: 0.3,
    },
  },
  navHide: {
    y: ["0%", "-100%"],
    transition: {
      duration: 0.3,
    },
  },
};
