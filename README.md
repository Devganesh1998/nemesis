# Nemesis Assignment

**Demo Link :** https://

### :wrench: Tools Used

- #### FrontEnd

  - [React](http://reactjs.org/)
  - [Redux](https://redux.js.org/)
  - [Antd](https://ant.design/)
  - [Css](https://ant.design/)

- #### BackEnd
  - [Flask](https://expressjs.com/)
  - [MySQL](https://www.mysql.com/)
  - [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
  - [AWS](https://aws.amazon.com/ses/) (For hosting MySQL)

---

**local development**

### Step 1: Clone The Repo

Fork the repository. then clone the repo locally by doing -

```bash
git clone https://github.com/Devganesh1998/nemesis.git
```

### Step 2: Install Dependencies

- #### FrontEnd

  - cd into the directory

    ```bash
    cd FrontEnd
    ```

  - install all the dependencies
    ```bash
    npm install
    ```

- #### BackEnd

  - cd into the directory

    ```bash
    cd BackEnd/NemesisFlaskServer/
    python3 venv -m flaskenv
    source flaskenv/bin/activate
    ```

  - install dependencies

    ```bash
    pip install requirements.txt
    ```

  - Run Flask App
    ```bash
    export FLASK_APP=run.py
    flask run
    ```

### Step 3: Start Development Server

- Then start the development Server in Frontend/ Folder

  ```
  npm start
  ```

After running the development server the site should be running on https://localhost:3000

## Folder structure

- #### FrontEnd

  ```bash
  .
  ├── package.json
  ├── package-lock.json
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   └── robots.txt
  ├── README.md
  └── src
      ├── App.js
      ├── App.test.js
      ├── Components
      │   ├── authComponents
      │   │   ├── LoginForm.jsx
      │   │   └── RegisterForm.jsx
      │   └── HomeComponents
      │       └── SideMenu.jsx
      ├── index.css
      ├── index.js
      ├── logo.svg
      ├── Pages
      │   ├── AuthPage.jsx
      │   └── Homepage.jsx
      ├── Redux
      │   ├── AuthReducer
      │   │   ├── action.jsx
      │   │   ├── actionType.jsx
      │   │   └── reducer.jsx
      │   ├── axoisInstance.js
      │   └── configureStore.jsx
      ├── Routing
      │   ├── ProtectedRoute.js
      │   └── router.jsx
      ├── serviceWorker.js
      ├── setupTests.js
      └── Styles
          └── authPage.module.css
  ```

- #### BackEnd

  ```bash
  .
  └── NemesisFlaskServer
      ├── app
      │   ├── __init__.py
      │   ├── models
      │   │   ├── __init__.py
      │   │   ├── __pycache__
      │   │   │   ├── __init__.cpython-38.pyc
      │   │   │   └── user.cpython-38.pyc
      │   │   └── user.py
      │   ├── __pycache__
      │   │   └── __init__.cpython-38.pyc
      │   ├── routes
      │   │   ├── __init__.py
      │   │   ├── __pycache__
      │   │   │   ├── __init__.cpython-38.pyc
      │   │   │   └── User.cpython-38.pyc
      │   │   └── User.py
      │   └── services
      │       ├── auth.py
      │       └── __pycache__
      │           └── auth.cpython-38.pyc
      ├── config.py
      ├── instance
      │   └── config.py
      ├── migrations
      │   ├── alembic.ini
      │   ├── env.py
      │   ├── README
      │   ├── script.py.mako
      │   └── versions
      │       ├── 34afa6999950_test.py
      │       └── dec69881e6d1_test.py
      ├── __pycache__
      │   ├── config.cpython-38.pyc
      │   └── run.cpython-38.pyc
      ├── README.md
      ├── requirements.txt
      └── run.py  
    ```
