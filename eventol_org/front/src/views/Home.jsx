import React from 'react';
import {render} from 'react-dom';

import Home from '../containers/Home';

window.render_components = properties => {
  window.params = {...properties};
  render(
    <Home
      handleOnChangeLanguage={properties.onChangeLanguage}
      languages={properties.languages}
    />,
    document.getElementById('root')
  );
};

if (module.hot) {
  if (window.params) window.render_components(window.params);
  module.hot.accept();
}
