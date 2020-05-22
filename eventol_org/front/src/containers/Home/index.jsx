import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Home extends React.PureComponent {
  static propTypes = {
    handleOnChangeLanguage: PropTypes.func,
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  };

  static defaultProps = {
    handleOnChangeLanguage: null,
    languages: [],
  };

  handlerOnChangeLanguage = languageCode => {
    const {handleOnChangeLanguage} = this.props;
    if (handleOnChangeLanguage) {
      handleOnChangeLanguage(languageCode);
    }
  };

  render() {
    const {languages} = this.props;
    return (
      <div style={{color: 'black'}}>
        Example text
        {languages.map(({code, name}) => (
          <p key={code}>{`${code}: ${name}`}</p>
        ))}
      </div>
    );
  }
}

export default Home;
