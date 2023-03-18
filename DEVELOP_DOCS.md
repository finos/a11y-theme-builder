#  Documentation Development Guide
This document provides instructions for developing, building, and testing contributions to the project documentation.

## Documentation Framework
This project leverages [MkDocs](https://www.mkdocs.org) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/) theme to build, test and deploy Markdown based documentation. 

In order to simplify the installation dependencies associated with preparing the documentation development environment, this instruction guide leverages a Docker based approach. Alternative approached are available in the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/) documentation. 

## Education

* [Markdown Tutorial](https://www.markdowntutorial.com/)
* Markdown Documentation
    * [Getting Started with Markdown](https://www.markdownguide.org/getting-started/)
    * [Markdown Basics](https://www.markdownguide.org/basic-syntax/)
    * [Mastering the Markdown Language](https://guides.github.com/features/mastering-markdown/)
    * [MkDocs](https://www.mkdocs.org)
    * [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/)

## Preparation
1. [Get Docker](https://docs.docker.com/get-docker/)
2. Clone repository

    ```
    cd TARGET_WORK_FOLDER
    git clone https://github.com/discoverfinancial/a11y-theme-builder.git
    git remote
    ```

    where:
    * TARGET_WORK_FOLDER is the directory where a local copy of teh repo will be installed.

## Development Process

### Create Docker Image
The official Docker image for `mkdocs-material` is all that is needed to get up and running in a few minutes, as it comes with all dependencies pre-installed. Open up a terminal and pull the image with:

```
docker pull squidfunk/mkdocs-material
```

### Develop and Test 
MkDocs includes a live preview server, so you can preview your changes as you write your documentation. The server will automatically rebuild the site upon saving.

Open a terminal window and navigate to the repo workspace:

Go to the TARGET_WORK_FOLDER directory and enter:

```
cd TARGET_WORK_FOLDER/a11y-theme-builder
```

To start a local instance of the server, enter this command:

```
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

Now you can iteratively develop documentation content by editing the markdown files in the `/docs` folder. Each time you save a file, the test server will automatically refresh content for your review using your web browser pointed at: [localhost:8000](localhost:8000). 

#### Commit Code
To complete the development process, follow normal **git commit** and **git push** processing. The ```.gitignore``` file will prevent the pushing of the static HTML content generated during your local development process. 

### Deploying Changes
The great thing about hosting project documentation in a GitHub repository is the ability to deploy it automatically when new changes are pushed. MkDocs makes this ridiculously simple. This repository contains a GitHub Action workflow that will automatically build and deploy updated documentation for each code commit. Online documentation is available here:

```
https://discoverfinancial.github.io/a11y-theme-builder
```

#### Resync with Upstream
Before each coding session, ensure your ```fork``` and ```local-machine``` are in sync with changes made to the ```upstream``` repo.

```
git fetch upstream
git rebase upstream/master; git rebase upstream/main
```