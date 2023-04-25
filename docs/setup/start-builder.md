# Running Theme Builder

After **Theme Builder** is installed on your local system, you can run the application for the type of installation:

1. [Quick and Easy](#quick-and-easy)
2. [Javascript Runtime Environment](#javascript-runtime-environment)

## Quick and Easy
After building the Theme Builder's `Docker` image `a11y-theme-builder`, it can be run and managed.

### Start the Theme Builder application in a new Docker container

```
docker run -p 8080:3001 --name a11y-theme-builder -d a11y-theme-builder
```
### View the Theme Builder application in your browser

To access the running Theme Builder application, load the following URL into a browser:

```
http://localhost:8080
```

### Docker commands to manage the Theme Builder Application
The following commands can be used to manage the Theme Builder application built and running with `Docker`.

#### Stop Theme Builder application
This stops the Theme Builder application, but does not delete it.  All saved theme data is preserved.

```
docker stop a11y-theme-builder
```

#### Start a stopped Theme Builder application
This starts a stopped Theme Builder application.  Any saved theme data will be retained.

```
docker start a11y-theme-builder
```

#### Remove a stopped Theme Builder application
This removes a stopped Theme Builder application and any saved theme data will be deleted.

```
docker rm a11y-theme-builder
```

### Advanced Docker Environment
The theme data is stored in an embedded database.  As a result, when the Docker container is removed any saved theme data will be deleted.

To prevent theme data from being deleted, you can specify a local directory on your system for where to save it.  This is done by using the -v option when starting Docker and passing in a local directory. 

#### Start the Theme Builder application to keep theme data
The following command uses your current directory to save the theme data.  If you want to use a different directory, replace `${pwd}` with the new directory name.  Note that this directory name can't be a relative directory, but must be an absolute directory path.
```
docker run -p 8080:3001 -v ${pwd}:/code/src/data --name a11y-theme-builder -d a11y-theme-builder
```

## Javascript Runtime Environment
The following commands will build and run the Theme Builder application using a local Node.js environment running on a Linux distribution such as MacOS:

```
cd a11y-theme-builder/code
npm run build
npm run debug
```

To access the Theme Builder application, load the following URL into a browser:

```
http://localhost:3001
```

### Development

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

To access the Theme Builder application through the React Development Server, load the following URL into a browser:

```
http://localhost:3000
```

Any changes made to the React source code will automatically be updated in the browser on port 3000.  

Note that the build directory is not updated with these changes until an `npm run build` or `npm run build-ui` is performed.

#### Potential Windows Issue
One problem you might run into on a Windows system is that themes may not appear, load, or be created.
If this is the case, it most likely means there is a problem with you [themes file](https://github.com/discoverfinancial/a11y-theme-builder/blob/main/code/src/data/themes), which acts as the database. The most common explanation is that your environment has automatically changed the line endings of this file to `CRLF`. To fix this either use your editor to change the line endings to `LF`, or better, follow [this guide](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings) to ensure git does not do this in the future by running the command `git config --global core.autocrlf false`, and reseting the repo.

