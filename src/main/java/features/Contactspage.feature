Feature: Contacts feature for Free CRM site

Scenario Outline: Free CRM Contacts Test Scenario

Given user is alreary in login page
When title of login page is Free CRM
Then enter "<username>" and "<password>" details
Then user clicks on login button
Then user is on Home page
Then user moves to new contacts page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
 |username|password|firstname|lastname|position|
 |sudhatumu|test123|sriram|p|Student|
 |sudhatumu|test123|Rohan|p|Student|
