
<br />
<div align="center">

  <h1 align="center">Project FullStack Employee System CRUD</h1>

  <h3> <a href="https://employeesystem-frontend-b0a1d3b1aa8e.herokuapp.com/" target="_blank">Live Website</a></h3>

  <p align="center">
    An application designed to manage employee data effectively
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


https://github.com/KelvinPhu/Project-FullStack-Employee-System-CRUD/assets/102346766/88da4bd0-14ac-4345-bea2-78e1dfceb608


The Project-FullStack-Employee-System-CRUD is a comprehensive application designed to manage employee data effectively through a user-friendly interface. This project integrates a backend API, crafted in Java, with a frontend developed in ReactJS, offering a seamless interaction experience for users. Here's a brief overview of its core functionalities:

### Create New Employee
Users can add new employees to the system by filling out a form with employee details such as name, department, and contact information. This data is then sent to the backend server where it's processed and stored.

### Read Employee (Display Employee Information)
The application allows users to view a list of all employees currently stored in the database. Users can click on an employee to view more detailed information. This is particularly useful for HR departments needing quick access to employee records.

### Update Employee Information
Should there be any changes to an employee's details, the system provides an option to update their information. Users can edit fields such as employee name, department, and job title, ensuring that the database is always up-to-date.


### Delete Employee
The system also enables the deletion of employee records. This function can be used to remove employees who have left the company, helping maintain a clean and accurate database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

<p style="display: inline-block;" align="center">
  <kbd>
    <kbd>Programming Languages</kbd>
    <br>
    <br>
    <img width="30px" alt="java" src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/java/java-original.svg" />
    <img width="30px" alt="spring" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
    <img width="30px" alt="reactjs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
    <img width="30px" alt="MySQL" src="https://github.com/KelvinPhu/Project-FullStack-Employee-System-CRUD/assets/102346766/841f48b6-5559-4d17-9917-90cc086827c3" />
  </kbd>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started


Setting up a full-stack project like the Project-FullStack-Employee-System-CRUD locally involves several steps, from initial setup to running the project. 
This guide assumes you have some basic familiarity with Java for the backend, ReactJS for the frontend, and MySQL for the database.

### Prerequisites

- Java Development Kit (JDK): Ensure you have JDK 11 or newer installed on your machine.
- MySQL Server: Make sure MySQL Server is installed and running.
- Node.js and npm: Required for running the ReactJS frontend.
- IDE or Editor: IntelliJ IDEA or Spring Tool Suite for backend and VS Code for frontend development are recommended.

### Backend Setup (Spring Boot)
* Clone the Repository: Clone the project repository to your local machine.
  ```sh
  git clone [Your Repository URL]
  cd [Your Project's Backend Directory]
  ```

* Database Configuration: Open src/main/resources/application.yaml (or application.properties) in your backend project and configure your MySQL database connection:
  ```sh
  # configuration with application.yml file
  spring:
    datasource:
      url: jdbc:sqlserver://THIEN-PHU:1433;databaseName=PracticeJavaSpringReactJS;encrypt=false
      driverClassName: com.microsoft.sqlserver.jdbc.SQLServerDriver
      username: sa
      password: 123456789Thien_Phu
  
    jpa:
      hibernate:
        ddl-auto: update
      properties:
        hibernate:
          dialect: org.hibernate.dialect.SQLServerDialect
      show-sql: true
  ```

* Run the Application: You can run the Spring Boot application directly from your IDE by running the main class annotated with @SpringBootApplication, or use Maven from the command line:
  ```sh
  ./mvnw spring-boot:run
  ```
  
* Verify Backend: Once started, ensure the backend is running correctly by accessing or the configured port.
    ```sh
  http://localhost:8080
  ```

### Frontend Setup (ReactJS)

* Navigate to the Frontend Directory: After setting up the backend, open a new terminal window and navigate to your project's frontend directory.
  ```sh
  cd [Your Project's Frontend Directory]
  ```

* Install Dependencies: Install the required npm packages.
  ```sh
  npm install
  ```

* Environment Variables: Create a .env file in the root of your frontend project if you have any environment-specific settings (e.g., the backend API URL).
  ```sh
  REACT_APP_API_BASE_URL=http://localhost:8080/api
  ```
  
* Run the Frontend: Start the React application.
    ```sh
  npm start
  ```

### Testing the Full-Stack Application

* Access the Application: With both backend and frontend running, open your browser and go to `$ http://localhost:3000`. You should see your full-stack application running.
  
* Use the Application: Test the CRUD functionalities by creating, reading, updating, and deleting employee entries.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Troubleshooting

* Database Connection: If the backend can't connect to the database, check your MySQL service and ensure the credentials in `$ application.properties` are correct.
* Port Conflicts: If you encounter port conflicts (e.g., if port 8080 or 3000 is already in use), you can change the port in the backend's `$ application.properties` file `$ (server.port=yourNewPort)` and the frontend's `$ .env` file, if applicable.
* Dependencies: If you face issues with missing or incompatible npm packages, ensure you've run `$ npm install` from within the frontend directory and that your `$ package.json` file is correctly set up.

<!-- USAGE EXAMPLES -->
## Usage

The Project-FullStack-Employee-System-CRUD provides a comprehensive platform for managing employee information. This section will guide you through some of the common use cases and functionalities you can leverage within the system. 
Here, you’ll find examples of how to perform CRUD operations, including adding a new employee, viewing employee details, updating employee information, and deleting an employee.

### Adding a New Employee
To add a new employee, navigate to the "Add Employee" section of the application. Fill out the form with the employee's details, such as name, email, job title, and department. Once completed, submit the form to save the new employee to the database.

`$ Example:`

![1](https://github.com/KelvinPhu/Project-FullStack-Employee-System-CRUD/assets/102346766/20405ba3-145a-40eb-ad53-c65c78fc6fa0)

`$ code example`
```
fetch('http://localhost:8080/api/employees', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    jobTitle: 'Software Engineer',
    department: 'Engineering',
  }),
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch((error) => console.error('Error:', error));
```

### Viewing Employee Details
The main dashboard lists all employees. Click on an employee's name to view more detailed information about their profile. This page will display all the relevant information, such as contact details, department, and job title.

![2](https://github.com/KelvinPhu/Project-FullStack-Employee-System-CRUD/assets/102346766/aa484109-fecf-4d90-ad0a-6436d0ccbcad)

### Updating Employee Information
To update an employee's information, navigate to the employee's detail page and click the "Edit" button. Modify the fields as needed in the form and submit it to update the employee's details in the database.

![3](https://github.com/KelvinPhu/Project-FullStack-Employee-System-CRUD/assets/102346766/8fc3a63e-eaad-4e44-bd32-98e1635b37ed)


`$ Example:`

```
fetch('http://localhost:8080/api/employees/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Jane Doe Updated',
    email: 'jane.updated@example.com',
    jobTitle: 'Senior Software Engineer',
    department: 'Engineering',
  }),
})
.then(response => response.json())
.then(data => console.log('Update Successful:', data))
.catch((error) => console.error('Error:', error));
```

### Deleting an Employee
If you need to remove an employee from the system, locate the employee you wish to delete in the main dashboard. Click on the "Delete" button next to their name to remove their information from the database.

`$ Example:`

```ReactJS
fetch('http://localhost:8080/api/employees/1', {
  method: 'DELETE',
})
.then(() => console.log('Delete successful'))
.catch((error) => console.error('Error:', error));
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

Developing a roadmap for Project-FullStack-Employee-System-CRUD helps guide the development process and outlines key milestones. Here's the projected roadmap:

### Phase 1: Planning and Setup

- **Objective:** Establish project foundation and prepare the development environment.
  - [ ] Define project scope and objectives.
  - [ ] Choose technology stack (Java, Spring Framework, ReactJS, MySQL).
  - [ ] Setup development environments for both frontend and backend.
  - [ ] Create initial project repositories on GitHub.

### Phase 2: Backend Development

- **Objective:** Develop a robust and scalable backend.
  - [ ] Design database schema.
  - [ ] Implement RESTful API endpoints for CRUD operations.
  - [ ] Setup Spring Security for authentication and authorization.
  - [ ] Develop unit and integration tests.
  - [ ] Deploy a preliminary version of the backend for testing.

### Phase 3: Frontend Development

- **Objective:** Implement a user-friendly frontend interface.
  - [ ] Design UI/UX for the employee management system.
  - [ ] Implement React components for displaying and managing employee data.
  - [ ] Integrate frontend with backend services using Axios.
  - [ ] Test frontend functionalities and responsiveness.
  - [ ] Finalize the frontend deployment.

### Phase 4: Integration and Testing

- **Objective:** Ensure seamless operation between frontend and backend components.
  - [ ] Integrate the frontend with the backend.
  - [ ] Conduct comprehensive testing (unit, integration, and e2e).
  - [ ] Address and fix any identified bugs or issues.
  - [ ] Optimize performance across the entire stack.

### Phase 5: Deployment and Initial Release

- **Objective:** Launch the system for public use.
  - [ ] Prepare production environments for both frontend and backend.
  - [ ] Deploy the application to a cloud service provider.
  - [ ] Perform final testing in the production environment.
  - [ ] Officially launch the application.

### Phase 6: Feedback and Iterations

- **Objective:** Incorporate user feedback and make necessary adjustments.
  - [ ] Collect user feedback through surveys and usage analytics.
  - [ ] Identify areas for improvement or additional features.
  - [ ] Plan and implement updates based on feedback.
  - [ ] Release periodic updates to enhance functionality and user experience.

### Phase 7: Future Enhancements

- **Objective:** Expand the project scope and add new features.
  - [ ] Explore the integration of AI for data analysis and predictions.
  - [ ] Add support for more complex employee performance tracking.
  - [ ] Implement additional security features and compliance checks.
  - [ ] Consider developing a mobile app version of the system.

### Continuous Improvement

- **Objective:** Maintain and improve the system continuously.
  - [ ] Monitor system performance and user satisfaction.
  - [ ] Keep the technology stack updated.
  - [ ] Regularly review and refine the development and deployment processes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

### How to Contribute

1. **Fork** the repository.
2. **Clone** the forked repository to your local machine.
    ```bash
    git clone https://github.com/your-username/Project-FullStack-Employee-System-CRUD.git
    ```
3. **Create a new branch** for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
    ```
4. **Make changes** to the codebase.
5. **Test** your changes thoroughly.
6. **Commit** your changes.
    ```bash
    git commit -m "Add your commit message here"
    ```
7. **Push** your changes to your fork.
    ```bash
    git push origin feature/your-feature-name
    ```
8. Create a new **Pull Request** from your forked repository to the original repository.
9. Provide a descriptive title and detailed description for your Pull Request.
10. Wait for maintainers to review your Pull Request and address any feedback if necessary.
11. Once approved, your changes will be merged into the main project.

### Guidelines

- Follow the project's coding style and guidelines.
- Ensure your code is well-tested.
- Provide detailed and clear commit messages.
- Be respectful to others and their contributions.
- If you're unsure about something, don't hesitate to ask for clarification or guidance.

### Found a Bug or Have a Feature Request?

If you encounter any bugs or have suggestions for new features, please [open an issue](https://github.com/your-username/Project-FullStack-Employee-System-CRUD/issues) on GitHub. Provide detailed information about the problem or feature request, including steps to reproduce for bugs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Huynh Thien Phu - [@kelvin_hnh](https://twitter.com/kelvin_hnh) - phuhuynh197@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

We would like to express our gratitude to the following individuals and organizations for their contributions to this project:

- [Open Source Community](https://opensource.org/): For providing a wealth of knowledge and resources to the community.
- [Stack Overflow](https://stackoverflow.com/): For being an invaluable resource for troubleshooting and problem-solving.
- [GitHub](https://github.com/): For providing an excellent platform for collaboration and version control.
- [ReactJS Documentation](https://reactjs.org/): For comprehensive documentation and tutorials on ReactJS.
- [Spring Framework Documentation](https://spring.io/): For extensive documentation and guides on the Spring Framework.
- [Bootstrap Documentation](https://getbootstrap.com/): For clear and concise documentation on Bootstrap.
- [Axios Documentation](https://axios-http.com/): For detailed documentation and examples on Axios.
- [MySQL Documentation](https://dev.mysql.com/doc/): For comprehensive documentation on MySQL.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
