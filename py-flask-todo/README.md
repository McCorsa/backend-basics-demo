# Flask BaaS Demo

## Setting up the Flask To-Do Demo

1. CD into `py-flask-todo`
2. Run `pip install flask`
3. Run `flask run`

Remember, if you make any changes to your `app.py`, make sure to restart the Flask Server with `CTRL + C` and then run `flask run` in the terminal.

## Adding Supabase
At any point, you can refer to the Supabase documentation for Python at https://supabase.com/docs/reference/python/introduction for more information.

1. Run `pip install supabase`
2. Insert the following code at the beginning of `app.py`:

```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

3. Create a separate file called `.env`. We will store the supabase url and key in here as secure variables.
4. Type the following, inserting your own supabase url and key.

```dotenv
export SUPABASE_URL="my-url-to-my-awesome-supabase-instance"
export SUPABASE_KEY="my-supa-dupa-secret-supabase-api-key"
```

5. You can now add in methods as per the documentation at the link above.
