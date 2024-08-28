# Discrete Math with SageMath

## Chicago City Colleges Open Educational Resource

Welcome to our interactive online textbook for learning Discrete Mathematics with SageMath.

### Empowering mathematicians and computer scientists with open-source tools

We are developing essential resources for students to use mathematical software effectively. Our goal is to streamline the learning process with SageMath. This approach helps students focus more on mathematics and reduces the friction of learning how to code. Our resources are designed for all math students, regardless of programming experience.

### What is SageMath?

[SageMath](https://www.sagemath.org/) is a free, open-source mathematics software system, based on Python. It integrates well-known open-source packages that include NumPy, SciPy, matplotlib, Sympy, Maxima, GAP, FLINT, R, and many [others](https://doc.sagemath.org/html/en/reference/spkg/). SageMath is fulfilling the need for a robust and free alternative to proprietary software like Magma, Maple, Mathematica, and Matlab.

### Why Discrete Mathematics with SageMath?

Our first textbook focuses on discrete mathematics. SageMath allows students to explore and visualize complex concepts, boosting their understanding and skills in this essential subject.

## How to Contribute

We invite you to you contribute to our project.

### Submitting an Issue

If you encounter any bugs, typos, have suggestions for improvements, or have any questions about the project, please submit an issue. Here's how:

1. Navigate to the [Issues tab](https://github.com/SageMathOER-CCC/sage-discrete-math/issues) in the GitHub repository.
2. Click on the "New Issue" button.
3. Fill in the title and describe the issue or suggestion in detail.
4. Submit the issue.

### Clone the Repository and Create a Branch

To contribute to the codebase or content, you'll need to clone the repository and create a feature branch to work on your changes:

1. Visit the [GitHub repository](https://github.com/SageMathOER-CCC/sage-discrete-math).
2. Clone the repository.
3. Create a feature branch with a short descriptive name.
4. Make your changes in the branch.

### Setting Up a Codespace

GitHub Codespaces allows you to develop in a cloud-based development environment. To set up a Codespace in a development container for this project:

1. Go to the "Code" tab of your cloned repository.
2. Click the green "Code" button, then select "Open with Codespaces" > "New codespace".
3. GitHub will prepare your codespace with the project's development environment.
4. Alternatively, you can clone the repository to your local machine and set up the development environment with a development container.

### How to Make Changes

After setting up a Codespace or cloning the repository to your local machine, you can make changes to the project. PreTeXt uses XML to structure the content, and SageMath is used for interactive code cells. You can learn more about PreTeXt [here](https://pretextbook.org/).

You can refer to an overview of features and syntax in the [PreTeXt documentation](https://pretextbook.org/doc/guide/html/overview.html).

The [quick reference](https://pretextbook.org/doc/quickref/quickref-pretext.pdf) is also helpful.

After making changes, open a terminal and run the following command to build the HTML for the project.

```bash
pretext build
```

The build command will inform you of any errors in the project and prompt you to run the next command to view the project in your browser.

```bash
pretext view
```

If you are happy with the changes you have made, you can commit them to your branch and submit a pull request.

### Submitting a Pull Request

After making your changes in the feature branch, you're ready to submit a pull request for review:

1. Go to the GitHub repository and select the option to make a pull request for your feature branch.
2. Ensure that the base repository and branch are correct.
3. Fill in a clear title and description for your changes.
4. Optionally, link the pull request to an issue.
5. Submit the pull request.

The project maintainers will review your pull request and may request changes or merge it into the main project. Your contributions are appreciated and crucial in making this resource more comprehensive and useful for math education.
