Feature: Get Code Owners
    As a developer
    I want to ensure correct tree of code owners is retreived
    So that I can use code owners list in other components
    
    Scenario: Get all code owners - returns something
        Given I am using test list of code owners
        When I call get-code-owners
        Then I get something back
        
        