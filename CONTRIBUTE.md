#  Project Contribution Guide
This document provides guidance for how YOU can collaborate with our project community to improve this technology. 

# Accessibility Theme Builder Contribution and Governance Policies

This document describes the contribution process and governance policies of the FINOS Accessibility Theme Builder project. The project is also governed by the [Linux Foundation Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/), and the FINOS [IP Policy](https://community.finos.org/assets/files/IP-Policy-9b1cd5f6c1d682e073c3c15224fc6d86.pdf), [Code of Conduct](https://community.finos.org/docs/governance/code-of-conduct), [Collaborative Principles](https://community.finos.org/docs/governance/collaborative-principles/), and [Meeting Procedures](https://community.finos.org/docs/governance/meeting-procedures/).

## Contribution Process

Before making a contribution, please take the following steps:
1. Check whether there's already an open issue related to your proposed contribution. If there is, join the discussion and propose your contribution there.
2. If there isn't already a relevant issue, create one, describing your contribution and the problem you're trying to solve.
3. Respond to any questions or suggestions raised in the issue by other developers.
4. Fork the project repository and prepare your proposed contribution.
5. Submit a pull request.

NOTE: All contributors must have a contributor license agreement (CLA) on file with FINOS before their pull requests will be merged. Please review the FINOS [contribution requirements](https://community.finos.org/docs/governance/Software-Projects/contribution-compliance-requirements) and submit (or have your employer submit) the required CLA before submitting a pull request.

## Team members

Meet and join our [Team of Contributors](https://github.com/discoverfinancial/a11y-theme-builder/wiki/Maintainers-&-Contributors).

## Learn & listen
<!-- Fill out Missing Project Communications -->
This section includes ways to get started with your open source project. Include links to documentation and to different communication channels: 

* Github Discussions
  * Used for questions and discussions of interest to the broader community.
  * Link: https://github.com/discoverfinancial/a11y-theme-builder/discussions
* Slack
  * Used for questions to project maintainers or for private chat.
  * Link: https://a11y-l464962.slack.com
* Blog/Wiki
  * Link: https://github.com/discoverfinancial/a11y-theme-builder/wiki 

## Community 
Participating in our project community spans a variety of activities:

* Reporting bugs and enhancements requests
* Contributing bug/feature solutions
* [Improving documentation](https://discoverfinancial.github.io/a11y-theme-builder/)
* [Identifying and tracking new use cases](https://discoverfinancial.github.io/a11y-theme-builder/contribute)
* Create an example of the project in real world by building something or showing what others have built. 
* Blog about other people’s projects based on this project. Show how it’s used in daily life. Take screenshots and make videos!

To join our community see the [Onboarding Resources](https://github.com/discoverfinancial/a11y-theme-builder/wiki/Onboarding-Resources) page in the wiki.

## Project Management
<!-- Fill out Missing Project Communications Details-->
Our project uses a combination of GitHub Issues and Project Kanban Dashboards to manage sprint plans.  

### Project Roadmap
<!-- ToDo provide Wiki URL for release plan. -->
Our vision for the maturation of this project is outlined in the [Project Roadmap](https://github.com/discoverfinancial/a11y-theme-builder/wiki/Roadmap) which is reflective of our intended milestones/release plan.

### Meetings

Logistics for Project Triage Sessions:
* [Meeting Details](https://github.com/discoverfinancial/a11y-theme-builder/wiki/Communication#meetings)
* [Meeting Minutes](https://github.com/discoverfinancial/a11y-theme-builder/wiki/Meeting-Minutes)

Project Management:
* [Project Kanban Dashboard](https://github.com/orgs/discoverfinancial/projects/1/views/1)

### Contributing Issue/Feature Reports
When submitting [Issue/Feature Reports](https://github.com/discoverfinancial/a11y-theme-builder/issues), please use the provided templates and try to convey answers for the following:

* Is the bug reproducible as explained?   
* Is it reproducible in other environments (for instance, on different browsers or devices)?   
* Are the steps to reproduce the bug clear? If not, can you describe how you might reproduce it?  
* What tags should the bug have?  
* Is this bug something you have run into? Would you appreciate it being looked into faster?  

### Contributing Code

#### Community Adoption
Strategically, *Discover Financial Services* intends for this repository to be **promoted** for maturation upstream within a *yet-to-be-identified* community such as [FINOS](https://www.finos.org), [The A11y Project](https://www.a11yproject.com), or [OpenJS](https://openjsf.org). Once we see broader community contributions we will aggressively work towards that the promoting of this project. If and when such a transfer occurs, normal `pull request` based contributions will be possible. 

#### Incubation Period
For the tactical timeframe (*for as long as this repo resided within the [DFS GitHub organization](https://github.com/discoverfinancial)*), `pull request` will not be accepted. For those willing to 
answer our [call for contributions](https://discoverfinancial.github.io/a11y-theme-builder/contribute/), please proceed by:

1. 'forking` one of the project repositories
2. Developing a contribution within your forked repo
3. Opening an [issue or feature enhancement report](https://github.com/discoverfinancial/a11y-theme-builder/issues) where a redirect to the new contribution (forked repo) is captured.
4. Add the GitHub Topic `a11y-tb` to your forked repo for that we can query all of GitHub for available features and fixes to import.

#### Coding Conventions
* ReactJS:
  * `PascalCase`: ReactJS components, interfaces, component file names (tsx, jsx, css)
  * `camelCase`: JavaScript data variables, functions, non-component file names (ts, js, css)
  * Tab: 4 spaces
* NodeJS:
  * `camelCase`: JavaScript data variables, functions, non-component file names
  * Tab: 4 spaces
* CSS:
  * `kebab-case`: CSS variables
  * Tab: 2 spaces
* Other
  * `kebab-case`: Directories and file names
  * `UPPERCASE`: Some root markdown files that are commonly all caps

References:
* [ReactJS coding conventions](https://levelup.gitconnected.com/react-code-conventions-and-best-practices-433e23ed69aa)
* [React Best Practices](https://www.freecodecamp.org/news/best-practices-for-react)
* [Case Styles: Camel, Pascal, Snake and Kebab Case](https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)
* [camelCase](https://en.wikipedia.org/wiki/Camel_case)


## Testing 
Testing new releases and/or features is a great way to contribute to the community. If you find issues, please submit an [Issue/Feature Report](https://github.com/discoverfinancial/a11y-theme-builder/issues).

## Documentation
[Learn](./DEVELOP_DOCS.md) how to develop, build, test, and contribute to the online docs. 

## Translations
Our project aspires to be globally applicable but that requires internationalization support beyond the English language. We seek help in:

* Providing instructions for extending internationalization support;
* Providing specific language translation enhancements. 

## Governance

### Roles

The project community consists of Contributors and Maintainers:
* A **Contributor** is anyone who submits a contribution to the project. (Contributions may include code, issues, comments, documentation, media, or any combination of the above.)
* A **Maintainer** is a Contributor who, by virtue of their contribution history, has been given write access to project repositories and may merge approved contributions.
* The **Lead Maintainer** is the project's interface with the FINOS team and Board. They are responsible for approving [quarterly project reports](https://community.finos.org/docs/governance/#project-governing-board-reporting) and communicating on behalf of the project. The Lead Maintainer is elected by a vote of the Maintainers. 

### Contribution Rules

Anyone is welcome to submit a contribution to the project. The rules below apply to all contributions. (The key words "MUST", "SHALL", "SHOULD", "MAY", etc. in this document are to be interpreted as described in [IETF RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).)

* All contributions MUST be submitted as pull requests, including contributions by Maintainers.
* All pull requests SHOULD be reviewed by a Maintainer (other than the Contributor) before being merged.
* Pull requests for non-trivial contributions SHOULD remain open for a review period sufficient to give all Maintainers a sufficient opportunity to review and comment on them.
* After the review period, if no Maintainer has an objection to the pull request, any Maintainer MAY merge it.
* If any Maintainer objects to a pull request, the Maintainers SHOULD try to come to consensus through discussion. If not consensus can be reached, any Maintainer MAY call for a vote on the contribution.

### Maintainer Voting

The Maintainers MAY hold votes only when they are unable to reach consensus on an issue. Any Maintainer MAY call a vote on a contested issue, after which Maintainers SHALL have 36 hours to register their votes. Votes SHALL take the form of "+1" (agree), "-1" (disagree), "+0" (abstain). Issues SHALL be decided by the majority of votes cast. If there is only one Maintainer, they SHALL decide any issue otherwise requiring a Maintainer vote. If a vote is tied, the Lead Maintainer MAY cast an additional tie-breaker vote.

The Maintainers SHALL decide the following matters by consensus or, if necessary, a vote:
* Contested pull requests
* Election and removal of the Lead Maintainer
* Election and removal of Maintainers

All Maintainer votes MUST be carried out transparently, with all discussion and voting occurring in public, either:
* in comments associated with the relevant issue or pull request, if applicable;
* on the project mailing list or other official public communication channel; or
* during a regular, minuted project meeting.

### Maintainer Qualifications

Any Contributor who has made a substantial contribution to the project MAY apply (or be nominated) to become a Maintainer. The existing Maintainers SHALL decide whether to approve the nomination according to the Maintainer Voting process above.

### Changes to this Document

This document MAY be amended by a vote of the Maintainers according to the Maintainer Voting process above.

