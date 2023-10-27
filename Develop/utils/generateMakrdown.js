function renderTitle(title) {
  if (title === '') {
    return '';
  } else {
    return `# ${title}`;
  }
}

function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `
${license.badge} `;
  }
}

function renderTableOfContents(data) {
  const installLink = data.install === '' ? '' : '- [Installation](#installation)\n'
  const usageLink = data.usage === '' ? '' : '- [Usage](#usage)\n' 
  const licenseLink = data.usage === '' ? '' : '- [License](#license)\n';
  const contributeLink = data.usage === '' ? '' : '-[Contribution Info](#contribution)/n';
  const testLink = data.test === '' ? '' : '-[Test](#test)/n';
  const questionsLink = data.email === '' && data.github === '' ? '' : '-[Questions](#questions)\n';

  if (data.install === '' && data.usage === '' && data.license === 'none' && data.contribute === '' && data.test === '' && data.github === ''&& data.email === '' ) {
    return '';
  }else {
    return `
    ## Table of Contents\n${installLink}${usageLink}${licenseLink}${contributeLink}${testLink}${questionsLink}
    `};
  }

  function renderDescription(description) {
    if (description === '') {
      return '';
    }else {
      return `
      ## Description
      ${description}
      `;
    }
  }

  function renderInstallation(install){
    if (install === ''){
      return '';
    }else {
      return `
      ## Installation
      ${install}
      `;
    }
  }

  function renderUsage(usage) {
    if (usage === '') {
      return '';
    }else {
      return`
      ## Usage
      ${usage}
      `;
    }
  }

  function renderLicense(license) {
    if (license === 'none') {
      return '';
    }else {
      return `
      ## License
      ${license.link}
      `;
    }
  }

  function renderContribute(contribute) {
    if (contribute === '') {
      return '';
    }else {
      return `
      ## Contribution Info
      ${contribute}
      `;
    }
  }

function renderTest(test) {
if (test === '') {
  return '';
}else {
  return `
  ## Test
  ${test}
  `;
}
}

function renderQuestions(github, email) {
  if (github === '') {
    return '';
  }else {
    return `
    ## Questions
    Here is my [github](https://github.com/${github}) account.
    My email is: ${email}
    `;
  }
}

function generateMarkdown(data) {
  return `${renderTitle(data.title)}
  ${renderLicenseBadge(data.license)}
  ${renderDescription(data.description)}
  ${renderTableOfContents(data)}
  ${renderInstallation(data.install)}
  ${renderUsage(data.usage)}
  ${renderLicense(data.license)}
  ${renderContribute(data.contribute)}
  ${renderTest(data.test)}
  ${renderQuestions(data.github, data.email)}`;
}

module.exports=generateMarkdown;