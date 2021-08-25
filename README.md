# Buyers-Ball React & Redux + Django web app
```
E-Commerce web app using React frontend and Django backend.

```


<a href="https://bbapp-frontend-production.herokuapp.com/" rel="nofollow">FRONTEND LIVE DEMO</a>


<a href="https://bbapp-backend-production.herokuapp.com/api/" rel="nofollow"> API LIVE DEMO</a>

# Tech used
```
* Frontend : React & Redux
* Backend : Django
```

# How to install  
1. Git Clone

```
git clone https://github.com/reantep/buyers-ball.git
```

2. Backend setup 

```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://127.0.0.1:8000/api/
```

3. Frontend setup

```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```
