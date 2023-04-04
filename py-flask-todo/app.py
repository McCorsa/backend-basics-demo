from flask import Flask, redirect, render_template

app = Flask(__name__)

logged_in = True;

@app.route("/")
def index():
    if not logged_in:
        return redirect("login")
    todos = ["Task 1", "Task 2", "Task 3"]
    return render_template("home.html", todos=todos)

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/add/<todo>")
def add_todo(todo):
    return f'Creating new todo {todo}'

@app.route("/edit/<int:id>/<new_value>")
def edit_todo(id, new_value):
    return f'Editing todo with id {id} to become new_value {new_value}'

@app.route("/delete/<int:id>")
def delete_todo(id):
    return f'Deleting todo with id {id}'