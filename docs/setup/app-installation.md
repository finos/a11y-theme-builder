# Installation

Perform the following steps to run a local version of the Theme Builder application.  

## Fetch Latest Code
These instructions assume you have a local copy of a forked instance of [discoverfinancial/a11y-theme-builder](https://github.com/discoverfinancial/a11y-theme-builder).

```
cd <WORKSPACE>
git clone https://github.com/<YOUR-ORG>/a11y-theme-builder
cd a11y-theme-builder
```

where:

* `<WORKSPACE>` is path to the local folder where you have created a copy of the GitHub repository.
* `<YOUR-ORG>` is the name of your GitHub account or personal GitHub organization.

## Quick and Easy
Building and running the Theme Builder application using `Docker` can be achieved in a few simple steps, which all assume `/code` as the working directory.

```
cd <WORKSPACE>/a11y-theme-builder/code
```

### Build Theme Builder Docker image

```
docker build . -t a11y-theme-builder
```

### Start the Theme Builder application in a new Docker container

```
docker run -p 8080:3001 --name a11y-theme-builder -d a11y-theme-builder
```
### View the Theme Builder application in your browser

To access the running Theme Builder application, load the following URL into a browser:

```
http://localhost:8080
```

### Remove the stopped Application build image
To remove the Theme Builder Docker image from your system run the following command.  

Note that the application must be stopped before the image can be removed.  Once the image is removed, you won't be able to run the Theme Builder application unless you build the Docker image again.

```
docker rmi a11y-theme-builder
```

## Javascript Runtime Environment
The following commands will build and run the Theme Builder application using a local Node.js environment running on a Linux distribution such as MacOS:

### Build the Theme Builder application
```
cd a11y-theme-builder/code
npm run build
```

### Run the Theme Builder application
```
npm run debug
```

### View the Theme Builder application in your browser

To access the Theme Builder application, load the following URL into a browser:

```
http://localhost:3001
```

### Windows Specific Steps
Currently, there are a few extra steps to use the app on a Windows system:

* delete both `package-lock.json` files before build
* replace `'` chars in the debug script in the package.json with `\"`, so t reads `"debug": "nodemon --exec \"ts-node\" src/app.ts",`
* delete the `data/themes` file, before running the application 

