# Accessibility Theme Builder Application

This document serves as a getting started guide for how to install and use the Accessibility Theme Builder Application.

## Build and run locally

The Theme Builder application can be built and run locally.

The prerequisites are NodeJS 16+ and npm 8+. Visit [nodejs downloads](https://nodejs.org/en/download/) for latest versions.

The following commands will build and run the application:

```
$ cd code
$ npm run build
$ npm run debug
```

To access the application, load the following URL into a browser:

```
http://localhost:3001
```

## Development

The Theme Builder is a web application that uses Node for the server and React for the UI.  Both server and UI use typescript, which is compiled into javascript and saved in the build directories:

| Directory | Description |
|---|---|
| code/build | Server JS |
| code/src/ui/build | UI React JS |

The command `npm run build` builds both the server and UI.  To build just the server, run

```
$ npm run build-api
```

or to build the UI, run

```
$ npm run build-ui
```

To simplify developing of the UI, the React Development Server can be run

```
$ npm run dev-ui
```

To access the application through the React Development Server, load the following URL into a browser:
```
http://localhost:3000
```

Any changes made to the React source code will automatically be updated in the browser on port 3000.  

Note that the build directory is not updated with these changes until an `npm run build` or `npm run build-ui` is performed.

## Server APIs

The Theme Builder server serves the React application at the `/` endpoint.

The APIs are under the `/api/` endpoint, with the following apis available:

### /api/themes - Get list of all themes 
- **Method**: GET
- **Returns**: Array of theme names
- **Return Errors**: None
- **Example**: GET /api/themes => [ "theme1", "theme2" ]

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


## Build Docker Image

The Theme Builder application can also be run in Podman or Docker.  To persist the embedded database, the directory `/code/src/data` must be mapped to a local host directory.

To build and run with Docker, the following commands can be used.

**Build image:**
```
$ docker build . -t a11y-theme-builder
```

**Run image:**

To save the data of the embedded database in the docker container, use the following command.
```
$ docker run -p 8080:3001 --name a11y-theme-builder -d a11y-theme-builder
```

If a directory on the host will be used to save the data of the embedded database, specify a volume with the following command.
```
$ docker run -p 8080:3001 -v <host_dir>:/code/src/data --name a11y-theme-builder -d a11y-theme-builder
```

**Stop container:**
```
$ docker stop a11y-theme-builder
```

**Start a stopped container:**
```
$ docker start a11y-theme-builder
```

**Remove a stopped container:**
```
$ docker rm a11y-theme-builder
```

### View Application

To access the running application, load the following URL into a browser:

```
http://localhost:8080
```