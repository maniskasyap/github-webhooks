import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class Booklist extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ background: theme.bg, color: theme.syntax }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>Life of Pi</li>
//           <li style={{ background: theme.ui }}>Karma</li>
//           <li style={{ background: theme.ui }}>Leila </li>
//         </ul>
//       </div>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>Life of Pi</li>
        <li style={{ background: theme.ui }}>Karma</li>
        <li style={{ background: theme.ui }}>Leila </li>
      </ul>
    </div>
  );
};

export default BookList;

// export default Booklist;
