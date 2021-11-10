import React from 'react';
import {ThemeContext} from '../../context/theme_context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      >
        change
        </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;