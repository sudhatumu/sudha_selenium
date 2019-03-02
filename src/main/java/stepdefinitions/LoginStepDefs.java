package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefs {
	
	WebDriver driver;
	protected static Scenario currentScenario;

	@Given("^user is alreary in login page$")
	public void user_is_already_in_login_page() {
		
		System.out.println("In first step definition");
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\538067\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("https://www.freecrm.com");
		
	}
	
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		
		System.out.println("Inside Title of login page is Free CRM");
		
		String title = driver.getTitle();
		System.out.println("Title of the page:"+title);
		Assert.assertEquals(title, "#1 Free CRM software in the cloud for sales and service");
		
	}
	
/*	@Then("^enter uname and password details$")
	public void enter_uname_and_password_details() throws Throwable {
		System.out.println("Inside enter user name and password");
		driver.findElement(By.name("username")).sendKeys("sudhatumu");
		driver.findElement(By.name("password")).sendKeys("test123");

	}*/
	
	@Then("^enter \"(.*)\" and \"(.*)\" details$")
	public void enter_uname_and_password_details(String username, String password) throws Throwable {
		System.out.println("Inside enter user name and password");
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {

		System.out.println("Inside User clicks on login button");
		WebElement loginbtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginbtn);
		
		String homepgtitle = driver.getTitle();
		System.out.println("title after click:"+homepgtitle);
	}

	@Then("^user is on Home page$")
	public void user_is_on_Home_page() throws Throwable {

		System.out.println("Inside User is on home page");
		
		String hometitle = driver.getTitle();
		System.out.println("title of the home page:"+hometitle);
		Assert.assertEquals(hometitle, "CRMPRO");
		
		
	}
	@Then("^user moves to new contacts page$")
	public void user_moves_to_new_contacts_page() throws Throwable {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title='Contacts']"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		

	}

	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String firstname, String lastname, String position) throws Throwable {
		
         //driver.findElement(By.id("first_name")).sendKeys(firstname);
		System.out.println("argument firstname value:"+firstname);
         driver.findElement(By.name("first_name")).sendKeys(firstname);
         driver.findElement(By.id("surname")).sendKeys(lastname);
         driver.findElement(By.id("company_position")).sendKeys(position);
         
         driver.findElement(By.xpath("//input[@type = 'submit' and @value = 'Save' ]")). click();
    		
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {

		driver.quit();
	}
}
