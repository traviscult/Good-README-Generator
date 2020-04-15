function generateMarkdown(data) {
  console.log(data.gitHub)
  const projectURL = (gitHub, title) => {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return ` https://github.com/${data.gitHub}/${kebabCaseTitle}`
    
  };
  
  const profilePicture = `https://github.com/${data.gitHub}.png?size=300`
  
console.log(projectURL)
console.log(profilePicture)
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
  ![Image of profile avatar](${profilePicture})
  * User GitHub email 
  ${projectURL}


`;
}




module.exports = generateMarkdown;
