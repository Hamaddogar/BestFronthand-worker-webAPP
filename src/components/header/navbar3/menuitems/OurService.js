import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import "../navbar3.css"

const Extras = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: true }));
  };

  handleClose = event => {
    // this.setState(state => ({ open: false }));

    // if (this.anchorEl.contains(event.target)) {
    //   return;
    // }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        
        <div >
          <Button
            // buttonRef={node => {
            //   this.anchorEl = node;
            // }}
            // aria-owns={open ? 'menu-list-grow' : undefined}
            // aria-haspopup="true"
            onMouseOver={this.handleToggle}
            onMouseOut={this.handleClose}
            className="nav3-box2-r"
          >
          OUR SERVICES
          </Button>
          <div className="last-corner-nav3-r"></div>

          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper onMouseOut={this.handleClose} className="extras2-dropdown-r">
                  <ClickAwayListener onMouseOut={this.handleCloseS}  onClickAway={this.handleClose}          
>
                    <MenuList>
                    <MenuItem className="extras2-links-r" onMouseOver={this.handleToggle} onClick={this.handleClose}>Grid Layout 1</MenuItem>
                    <MenuItem className="extras2-links-r" onMouseOver={this.handleToggle} onClick={this.handleClose}>Grid Layout 2</MenuItem>
                    <MenuItem className="extras2-links-r" onMouseOver={this.handleToggle} onClick={this.handleClose}>Grid Layout 3</MenuItem>
                    <MenuItem className="extras2-links-r" onMouseOver={this.handleToggle} onClick={this.handleClose}>Grid Layout 4</MenuItem>
                    <MenuItem className="extras2-links-r" onMouseOver={this.handleToggle} onClick={this.handleClose}>List Layout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Extras)(MenuListComposition);