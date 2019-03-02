package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\JavaProjects\\BaseCucumberTest\\src\\main\\java\\features\\Contactspage.feature",
		glue = {"stepdefinitions"},
		monochrome = true,
		format = {"pretty","html:test-output"},
		dryRun = false
		)


public class MyRunner {

}
