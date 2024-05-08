import React, { Component, useState } from "react";

import PropTypes from "prop-types";

import validate from "validate.js";

import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

import CloseIcon from "@material-ui/icons/Close";

import AuthProviderList from "../AuthProviderList";

import constraints from "../../constraints";
import authentication from "../../services/authentication";
import crypto from "crypto";

const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },

  icon: {
    marginRight: theme.spacing(0.5),
  },

  divider: {
    margin: "auto",
  },

  grid: {
    marginBottom: theme.spacing(2),
  },
});

const initialState = {
  performingAction: false,
  emailAddress: "",
  password: "",
  errors: null,
};

function SignInDialog(props) {
  let [state, setState] = useState(initialState);
  let [emailPassword, setEmailPassword] = useState(true);

  const getSignInButton = () => {
    const { emailAddress, password, performingAction } = state;

    if (emailAddress && !password) {
      return (
        <Button
          color="primary"
          disabled={!emailAddress || performingAction}
          variant="contained"
          onClick={() => sendSignInLinkToEmail()}
        >
          Send sign-in link
        </Button>
      );
    }

    return (
      <Button
        color="primary"
        disabled={!emailAddress || performingAction}
        variant="contained"
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    );
  };

  const resetPassword = () => {
    const { emailAddress } = state;

    const errors = validate(
      {
        emailAddress: emailAddress,
      },
      {
        emailAddress: constraints.emailAddress,
      }
    );

    if (errors) {
      setState({
        ...state,
        errors: errors,
      });
    } else {
      setState({
        ...state,
        errors: null,
      });

      setState({
        ...state,
        performingAction: true,
      });

      authentication
        .resetPassword(emailAddress)
        .then((value) => {
          props.openSnackbar(`Sent password reset e-mail to ${emailAddress}`);
        })
        .catch((reason) => {
          const code = reason.code;
          const message = reason.message;

          switch (code) {
            case "auth/invalid-email":
            case "auth/missing-android-pkg-name":
            case "auth/missing-continue-uri":
            case "auth/missing-ios-bundle-id":
            case "auth/invalid-continue-uri":
            case "auth/unauthorized-continue-uri":
            case "auth/user-not-found":
              props.openSnackbar(message);
              return;

            default:
              props.openSnackbar(message);
              return;
          }
        })
        .finally(() => {
          setState({
            ...state,
            performingAction: false,
          });
        });
    }
  };

  const signIn = () => {
    const { emailAddress, password } = state;

    const errors = validate(
      {
        emailAddress: emailAddress,
        password: password,
      },
      {
        emailAddress: constraints.emailAddress,
        password: constraints.password,
      }
    );

    if (errors) {
      setState({
        ...state,
        errors: errors,
      });
    } else {
      setState({
        ...state,
        performingAction: true,
        errors: null,
      });

      authentication
        .signIn(emailAddress, password)
        .then((user) => {
          props.dialogProps.onClose(() => {
            const displayName = user.displayName;
            const emailAddress = user.email;

            let hash = crypto
              .createHash("sha1")
              .update(emailAddress + password)
              .digest("hex");
            localStorage.setItem("hash", hash);

            props.openSnackbar(`Signed in as ${displayName || emailAddress}`);
          });
        })
        .catch((reason) => {
          const code = reason.code;
          const message = reason.message;

          switch (code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            case "auth/wrong-password":
              props.openSnackbar(message);
              return;

            default:
              props.openSnackbar(message);
              return;
          }
        })
        .finally(() => {
          setState({
            ...state,
            performingAction: false,
          });
        });
    }
  };

  const sendSignInLinkToEmail = () => {
    const { emailAddress } = state;

    const errors = validate(
      {
        emailAddress: emailAddress,
      },
      {
        emailAddress: constraints.emailAddress,
      }
    );

    if (errors) {
      setState({
        ...state,
        errors: errors,
      });

      return;
    }

    setState({
      ...state,
      performingAction: true,
      errors: null,
    });

    authentication
      .sendSignInLinkToEmail(emailAddress)
      .then(() => {
        props.dialogProps.onClose(() => {
          props.openSnackbar(`Sent sign-in e-mail to ${emailAddress}`);
        });
      })
      .catch((reason) => {
        const code = reason.code;
        const message = reason.message;

        switch (code) {
          case "auth/argument-error":
          case "auth/invalid-email":
          case "auth/missing-android-pkg-name":
          case "auth/missing-continue-uri":
          case "auth/missing-ios-bundle-id":
          case "auth/invalid-continue-uri":
          case "auth/unauthorized-continue-uri":
            props.openSnackbar(message);
            return;

          default:
            props.openSnackbar(message);
            return;
        }
      })
      .finally(() => {
        setState({
          ...state,
          performingAction: false,
        });
      });
  };

  const signInWithAuthProvider = (providerId) => {
    setState({
      ...state,
      performingAction: true,
    });

    authentication
      .signInWithAuthProvider(providerId)
      .then((user) => {
        props.dialogProps.onClose(() => {
          const displayName = user.displayName;
          const emailAddress = user.email;

          props.openSnackbar(`Signed in as ${displayName || emailAddress}`);
        });
      })
      .catch((reason) => {
        const code = reason.code;
        const message = reason.message;

        switch (code) {
          case "auth/account-exists-with-different-credential":
          case "auth/auth-domain-config-required":
          case "auth/cancelled-popup-request":
          case "auth/operation-not-allowed":
          case "auth/operation-not-supported-in-this-environment":
          case "auth/popup-blocked":
          case "auth/popup-closed-by-user":
          case "auth/unauthorized-domain":
            props.openSnackbar(message);
            return;

          default:
            props.openSnackbar(message);
            return;
        }
      })
      .finally(() => {
        setState({
          ...state,
          performingAction: false,
        });
      });
  };

  const handleKeyPress = (event) => {
    const { emailAddress, password } = state;

    if (!emailAddress && !password) {
      return;
    }

    const key = event.key;

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (key === "Enter") {
      if (emailAddress && !password) {
        sendSignInLinkToEmail();
      } else {
        signIn();
      }
    }
  };

  const handleExited = () => {
    setState(initialState);
  };

  const handleEmailAddressChange = (event) => {
    const emailAddress = event.target.value;

    setState({
      ...state,
      emailAddress: emailAddress,
    });
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;

    setState({
      ...state,
      password: password,
    });
  };

  // Styling
  const { classes } = props;

  // Dialog Properties
  const { dialogProps } = props;

  const { performingAction, emailAddress, password, errors } = state;

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      disableBackdropClick={performingAction}
      disableEscapeKeyDown={performingAction}
      {...dialogProps}
      onKeyPress={handleKeyPress}
      onExited={handleExited}
    >
      <DialogTitle disableTypography>
        <Typography variant="h6">Sign in to your account</Typography>

        <Tooltip title="Close">
          <IconButton
            className={classes.closeButton}
            disabled={performingAction}
            onClick={dialogProps.onClose}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>

      <DialogContent>
        <Hidden xsDown>
          <Grid container direction="row">
            <Grid item xs={emailPassword ? 4 : 11}>
              <AuthProviderList
                performingAction={performingAction}
                onAuthProviderClick={signInWithAuthProvider}
              />
            </Grid>

            {emailPassword && (
              <>
                <Grid item xs={1}>
                  <Divider className={classes.divider} orientation="vertical" />
                </Grid>

                <Grid item xs={7}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs>
                      <TextField
                        autoComplete="email"
                        disabled={performingAction}
                        error={!!(errors && errors.emailAddress)}
                        fullWidth
                        helperText={
                          errors && errors.emailAddress
                            ? errors.emailAddress[0]
                            : ""
                        }
                        label="E-mail address"
                        placeholder="john@doe.com"
                        required
                        type="email"
                        value={emailAddress}
                        variant="outlined"
                        onChange={handleEmailAddressChange}
                      />
                    </Grid>

                    <Grid item xs>
                      <TextField
                        autoComplete="current-password"
                        disabled={performingAction}
                        error={!!(errors && errors.password)}
                        fullWidth
                        helperText={
                          errors && errors.password ? errors.password[0] : ""
                        }
                        label="Password"
                        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        required
                        type="password"
                        value={password}
                        variant="outlined"
                        onChange={handlePasswordChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Hidden>

        <Hidden smUp>
          <AuthProviderList
            gutterBottom
            performingAction={performingAction}
            onAuthProviderClick={signInWithAuthProvider}
          />

          {emailPassword && (
            <Grid container direction="column" spacing={2}>
              <Grid item xs>
                <TextField
                  autoComplete="email"
                  disabled={performingAction}
                  error={!!(errors && errors.emailAddress)}
                  fullWidth
                  helperText={
                    errors && errors.emailAddress ? errors.emailAddress[0] : ""
                  }
                  label="E-mail address"
                  placeholder="john@doe.com"
                  required
                  type="email"
                  value={emailAddress}
                  variant="outlined"
                  onChange={handleEmailAddressChange}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  autoComplete="current-password"
                  disabled={performingAction}
                  error={!!(errors && errors.password)}
                  fullWidth
                  helperText={
                    errors && errors.password ? errors.password[0] : ""
                  }
                  label="Password"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  required
                  type="password"
                  value={password}
                  variant="outlined"
                  onChange={handlePasswordChange}
                />
              </Grid>
            </Grid>
          )}
        </Hidden>
      </DialogContent>

      {emailPassword && (
        <DialogActions>
          <Button
            color="primary"
            disabled={!emailAddress || performingAction}
            variant="outlined"
            onClick={resetPassword}
          >
            Reset password
          </Button>

          {getSignInButton()}
        </DialogActions>
      )}
    </Dialog>
  );
}

SignInDialog.propTypes = {
  // Styling
  classes: PropTypes.object.isRequired,

  // Dialog Properties
  dialogProps: PropTypes.object.isRequired,

  // Custom Functions
  openSnackbar: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignInDialog);
