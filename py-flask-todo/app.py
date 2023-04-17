from flask import Flask, redirect, render_template, request, flash

app = Flask(__name__)
app.secret_key = "supersecretkey"

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
    flash("Successfully added new task " + request.form["newtask"])
    return redirect("/")

@app.route("/edit/<int:id>/", methods=["GET", "POST"])
def edit_todo(id):
    if request.method == "GET":
        return render_template("edit.html", id=id, todo=todos[id])
    elif request.method == "POST":
        todos[id] = request.form["newtask"]
        flash("Task with id " + str(id) + " has been renamed to " + request.form["newtask"])
        return redirect("/")

# @app.route("/edit/<int:id>/<new_value>")
# def edit_todo(id, new_value):
#     return f'Editing todo with id {id} to become new_value {new_value}'

@app.route("/delete/<int:id>")
def delete_todo(id):
    todos.pop(id)
    flash("Successfully deleted todo with id " + str(id))
    return redirect("/")