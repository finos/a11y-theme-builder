This directory is meant to hold the results of Docker image security scanning 
until such time as we can re-enable the Docker scanning GitHub action.  
Currently, we are unable to whitelist vulnerabilities that don't apply to our 
release or our application, so reported vulnerabilities will keep the Docker 
image from publishing.  We need to find a new GitHub action that meets 
our needs or improve the current one.  Until that time, we'll publish the 
results of Docker image scans for each release we do in this folder.

Files should be named in such a way to obviously indicate the scanning tool 
that was used and the date upon which it was used.
