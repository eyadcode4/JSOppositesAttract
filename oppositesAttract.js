export function isLove(petalsFlower1, petalsFlower2) {
    if (petalsFlower1 % 2 === 0 && petalsFlower2 % 2 === 1) {
      return true;
    } else if (petalsFlower1 % 2 === 1 && petalsFlower2 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }