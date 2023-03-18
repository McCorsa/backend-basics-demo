# React To-Do App

In this folder, I have set up a basic React application to demonstrate how we can integrate Supabase as a BaaS.

## Setting up

1. Open a terminal (`Ctrl + `\`).
2. Make sure that you are in the `js-react-todo` directory.
3. Run `npm install`.
4. If there are no errors, run `npm run dev` and then go to the web address provided.

If there are no errors, you are ready to go!

## Adding Supabase

Please refer to Supabase's documentation at https://supabase.com/docs/reference/javascript/installing at any time for advice on installation and using Supabase's Javascript SDK.

1. Open a terminal (`Ctrl + `\`)
2. Make sure that you are in the `js-react-todo` directory.
3. Run `npm install @supabase/supabase-js`
4. Add the following code to `App.jsx`, replacing the two parameters with your `supabaseUrl` and `supabaseKey`.

```javascript
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
```

5. Fill in the functions using the documentation at the above URL.