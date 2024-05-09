# Accessibility Theme Builder Application

This document serves as a getting started guide for working with the Accessibility Theme Builder Application.

- [Install Dependencies](#install-dependencies) 
- [Install and Use](#install-and-use)
- [Development](#development)
- [Understanding Server APIs](#understanding-server-apis)

## Install Dependencies
The Theme Builder application can be built and run locally using two variations (Quick and Easy, Javascript Runtime Environment) that differ on complexity of setup (devops).

### Basic Requirements

* Install [git](https://github.com/git-guides/install-git)
* Learn how to [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and [clone](https://github.com/git-guides/git-clone) GitHub repositories.
### Quick and Easy 
If you simply desire to run the application and do not require to perform any development enhancements, the easiest approach for running the application locally is to install [Docker Desktop](https://www.docker.com/).
### Javascript Runtime Environment
If you desire to extend or enhance the application, a local development environment will need to be configured. This requires the installation of Node.js prerequisites, specifically NodeJS 16+ and npm 8+. Visit [nodejs downloads](https://nodejs.org/en/download/) for latest versions.

## Install and Use
Perform the following steps to run a local version of the application.

### Fetch Latest Code
These instructions assume you have a local copy of a forked instance of [finos/a11y-theme-builder](https://github.com/finos/a11y-theme-builder).

```
cd <WORKSPACE>
git clone https://github.com/<YOUR-ORG>/a11y-theme-builder
cd a11y-theme-builder
```

where:

* `<WORKSPACE>` is path to the local folder where you have created a copy of the GitHub repository.
* `<YOUR-ORG>` is the name of your GitHub account or personal GitHub organization.

### Quick and Easy
Building and running the application using `Docker` can be achieved in a few simple steps, which all assume a `/code` as the working directory.

```
cd <WORKSPACE>/a11y-theme-builder/code
```

#### Embedded Database
The Theme Builder application requires the use of a  persisted embedded database. This requirement is satisfied by attaching a local host directory, `/code/src/data`, to the running docker container. 

#### Use Docker Compose for easier setup in one command
```
docker compose up
```
the website is live on localhost:8080

OR

#### Build image

```
docker build . -t a11y-theme-builder
``` 

#### Create volume

Create a named Docker volume to persist data from the running container into your local Docker environment.  This allows a new a11y-theme-builder container associated with that Docker volume to load previously saved design systems, for example.

```
docker volume create A11yThemeBuilder
```

#### Start new container

Start a new Docker container running the a11y-theme-builder image, mounting to the named Docker volume specified above.

```
docker run -p 8080:3001 -v A11yThemeBuilder:/code/src/data --name a11y-theme-builder -d a11y-theme-builder
```

### View Application

To access the running application, load the following URL into a browser:

```
http://localhost:8080
```
#### Stop container

```
docker stop a11y-theme-builder
```

#### Start a stopped container

```
docker start a11y-theme-builder
```

#### Remove a stopped container

```
docker rm a11y-theme-builder
```

#### Remove a named volume

This will remove/delete the named Docker volume specified above. **NOTE:** this will delete any data saved by previously run Docker containers that used this volume.  For example, your saved a11y-theme-builder design systems will be lost if they were saved in Docker containers that were created with the instructions above.

```
docker volume rm A11yThemeBuilder
```

### Javascript Runtime Environment
The following commands will build and run the application using a local Node.js environment running on a Linux distribution such as MacOS:

```
cd a11y-theme-builder/code
npm run build
npm run debug
```

To access the application, load the following URL into a browser:

```
http://localhost:3001
```

### Targeted Browsers

We are targeting the following browser versions:

* Chrome v109+
* Safari v15.6+
* Edge v110+
* Firefox v111+

This list consists of reasonably recent versions that are most likely to be in use by designers and developers.  We would welcome any input from enterprise-type users to help improve this list.

## Development

The Theme Builder is a web application that uses Node for the server and React for the UI.  Both server and UI use typescript, which is compiled into javascript and saved in the build directories:

| Directory | Description |
|---|---|
| code/build | Server JS |
| code/src/ui/build | UI React JS |

The command `npm run build` builds both the server and UI.  To build just the server, run

```
npm run build-api
```

or to build the UI, run

```
npm run build-ui
```

To simplify developing of the UI, the React Development Server can be run

```
npm run dev-ui
```

To access the application through the React Development Server, load the following URL into a browser:

```
http://localhost:3000
```

Any changes made to the React source code will automatically be updated in the browser on port 3000.  

Note that the build directory is not updated with these changes until an `npm run build` or `npm run build-ui` is performed.

#### Potential Windows Issue
One problem you might run into on a Windows system is that themes may not appear, load, or be created.
If this is the case, it most likely means there is a problem with your [themes file](https://github.com/finos/a11y-theme-builder/blob/main/code/src/data/themes), which acts as the database. The most common explanation is that your environment has automatically changed the line endings of this file to `CRLF`. To fix this either use your editor to change the line endings to `LF`, or better, follow [this guide](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings) to ensure git does not do this in the future by running the command `git config --global core.autocrlf false`, and reseting the repo.


## Understanding Server APIs

The Theme Builder server serves the React application at the `/` endpoint.

The APIs are under the `/api/` endpoint, with the following apis available:

### /api/themes?metadata - Get list of all themes or metadata for all themes
- **Method**: GET
- **Returns**: Array of theme names
- **Return Errors**: None
- **Example**: GET /api/themes => [ "theme1", "theme2" ]
- **Example**: GET /api/themes?metadata => [ {id:"theme1", metadata:{..}}, {id:"theme2", metadata: {..}} ]

### /api/themes - Create a new theme
- **Method**: POST
- **Body**: Theme object
- **Returns**: Theme object
- **Return Errors**: 500, 501 invalid document, 502 document already exists
- **Example**: POST /api/themes { id:"theme3", key1:themeData} => { id:"theme3", key1:themeData}

### /api/themes - Delete all themes (This deletes the database, so use with caution)
- **Method**: DELETE
- **Returns**: returns boolean (true=success, false=fail)
- **Return Errors**: none
- **Example**: DELETE /api/themes => true

### /api/themes/:id - Get a theme and return all fields
- **Method**: GET
- **Returns**: Theme object
- **Return Errors**: 404 document :id was not found, 500
- **Example**: GET /api/themes/theme5 => { id:"theme5", key1:themeData}

### /api/themes/:id?fields=field1,field2,... - Get a theme and return only fields
- **Method**: GET
- **Returns**: Partial theme object
- **Return Errors**: 404 document :id was not found, 500
- **Example**: GET /api/themes/theme5?field=key1 => {key1:themeData}

### /api/themes/:id?returnDoc=true - Update a theme or fields of a theme
- **Method**: PUT
- **Body**: Theme object or {?set: Partial theme object}
- **Returns**: If returnDoc, then return Theme object, else return true
- **Return Errors**: 404 document :id was not found, 500
- **Example**: PUT /api/themes/theme5 {key2:{subkey1: updatedSubData1}} => true
- **Example**: PUT /api/themes/theme5?returnDoc=true {key2:{subkey1: updatedSubData1}} => {id:"theme5", key2:{subkey1: updatedSubData1}
- **Example**: PUT /api/themes/theme5?returnDoc=true {?set: {"key2.subkey1": updatedSubData1}}} => {id:"theme5", key1:themeData, key2:{subkey1: updatedSubData1}

### /api/themes/:id - Delete a theme
- **Method**: DELETE
- **Returns**: Theme object
- **Return Errors**: 404 document :id was not found, 500
- **Example**: DELETE /api/themes/theme5 => { id:"theme5", key1:themeData}


