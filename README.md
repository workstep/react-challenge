# react-challenge

Logged-in hiring managers see a tabbed table called "My Pipeline" that lists job applicants
in their various stages. Implement this table as shown in the following screenshots using
the following REST API as a data source:

https://my-json-server.typicode.com/workstep/react-challenge-data/candidates

Your app should `PATCH` applicant step updates when they occur, though please note that
the demo API will not actually persist the changes:

https://my-json-server.typicode.com/workstep/react-challenge-data/candidates/[id]

<img src="docs/img/table.png" width="580">

<img src="docs/img/modal.png" width="580">

### Running

Run `npm run serve` to start the dev server that will build your files with hot module
replacement. If you need to change the port, you can find it in `webpack.config.js`.
