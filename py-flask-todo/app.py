from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/add/<todo>")
def add_todo(todo):
    return f'Creating new todo {todo}'

@app.route("/edit/<int:id>/<new_value>")
def edit_todo(id, new_value):
    return f'Editing todo with id {id} to become new_value {new_value}'

@app.route("/delete/<int:id>")
def delete_todo(id):
    return f'Deleting todo with id {id}'