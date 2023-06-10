const Notification = props => {
  //  Write your code here.
  const { className, iconUrl, message } = props;
  const containerName = `notification-container ${className}`;
  return {
      <div className={containerName}>
        <img className="icon" src={iconUrl} />
        <p className="message">{message}</p>
      </div>
  }
}

const element = (
  //  Write your code here.   
  <div className = "notification-app-container">
      <h1 className = "heading">Notifications</h1>
      <div className = "list-container">
          <Notification className = "info-message"
          iconUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          message = "Information Message"              
          />

          <Notification className = "success-message"
          iconUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          message = "Success Message"              
          />

          <Notification className = "warning-message"
          iconUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          message = "Warning Message"              
          />

          <Notification className = "error-message"
          iconUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          message = "Error Message"              
          />
      </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
