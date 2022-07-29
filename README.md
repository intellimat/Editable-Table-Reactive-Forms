# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker image

You can find the docker image on https://hub.docker.com/repository/docker/intellimat/editable-users-table-frontend, and run it locally with docker by 
pulling it (_docker pull intellimat/editable-users-table-frontend:latest_) and running it (_docker run -d -p 80:80 intellimat/editable-users-table-frontend:latest_).
You can now access it on localhost.

## Key concepts
#### Table view
- _src\app\features\users\components\users-view\users-view.component.ts_ is the component that manages the logic between different views and performs API calls. Communication between parent and child components happen through the event emitters. The _src\app\features\users\components\users-view\users-table-view\users-table-view.component.ts_ emits an event (of type TableEvent) when the user performs an action. These events emitted by the table are then processed by the _user-view.component.ts_, and once the result of the API call is returned, the user-view.component.ts emits an event (of type UpdateTableResponse) to the child (i.e. users-table-view.component.ts) so that the table will be updated accordingly.
- The implementation relies on the Angular Reactive Forms which provide great functionality and void rewriting the same code.
#### Columns view (vista de miniaturas)
- The seniority of the users (expert, experienced...) is calculated by transforming the user ISO string date into MS and then comparing it to the current date. 
- The search bar functionality makes use of .valuechanges() provided by the reactive FormGroup, so that we can filter whenever the user changes the value in the search bar.

### Further note: please use Google Chrome to view the application. Specificity of the browsers was not take into account during this task.
