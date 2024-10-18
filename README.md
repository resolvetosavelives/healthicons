![Health Icons Promo Graphic](https://github.com/resolvetosavelives/healthicons/blob/main/public/og_image.png?raw=true)

# Health Icons: [healthicons.org](https://healthicons.org)

### Free, open source health icons available for any use

Use for your next commercial or personal project. You don’t need to give credit and you can edit the icons however you want.

## Usage

Health Icons is a volunteer effort to create a 'global good' for health projects all over the world. These icons are available in the public domain for use in any type of project.

The project is hosted by the public health not-for-profit [Resolve to Save Lives](https://resolvetosavelives.org) as an expression of our committment to offer the icons for free, forever.

### Accessing Icons

Icons are available in several formats:

- All icons are produced in "outline" and "filled" styles
- Each icon is available in SVG and in PNG (48px and 96px)
- Some icons are also available in a simplified 24px (Material) format

Icons can be downloaded in a few ways:

- Individually from [our website](https://healthicons.org)
- Together as [a ZIP file](https://healthicons.org/icons.zip)
- Via [NPM](https://www.npmjs.com/package/healthicons): `npm i healthicons` or `yarn add healthicons`

### Icon Requests

Need an icon for your project? Submit a request with an [Issue on GitHub](https://github.com/resolvetosavelives/healthicons/issues/new?assignees=&labels=icon+request&template=icon-request.md&title=Icon+Request%3A+%5Bname+of+icon%5D) using the title `"Icon Request: [name of icon]"` and we will do our best to respond.

## How to contribute

We’d love for you to join our team of volunteer designers and developers!

### Get in touch

Join our open Slack channel by emailing [contact@healthicons.org](mailto:contact@healthicons.org)

### Contribute icons

Browse the [Figma](https://www.figma.com/file/mbsBVYXECIOl5E0kkGAiC2/?node-id=978%3A3) and contribute icons in the "New icons" section. Please read the code of conduct ([below](https://github.com/resolvetosavelives/healthicons#code-of-conduct)) and the styleguide (in the Figma) carefully before contributing.

## Icon Guidelines

### Icon Title and Tags in Figma

Each icon should have a title and tags which are added in the “Description” field in Figma. The format is:
`{title} [{tag1}, {tag2}, {tag3}…, dhis2:{tag}]`

**Some examples:**

`donkey` icon:  
`Donkey [Animal, Ass, Farm, Mule, dhis2:donkey]`

`blood_rh_p` icon:  
`Blood Type RH+ [Blood, RH Positive, dhis2:blood_rh_p]`

**More details:**

- The “Description” only needs to go on the “filled” version of the icon in Figma
- Icon titles should be in [Title Case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) with each word capitalized
- Tags are essentially synonyms or important related words that would help someone find the icon. They could also be alternative uses of the icon, the way a donkey could represent “farm”. If someone searches “blood” or “positive” they’ll see any icons that are tagged with those words. Tags should also be Title Case.
- The `dhis2:` formatted tag is a special tag reserved for icons that are in the [DHIS2 icon set](https://github.com/dhis2/dhis2-icons). This tag should exactly match whatever DHIS2 names this icon.

## Code of Conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others’ private information, such as a physical or electronic address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

### Our responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [contact@healthicons.org](mailto:contact@healthicons.org). All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project’s leadership.

### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 1.4, [available here](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html). For answers to common questions about this code of conduct, see [this FAQ](https://www.contributor-covenant.org/faq).

## Installing and running the website locally

This project uses [Next.js](https://nextjs.org).

1. Check out the repo locally
2. Run `yarn install`
3. Run `yarn dev`

### Importing the latest icon information from Figma

To pull the latest icon information from Figma, update the open-graph images, and update the sitemap.xml:

1. Copy `.env.example` to `.env.local`
2. Go to your account settings on [figma.com](https://www.figma.com) and generate a new access token under "Personal access tokens" and copy it to your clipboard.
3. In `.env.local`, add `FIGMA_PERSONAL_ACCESS_TOKEN="{token-goes-here}"`
4. Run `yarn update-icons`
5. If you're committing to a branch on git, make sure to remember to add the newly generated files in the `/public/` directory.

## MIT License

Copyright © 2021 Resolve to Save Lives

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
