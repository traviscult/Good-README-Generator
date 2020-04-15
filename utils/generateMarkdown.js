function generateMarkdown(data) {
  return `
# ${data.title}

## Description

## Table of contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [test](#test)


## Installation

## Usage 

## Credits

## License 

## Badge 

## Contributing


## Test


`;
}


const projectURL = (gitHub, title) => {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return ` https://github.com/${gitHub}/${kebabCaseTitle}`

};

module.exports = generateMarkdown;
