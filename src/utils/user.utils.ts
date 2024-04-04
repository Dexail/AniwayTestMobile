export function getCarIcon(type: number) {
  switch (type) {
  case 6:
    return 'fourSeaterCarIcon';
  case 5:
    return 'fourteenSeaterCar';
  case 4:
    return 'tenSeaterCar';
  case 3:
    return 'fourteenSeaterCar';
  case 2:
    return 'sixSeaterCar';
  case 1:
    return 'fourteenSeaterCar';
  default:
    return 'fourSeaterCarIcon';
  }
}
