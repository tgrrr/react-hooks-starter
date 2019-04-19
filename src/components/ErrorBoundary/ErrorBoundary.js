import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Raven from 'raven-js';
// import fixIt, { options } from 'react-fix-it';

// settings for fixIt
// options.log = test => {
//   console.warn(test);
// };

if (process.env.NODE_ENV !== 'development') {
  Raven.config(process.env.REACT_APP_RAVEN).install();
}

class ErrorBoundary extends PureComponent {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    Raven.captureException(error, { extra: info }); // Send it to Sentry
  }

  render() {
    const { componentName, children, ...rest } = this.props;
    const { hasError } = this.state;

    return (
      (process.env.NODE_ENV !== 'development' && hasError)
        ? (
          <div data-cy={componentName} {...rest}>
            <h4>
              {componentName && `Component: ${componentName} disabled`}
            </h4>
            <div className="snap">
              <div className="snap-message">
                <p>
                  We&apos;re sorry - something&apos;s gone wrong.
                </p>
                <p>
                  Our team has been notified, but
                  <button onClick={() => Raven.lastEventId() && Raven.showReportDialog()} type="button">
                    you can click here
                  </button>
                  to fill out a report.

                </p>
              </div>
            </div>
          </div>
        )
        : <div data-cy={componentName} {...rest}>
            {children}
          </div>
    );
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node.isRequired,
  componentName: propTypes.string.isRequired,
};

ErrorBoundary.defaultProps = {};

// export default fixIt(ErrorBoundary);
export default ErrorBoundary;
