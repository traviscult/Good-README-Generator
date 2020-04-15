function generateMarkdown(data) {
  const profilePicture = `https://github.com/${data.gitHub}.png?size=300`
  const kebabCaseTitle = data.title.toLowerCase().split(" ").join("-");
  const projectURL = ` https://github.com/${data.gitHub}/${kebabCaseTitle}`

	const badge = `https://img.shields.io/github/issues/${data.gitHub}/${kebabCaseTitle}`

  return `
# ${data.title}

[![GitHub license](${badge})](${projectURL})

## Description
${data.description}

## Table of contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [test](#test)


## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credits}

## License 
${data.license}

## Contributing
${data.contrubuting}

## Test
${data.tests}

## Questions
  ![Image of profile avatar](${profilePicture})
  
   ${projectURL}

`;
}

module.exports = generateMarkdown;
