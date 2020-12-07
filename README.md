# Angular To-Do List

![GitHub language count](https://img.shields.io/github/languages/count/moisesjsalmeida/angular_crashcourse_todolist) ![GitHub top language](https://img.shields.io/github/languages/top/moisesjsalmeida/angular_crashcourse_todolist) ![PyPI - Django Version](https://img.shields.io/pypi/djversions/djangorestframework)


![Screen](https://github.com/moisesjsalmeida/angular_crashcourse_todolist/blob/main/screen.gif)

This project is based on an [Angular Crash Course by Traversy Media's Youtube channel ](https://youtu.be/Fdf5aTYRW0E)
The code for the original project can be found on https://github.com/bradtraversy/angular-crash-todolist

## Running this application

### Running the Django Rest Framework API

```bash
# Clone this repo
$ git clone https://github.com/moisesjsalmeida/angular_crashcourse_todolist.git

# Access the django-api folder
$ cd django-api

# Installing dependencies
# We recommend using python virtualenv
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt

# Building the database
$ python manage.py makemigrations
$ python manage.py migrate

# Running the server on localhost:8000
$ python manage.py runserver
```

### Running the Angular aplication

```bash
# Access the front-end folder
$ cd angular-crash-todolist

# Install dependencies
$ npm install

# Serve on localhost:4200
$ ng serve

# Build for production
$ ng build
```

## 🛠 Tools used for this project

**Back-end**

-   [Django](https://www.djangoproject.com/)
-   [Django Rest Framework](https://www.django-rest-framework.org/)
-   [Django Cors Headers](https://pypi.org/project/django-cors-headers/)
-   [Sqlite](https://www.sqlite.org/index.html)

**Front-end**

-   [Angular](https://angular.io/)
-   [Typescript](https://www.typescriptlang.org/)

## Author

 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/34729824?s=400&u=49e597a00f41435cd1546077ed4b1f691359a2b9&v=4" width="100px;" />
 <br />
 <sub><b>Moisés Almeida</b></sub>


_Contact me!_

[![Linkedin Badge](https://img.shields.io/badge/-Moises-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/moisesjsalmeida/) [![Gmail Badge](https://img.shields.io/badge/-moisesjsalmeida@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:moisesjsalmeida@gmail.com)](mailto:moisesjsalmeida@gmail.com)
