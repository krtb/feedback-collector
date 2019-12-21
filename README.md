# feedback-collector

# Backend

## Heroku Deployment Checklist
* Dynamic Port Binding
  * heroku tells us what port app will use, make note
* Specify Node Env
  * tell Heroku what specific version of node we'll be using
* Specify Start Script
  * tell Heroku what command to run to start our server
* Create `.gitignore`
  * don't want to include dependencies
  * Heroku does this for us