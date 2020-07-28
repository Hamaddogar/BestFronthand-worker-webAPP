import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './style.css';

const styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
        maxWidth: "780px",
    },

    notchedOutline: {
        borderWidth: "1px",
        borderColor: "rgb(221, 221, 221) !important"
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: "rgb(251, 210, 50) !important",
        }
    },
    cssFocused: {
        borderColor: "rgb(251, 210, 50) !important"
    },



    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        color: "black",
        display: "flex",
        width: "150px",
        fontWeight: "bold",
        backgroundColor: "rgb(251, 210, 50)", '&:hover': {
            backgroundColor: 'black',
            color: "white",
        },
        border: "none",
        borderRadius: "1px",
        padding: "8px",
    },
    error: {
        color: "red",
        textAlign: "center",
        margin: "0px",
        marginTop:"-3px",
        paddingTop: "0px",
    }
});



class OutlinedTextFields extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        nameError: false,
        emailError: false,
        subjectError: false,
        messageError: false,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            nameError: false,
            emailError: false,
            subjectError: false,
            messageError: false,
        })


        const validate = /\S+@\S+\.\S+/;;
        if (this.state.name === "") { this.setState({ nameError: true }) }
        if (!validate.test(this.state.email)) { this.setState({ emailError: true }) }
        if (this.state.subject === "") { this.setState({ subjectError: true }) }
        if (this.state.message === "") { this.setState({ messageError: true }) }

    }



    render() {
        const { classes } = this.props;

        return (
            <div className="my-container-r">
                <Grid container style={{ width: "fit-content", }} >
                    <form className={classes.container} noValidate autoComplete="off">
                        <p className="heading-r">Get A Quick Quote</p>
                        <p className="p-r" style={{ marginTop: "0px" }}>Send us an email by entering your details and any comments you may have in the form.</p>
                        <Grid className="column-r">
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    style={{ width: "98%", }}
                                    placeholder="Your Name"
                                    className='input-r'
                                    margin="normal"
                                    variant="outlined"
                                    id="try"
                                    name="name"
                                    onChange={this.handleChange}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    // className={classes.notchedOutline}
                                    onClick={this.handleClass}

                                />

                                {this.state.nameError === true ? <p className={classes.error}>Please fill in the required field.</p> : null}
                            </ Grid>



                            <Grid item xs={12} sm={6} >

                                <TextField
                                    style={{ width: "98%", }}
                                    id="outlined-bare"
                                    placeholder="Your Email"
                                    margin="normal"
                                    type="email"
                                    variant="outlined"
                                    name="email"
                                    onChange={this.handleChange}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    className={classes.field}



                                />
                                {this.state.emailError === true ? <p className={classes.error}>Please fill in the required field.</p> : null}

                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    style={{ width: "98%", }}
                                    id="outlined-bare"
                                    placeholder="Subject"
                                    margin="normal"
                                    variant="outlined"
                                    name="subject"
                                    className={classes.field}
                                    onChange={this.handleChange}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}


                                />
                                {this.state.subjectError === true ? <p className={classes.error}>Please fill in the required field.</p> : null}

                            </ Grid>
                            <Grid item xs={12} sm={6} >

                                <TextField
                                    style={{ width: "98%", outlineWidth: "10px", outlineColor: "yellow" }}
                                    id="outlined-bare"
                                    placeholder="Phone"
                                    margin="normal"
                                    variant="outlined"
                                    name="phone"
                                    onChange={this.handleChange}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    className={classes.field}


                                />
                            </Grid>
                        </Grid>

                        <TextField
                            style={{ width: "99%" }}
                            id="outlined-multiline-flexible"
                            multiline
                            rows="4"
                            placeholder="Your Message"
                            // value={this.state.multiline}
                            // onChange={this.handleChange('multiline')}
                            margin="normal"
                            variant="outlined"
                            name="message"
                            onChange={this.handleChange}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssFocused,
                                },
                            }}
                            className={classes.field}


                        />
                        <Button onClick={this.handleSubmit} className={classes.button} >
                            SEND MESSAGE
                    </Button>
                        {this.state.nameError === true || this.state.emailError === true || this.state.subjectError === true ? <p className={classes.error}>Validation errors occurred. Please confirm the fields and submit it again</p> : null}

                    </form>
                </Grid>
            </div>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
