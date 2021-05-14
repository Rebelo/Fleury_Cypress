

Feature: Unity selection validation

    As a user I want to choose the first unity presented given the desired facilidades choosen

    Scenario Outline: Select the first unity presented
    Given I am in unity page
    When I choose the "<facilidades>"
    And click the first one unity presented in the card grid
    Then the unity datail page is shown, with the same title shown in the grid

    Examples:
      | facilidades |
      |Atendimento aos domingos,Próximo ao metrô,Atendimento noturno|

      