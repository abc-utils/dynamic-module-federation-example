This README showcases the usage of the 'dynamic-module-federation' package. 
This package is integrated into a host application to enable dynamic importing of remote module federated applications. 
To serve the remote application, execute yarn run serve. 
Launch the host application by running yarn dev. 
Within the host app, the button from the first remote remote app is consumed using dynamic module federation as a react component.
The button from the second app is loaded using the hook useFederatedComponent.
