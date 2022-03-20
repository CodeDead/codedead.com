import deepPurple from '@mui/material/colors/deepPurple';
import purple from '@mui/material/colors/purple';
import green from '@mui/material/colors/green';
import lightGreen from '@mui/material/colors/lightGreen';
import blue from '@mui/material/colors/blue';
import lightBlue from '@mui/material/colors/lightBlue';
import red from '@mui/material/colors/red';
import grey from '@mui/material/colors/grey';

const ThemeSelector = (index, defaultColor) => {
  switch (index) {
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
    default:
      return {
        main: defaultColor,
      };
  }
};

export default ThemeSelector;
