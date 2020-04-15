function generateMarkdown(data) {
  return `
# ${data.title}

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

## Badge 

## Contributing
${data.contrubuting}

## Test
${data.tests}

## Questions
  * User GitHub profile picture
  * User GitHub email


`;
}


const projectURL = (gitHub, title) => {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return ` https://github.com/${gitHub}/${kebabCaseTitle}`

};

module.exports = generateMarkdown;
