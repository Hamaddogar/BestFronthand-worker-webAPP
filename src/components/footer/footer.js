import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./footer.css"
import logoAlt from "./images/logo-alt.png";
import FooterBar from "./FooterBar/navbar"
import 'font-awesome/css/font-awesome.css'
import Hidden from '@material-ui/core/Hidden';
const styles = theme => ({


});

function CenteredGrid(props) {
    // const { classes } = props;

    return (
        <div className="footer-r">
            <div className="bg-r">
                <Grid container spacing={24}>
                    <Grid item md={4} xs={11}>
                        <img src={logoAlt} alt="Renovation" />
                        <p className="p1-r">Our mission is to provide the best renovation service at an reasonable price without sacrificing quality. You will be satisfy with our work knowing we take the necessary steps to meet your needs and get the job done right</p>
                    </Grid>

                    <Grid item md={4}>
                    </Grid>

                    <Grid item md={4} xs={11}>
                        <p className="p2-r">Renovation Office</p>
                        <div className="ro-container-r">
                            <div className="icons-box-r">
                            <span className="fa fa-map-marker icon-r"></span>
                            <span className="fa fa-phone icon-r"></span>
                            <span className="fa fa-envelope icon-r"></span>
                            <span className="fa fa-fax icon-r"></span>
                            <span className="fa fa-clock-o icon-r"></span>
                            </div>
                            <div className="icons-data-box-r">
                                <p className="icon-data-r"> 14 Tottenham Road, London, England.</p>
                                <p className="icon-data-r"> (102) 6666 8888</p>
                                <p className="icon-data-r">  info@thememove.com</p>
                                <p className="icon-data-r">(102) 8888 9999</p>
                                <p className="icon-data-r">  Mon - Sat: 9:00 - 18:00</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Hidden mdDown>
            <FooterBar />
            </Hidden>
            <div className="made-by-r">
                Made by Gamica Cloud
            </div>

        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid)