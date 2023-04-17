from flask import Flask, redirect, render_template, request

app = Flask(__name__)

logged_in = True;
todos = ["Task 1", "Task 2", "Task 3"]

@app.route("/")
def index():
    if not logged_in:
        return redirect("login")
    return render_template("home.html", todos=todos)

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/add", methods=["POST"])
def add_todo():
    print(request.form["newtask"])
    todos.append(request.form["newtask"])
    return redirect("/")

@app.route("/edit/<int:id>/<new_value>")
def edit_todo(id, new_value):
    return f'Editing todo with id {id} to become new_value {new_value}'

@app.route("/delete/<deltodo>")
def delete_todo(deltodo):
    todos.remove(deltodo)
    return redirect("/")