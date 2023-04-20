# Decision to use React.js and Material UI

* Status: Accepted 
* Deciders: Bryce Curtis, Aaron Reed, Evan Countouris, Dan Gisolfi 
* Date: 2023-02-03 

## Context and Problem Statement

There are several component libraries that can be used to write a web application.  The initial limited-function POC was written as a single page app using jQuery.  Since a complete redesign of the app was needed to turn it into an MVP, several Javascript frameworks and component libraries were considered. 

## Decision Drivers 

* Component-based architecture
* Open source
* Community support
* Usage in Discover

## Considered Options

* jQuery
* React.js with Material UI
* Angular

## Decision Outcome

Chosen option: "React.js", because it is a component-based architecture, it supports typescript, it is open source with a large and active community, and it is widely used in Discover. 

Chosen option: "Material UI".  Once React.js was chosen, the next decision was which component library to use.  The overriding factor for choosing Material UI was because it is widely used by Discover.  It also supports typescript, and it is open source with a large and active community.  

## Pros and Cons of the Options 

The most common web frameworks and technologies used in 2022 are listed on [StackOverflow](https://survey.stackoverflow.co/2022/#web-frameworks-and-technologies).

All respondents:

* 43% use React.js
* 29% use jQuery
* 20% use Angular

### jQuery

https://jquery.com/ 

* Good, because it is lightweight and simple
* Good, because it has cross-browser support
* Bad, because it is not component-based

### React.js with Material UI

https://react.dev/

* Good, because it is component-based
* Good, because it supports typescript
* Good, because it is widely used by Discover
* Good, because it is open source
* Good, because it has active community support

https://mui.com/

* Good, because it supports typescript
* Good, because Material UI component library is widely used by Discover
* Good, because it is open source
* Good, because it has active community support

### Angular

https://angularjs.org/

* Good, because it is component-based
* Good, because it supports typescript
* Good, because it is open source
* Good, because it has active community support
* Bad, because it is not used by Discover

## Links

* [The Top React Component Libraries that are Worth Trying (Jan 2023)](https://technostacks.com/blog/react-component-libraries/)

<!-- markdownlint-disable-file MD013 -->
