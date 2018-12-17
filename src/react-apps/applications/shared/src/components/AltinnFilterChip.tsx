import { Chip, createMuiTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import * as React from 'react';
import altinnTheme from '../theme/altinnStudioTheme';

export interface IAltinnFilterChipCompontentProvidedProps {
  classes: any;
  key: any;
  label: string;
  onclickFunction?: any;
  active: boolean;
  className?: string;
  deleteIcon?: any;
  onDeleteFunction?: any;
  sortIcon?: boolean;
}

export interface IAltinnFilterChipComponentState {
}

const theme = createMuiTheme(altinnTheme);

const styles = {
  chip: {
    'color': '#000000',
    'borderColor': theme.altinnPalette.primary.blueDarker,
    'borderWidth': '1px',
    'borderStyle': 'dotted',
    'backgroundColor': '#FFF',
    'borderRadius': '36px',
    'minHeight': '36px',
    'fontSize': '16px',
    '&:hover': {
      backgroundColor: 'transparent !Important',
    },
    '&:focus': {
      backgroundColor: 'transparent !Important',
      borderColor: theme.altinnPalette.primary.blueDark,
      borderWidth: '1px',
      borderStyle: 'solid',
    },
  },
  chipActive: {
    'backgroundColor': theme.altinnPalette.primary.blueLight + ' !Important',
    'border': '1px solid ' + theme.altinnPalette.primary.blueDarker,
    'borderRadius': '36px',
    'minHeight': '36px',
    'fontSize': '16px',
    '&:hover': {
      backgroundColor: theme.altinnPalette.primary.blueLight + ' !Important',
    },
    '&:focus': {
      backgroundColor: theme.altinnPalette.primary.blueLight + ' !Important',
      border: '1px solid ' + theme.altinnPalette.primary.blueDark,
    },
  },
  down: {
    borderTop: '10px solid' + theme.altinnPalette.primary.black,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    margin: '4px 8px 2px 0px',
  },
};

// tslint:disable-next-line:max-line-length
class AltinnFilterChip extends React.Component<IAltinnFilterChipCompontentProvidedProps, IAltinnFilterChipComponentState> {
  public render() {
    const { classes } = this.props;
    return (
      <Chip
        key={this.props.key}
        label={this.props.label}
        clickable={true}
        color='primary'
        variant='outlined'
        onClick={this.props.onclickFunction}
        onDelete={this.props.onDeleteFunction}
        deleteIcon={this.props.sortIcon ? <i className={classNames(classes.down)} /> : this.props.deleteIcon}
        className={classNames(
          this.props.className,
          classes.chip,
          { [classes.chipActive]: this.props.active })}
      />
    );
  }
}

export default withStyles(styles)(AltinnFilterChip);
