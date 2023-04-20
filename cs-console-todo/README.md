# C# BaaS Demo App

In this folder, I've set up a basic C# console app that can make use of Supabase's BaaS Community SDK.

## To Set Up
Refer to https://supabase.com/docs/reference/csharp/installing for the full instructions.

1. Open command line and CD into `cs-console-todo`.
2. Run `dotnet add package supabase-csharp`. (if this fails, there is a graphical way to do the install in Visual Studio I can demonstrate).
3. Insert the following code at the beginning of `Program.cs`, replacing `SUPABASE_URL` and `SUPABASE_KEY` with your URL and key.

```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

4. Follow the instructions at the above link to set up a class that resembles the data structure you created in Supabase. The following is an example of this, but must be updated to meet your DB structure.

```csharp
// This could be in a separate file such as "User.cs"
[Table("users")]
class User : BaseModel
{
    [PrimaryKey("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("email")]
    public string Email { get; set; }
    
    [Column("password")]
    public string Password { get; set; }

    //... etc.
}

// A result can be fetched like so.
var result = await supabase.From<User>().Get();
var users = result.Models
```
