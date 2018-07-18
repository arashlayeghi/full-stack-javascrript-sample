import React from 'react';
import PropTypes from 'prop-types';

// class ContestPreview extends React.Component {
//   handleClick = () => {
//     console.log(this.props.contestName);
//   };
//
//   render() {
//     return (
//       <div className="ContestPreview">
//         <div className="category-name">
//           {this.props.categoryName}
//         </div>
//         <div className="contest-name">
//           {this.props.contestName}
//         </div>
//       </div>
//     );
//   }
// };
//
// ContestPreview.prototype = {
//    categoryName: PropTypes.string.isRequired,
//    contestName: PropTypes.string.isRequired
// };

const ContestPreview = (contest) => (
  <div className="ContestPreview">
    <div className="category-name">
      {contest.categoryName}
    </div>
    <div className="contest-name">
      {contest.contestName}
    </div>
  </div>
);

export default ContestPreview;
