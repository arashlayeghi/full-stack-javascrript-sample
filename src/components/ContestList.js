import React from 'react';
import PropTypes from 'prop-types'
import ContestPreview from './ContestPreview';


const ContestList = ({ contests }) => (
  <div className="ContestList">
    {contests.map(Contest =>
      <ContestPreview key ={Contest.id} {...Contest} >
      </ContestPreview>
    )}
  </div>
);

ContestList.prototype = {
  contests: PropTypes.array
}

export default ContestList;
