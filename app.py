from flask import Flask, render_template, url_for, redirect

app=Flask(__name__)


# def create_app():
#     from app import routes  # Import inside the function to avoid circular import
#     return app

@app.route("/")
def home():
    return render_template('home.html')



@app.route("/p1")
def page1():
    return render_template('page1.html')