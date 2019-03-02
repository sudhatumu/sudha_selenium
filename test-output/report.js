$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/JavaProjects/BaseCucumberTest/src/main/java/features/Contactspage.feature");
formatter.feature({
  "line": 1,
  "name": "Contacts feature for Free CRM site",
  "description": "",
  "id": "contacts-feature-for-free-crm-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Contacts Test Scenario",
  "description": "",
  "id": "contacts-feature-for-free-crm-site;free-crm-contacts-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is alreary in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "contacts-feature-for-free-crm-site;free-crm-contacts-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "contacts-feature-for-free-crm-site;free-crm-contacts-test-scenario;;1"
    },
    {
      "cells": [
        "sudhatumu",
        "test123",
        "sriram",
        "p",
        "Student"
      ],
      "line": 16,
      "id": "contacts-feature-for-free-crm-site;free-crm-contacts-test-scenario;;2"
    },
    {
      "cells": [
        "sudhatumu",
        "test123",
        "Rohan",
        "p",
        "Student"
      ],
      "line": 17,
      "id": "contacts-feature-for-free-crm-site;free-crm-contacts-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Contacts Test Scenario",
  "description": "",
  "id": "contacts-feature-for-free-crm-site;free-crm-contacts-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is alreary in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter \"sudhatumu\" and \"test123\" details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"sriram\" and \"p\" and \"Student\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 12151606080,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 49236229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudhatumu",
      "offset": 7
    },
    {
      "val": "test123",
      "offset": 23
    }
  ],
  "location": "LoginStepDefs.enter_uname_and_password_details(String,String)"
});
formatter.result({
  "duration": 390422121,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8104558313,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_is_on_Home_page()"
});
formatter.result({
  "duration": 15140257,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 377400473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sriram",
      "offset": 29
    },
    {
      "val": "p",
      "offset": 42
    },
    {
      "val": "Student",
      "offset": 50
    }
  ],
  "location": "LoginStepDefs.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 2159098426,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.close_the_browser()"
});
formatter.result({
  "duration": 1228608507,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Contacts Test Scenario",
  "description": "",
  "id": "contacts-feature-for-free-crm-site;free-crm-contacts-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is alreary in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter \"sudhatumu\" and \"test123\" details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Rohan\" and \"p\" and \"Student\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 11322694979,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 52080926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudhatumu",
      "offset": 7
    },
    {
      "val": "test123",
      "offset": 23
    }
  ],
  "location": "LoginStepDefs.enter_uname_and_password_details(String,String)"
});
formatter.result({
  "duration": 296936759,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8275450492,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_is_on_Home_page()"
});
formatter.result({
  "duration": 10667050,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 313025499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rohan",
      "offset": 29
    },
    {
      "val": "p",
      "offset": 41
    },
    {
      "val": "Student",
      "offset": 49
    }
  ],
  "location": "LoginStepDefs.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1970188821,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.close_the_browser()"
});
formatter.result({
  "duration": 1371978028,
  "status": "passed"
});
});