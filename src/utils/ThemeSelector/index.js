import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const ThemeSelector = (index, defaultColor) => {
  switch (index) {
    default:
      return {
        main: defaultColor,
      };
    case 1:
      return purple;
    case 2:
      return deepPurple;
    case 3:
      return green;
    case 4:
      return lightGreen;
    case 5:
      return red;
    case 6:
      return blue;
    case 7:
      return lightBlue;
    case 8:
      return grey;
  }
};

export default ThemeSelector;
