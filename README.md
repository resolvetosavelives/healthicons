![Health Icons Promo Graphic](https://github.com/resolvetosavelives/healthicons/blob/main/public/og_image.png?raw=true)

# Health Icons

Free, open source health icons available for any use. Use for your next commercial or personal project. You don’t need to give credit and you can edit the icons however you want. Health Icons is a volunteer effort to create a 'global good' for health projects all over the world. Website: [healthicons.org](https://healthicons.org)

## Using Health Icons

These icons are available in the public domain ([CC0](https://creativecommons.org/public-domain/cc0/)) for use in any type of project. Icons are available in several formats:

- All icons are produced in "outline" and "filled" styles
- Each icon is available in SVG and in PNG (48px and 96px)
- Many icons are also available in a smaller 24px format

Icons can be downloaded:

- Individually from [our website](https://healthicons.org)
- Together as [a ZIP file](https://healthicons.org/icons.zip)
- Via [NPM](https://www.npmjs.com/package/healthicons): `npm i healthicons` or `yarn add healthicons`

### The npm package

The `healthicons` package holds the icon files, at `healthicons/public/icons/{svg,png}/{style}/{category}/{icon}.{svg,png}`. The styles are `outline`, `filled`, `outline-24px` and `filled-24px`, and PNGs come at 48px (`{icon}.png`) and 96px (`{icon}@2x.png`). For example:

```
node_modules/healthicons/public/icons/svg/outline/blood/blood-bag.svg
```

`public/icons/meta-data.json` lists every icon with its category, title, tags and formats.

Version 3 renamed icon files to use hyphens (`blood_bag.svg` is now `blood-bag.svg`) and moved some icons to new names or categories, so check your paths when upgrading from version 2. [healthicons.org](https://healthicons.org) shows every icon's current name.

## Request a new icon

Need an icon for your project? Submit a request with an [Issue on GitHub](https://github.com/resolvetosavelives/healthicons/issues/new?assignees=&labels=icon+request&template=icon-request.md&title=Icon+Request%3A+%5Bname+of+icon%5D) using the title `"Icon Request: [name of icon]"` and we will do our best to respond.

## How to contribute

We’d love for you to join our team of volunteer designers and developers!

1. Join our open Slack channel by emailing [contact@healthicons.org](mailto:contact@healthicons.org)
2. Browse the [Figma](https://www.figma.com/file/mbsBVYXECIOl5E0kkGAiC2/?node-id=978%3A3) and contribute icons in the "New icons" section. Please read the [code of conduct](#code-of-conduct) and the styleguide (in the Figma) carefully before contributing.

## Installing and running the website locally

This project uses [Next.js](https://nextjs.org).

This is the intended way to contribute to the code base:

1. [Fork the main repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) so you have your own copy which will be at `https://github.com/{your-username}/healthicons/`
2. Check out your fork on your computer: `gh repo clone {your-username}/healthicons`
3. Add a remote referencing the main repo: `git remote add upstream git@github.com:resolvetosavelives/healthicons.git`
4. Fetch the remote upstream using: `git fetch upstream`
5. Create a new branch based on the RTSL repo’s main branch: `git checkout -b my-branch-name upstream/main`
6. Install dependencies using `yarn install`
7. Run the project locally using `yarn dev`
8. Make all of your changes and make a bunch of commits
9. Push to your branch: `git push origin my-branch-name`
10. On Github, create a pull request from your branch to `upstream/main`
11. After that, an admin of the project will review the pull request and then offer feedback and/or merge it

**Importing the latest icon information from Figma**

To pull the latest icon information from Figma, update the open-graph images, and update the sitemap.xml:

1. Copy `.env.example` to `.env.local`
2. Go to your account settings on [figma.com](https://www.figma.com) and generate a new access token under "Personal access tokens" and copy it to your clipboard.
3. In `.env.local`, add `FIGMA_PERSONAL_ACCESS_TOKEN="{token-goes-here}"`
4. Run `yarn update-icons`
5. If you're committing to a branch on git, make sure to remember to add the newly generated files in the `/public/` directory.

## Publishing new icons to the website

1. Run the website locally (see above)
2. Delete all of the icons from your local directories `/public/icons/png/` and `/public/icons/svg/`
3. Go the `Export` page on Figma
4. Make sure all new icons are tagged (see below)
5. Export as PNG: Select all of the icons and export all as `1x PNG` and `2x PNG`
6. Export as SVG: Select all of the icons and export all as `SVG`
7. In your terminal, type: `yarn update-icons`
8. Test the website locally at `localhost:3005`
9. Commit your changes to a new branch on Github
10. Raise a PR and request a review from another volunteer via Slack
11. Wait for review
12. Merge the PR

## Tagging icons in Figma

**Icon 'Title' and 'Tags' in Figma**

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

## Code of Conduct

### Our pledge

We pledge to make our community welcoming, safe, and equitable for all.

We are committed to fostering an environment that respects and promotes the dignity, rights, and contributions of all individuals, regardless of characteristics including race, ethnicity, caste, color, age, physical characteristics, neurodiversity, disability, sex or gender, gender identity or expression, sexual orientation, language, philosophy or religion, national or social origin, socio-economic position, level of education, or other status. The same privileges of participation are extended to everyone who participates in good faith and in accordance with this Covenant.

### Encouraged behaviors

While acknowledging differences in social norms, we all strive to meet our community's expectations for positive behavior. We also understand that our words and actions may be interpreted differently than we intend based on culture, background, or native language.

With these considerations in mind, we agree to behave mindfully toward each other and act in ways that center our shared values, including:

1. Respecting the **purpose of our community**, our activities, and our ways of gathering.
2. Engaging **kindly and honestly** with others.
3. Respecting **different viewpoints** and experiences.
4. **Taking responsibility** for our actions and contributions.
5. Gracefully giving and accepting **constructive feedback**.
6. Committing to **repairing harm** when it occurs.
7. Behaving in other ways that promote and sustain the **well-being of our community**.

### Restricted behaviors

We agree to restrict the following behaviors in our community. Instances, threats, and promotion of these behaviors are violations of this Code of Conduct.

1. **Harassment.** Violating explicitly expressed boundaries or engaging in unnecessary personal attention after any clear request to stop.
2. **Character attacks.** Making insulting, demeaning, or pejorative comments directed at a community member or group of people.
3. **Stereotyping or discrimination.** Characterizing anyone’s personality or behavior on the basis of immutable identities or traits.
4. **Sexualization.** Behaving in a way that would generally be considered inappropriately intimate in the context or purpose of the community.
5. **Violating confidentiality**. Sharing or acting on someone's personal or private information without their permission.
6. **Endangerment.** Causing, encouraging, or threatening violence or other harm toward any person or group.
7. Behaving in other ways that **threaten the well-being** of our community.

#### Other restrictions

1. **Misleading identity.** Impersonating someone else for any reason, or pretending to be someone else to evade enforcement actions.
2. **Failing to credit sources.** Not properly crediting the sources of content you contribute.
3. **Promotional materials**. Sharing marketing or other commercial content in a way that is outside the norms of the community.
4. **Irresponsible communication.** Failing to responsibly present content which includes, links or describes any other restricted behaviors.

### Reporting an issue

Tensions can occur between community members even when they are trying their best to collaborate. Not every conflict represents a code of conduct violation, and this Code of Conduct reinforces encouraged behaviors and norms that can help avoid conflicts and minimize harm.

When an incident does occur, it is important to report it promptly. To report a possible violation, email the project team at [contact@healthicons.org](mailto:contact@healthicons.org).

Community Moderators take reports of violations seriously and will make every effort to respond in a timely manner. They will investigate all reports of code of conduct violations, reviewing messages, logs, and recordings, or interviewing witnesses and other participants. Community Moderators will keep investigation and enforcement actions as transparent as possible while prioritizing safety and confidentiality. In order to honor these values, enforcement actions are carried out in private with the involved parties, but communicating to the whole community may be part of a mutually agreed upon resolution.

### Addressing and repairing harm

If an investigation by the Community Moderators finds that this Code of Conduct has been violated, the following enforcement ladder may be used to determine how best to repair harm, based on the incident's impact on the individuals involved and the community as a whole. Depending on the severity of a violation, lower rungs on the ladder may be skipped.

#### 1. Warning

- **Event:** A violation involving a single incident or series of incidents.
- **Consequence:** A private, written warning from the Community Moderators.
- **Repair:** Examples of repair include a private written apology, acknowledgement of responsibility, and seeking clarification on expectations.

#### 2. Temporarily limited activities

- **Event:** A repeated incidence of a violation that previously resulted in a warning, or the first incidence of a more serious violation.
- **Consequence:** A private, written warning with a time-limited cooldown period designed to underscore the seriousness of the situation and give the community members involved time to process the incident. The cooldown period may be limited to particular communication channels or interactions with particular community members.
- **Repair:** Examples of repair may include making an apology, using the cooldown period to reflect on actions and impact, and being thoughtful about re-entering community spaces after the period is over.

#### 3. Temporary suspension

- **Event:** A pattern of repeated violation which the Community Moderators have tried to address with warnings, or a single serious violation.
- **Consequence:** A private written warning with conditions for return from suspension. In general, temporary suspensions give the person being suspended time to reflect upon their behavior and possible corrective actions.
- **Repair:** Examples of repair include respecting the spirit of the suspension, meeting the specified conditions for return, and being thoughtful about how to reintegrate with the community when the suspension is lifted.

#### 4. Permanent ban

- **Event:** A pattern of repeated code of conduct violations that other steps on the ladder have failed to resolve, or a violation so serious that the Community Moderators determine there is no way to keep the community safe with this person as a member.
- **Consequence:** Access to all community spaces, tools, and communication channels is removed. In general, permanent bans should be rarely used, should have strong reasoning behind them, and should only be resorted to if working through other remedies has failed to change the behavior.
- **Repair:** There is no possible repair in cases of this severity.

This enforcement ladder is intended as a guideline. It does not limit the ability of Community Managers to use their discretion and judgment, in keeping with the best interests of our community.

### Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public or other spaces. Examples of representing our community include using an official email address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 3.0, permanently available at [https://www.contributor-covenant.org/version/3/0/](https://www.contributor-covenant.org/version/3/0/).

Contributor Covenant is stewarded by the Organization for Ethical Source and licensed under CC BY-SA 4.0. To view a copy of this license, visit [https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/)

For answers to common questions about Contributor Covenant, see the FAQ at [https://www.contributor-covenant.org/faq](https://www.contributor-covenant.org/faq). Translations are provided at [https://www.contributor-covenant.org/translations](https://www.contributor-covenant.org/translations). Additional enforcement and community guideline resources can be found at [https://www.contributor-covenant.org/resources](https://www.contributor-covenant.org/resources). The enforcement ladder was inspired by the work of [Mozilla’s code of conduct team](https://github.com/mozilla/inclusion).

## License

The icons and the npm packages are in the public domain ([CC0](https://creativecommons.org/publicdomain/zero/1.0/)). The code for this website is under the MIT License:

Copyright © 2021 Resolve to Save Lives

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Hosted by Resolve to Save Lives

The project is hosted by the public health not-for-profit [Resolve to Save Lives](https://resolvetosavelives.org) as an expression of our commitment to offer the icons for free, forever.
