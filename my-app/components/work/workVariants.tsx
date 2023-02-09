// -------------start of background variants
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

// ----------start of other projects variants

export const otherTitleVariant = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5
    }
  }
}

// -----------card while hover variant

export const cardHoverVariant = {
  hover: {
    opacity: 1,
    y: -10,
    transition: {
      duration: .2
    }
  },
}





// ---------start ending header variants 

export const endingTitleVariant = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  },
};
export const endingPhraseVariant = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  },
};
