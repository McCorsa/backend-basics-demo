namespace cs_console_todo;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to the Backend BaaSics To-Do App in C#!");
        int menuSelection = 0;
        while (menuSelection != 3)
        {
            Console.WriteLine("\nPlease enter a selection from the following options:");
            Console.WriteLine("1) Sign in\n2) Register\n3) Exit");
            int.TryParse(Console.ReadLine(), out menuSelection);
            Console.WriteLine();
            switch (menuSelection)
            {
                case 1:
                    Console.WriteLine("Login screen");
                    Console.Write("Email: ");
                    string email = Console.ReadLine();
                    Console.Write("Password: ");
                    string password = Console.ReadLine();
                    // Insert login handling in here.

                    Console.WriteLine("\nWelcome back, " + email);

                    int userMenuSelection = 0;
                    List<string> myTasks = new List<string> { "Task 1", "Task 2", "Task 3" };

                    while (userMenuSelection != 5)
                    {
                        Console.WriteLine("\nPlease enter a selection from the following options:");
                        Console.WriteLine("1) List tasks\n2) New task\n3) Edit task\n4) Delete task\n5) Log out");
                        int.TryParse(Console.ReadLine(), out userMenuSelection);
                        Console.WriteLine();

                        switch (userMenuSelection)
                        {
                            case 1:
                                for (int i = 0; i < myTasks.Count(); i++)
                                {
                                    Console.WriteLine(i + ". " + myTasks[i]);
                                }
                                break;
                            case 2:
                                Console.Write("New task name: ");
                                string newTask = Console.ReadLine();
                                myTasks.Add(newTask);
                                Console.WriteLine("New task has been added.");
                                break;
                            case 3:
                                Console.Write("Which task (number) are you editing? ");
                                int taskToEdit = 0;
                                int.TryParse(Console.ReadLine(), out taskToEdit);
                                if (taskToEdit >= 0 && taskToEdit < myTasks.Count) {
                                    Console.WriteLine("Old task name: " + myTasks[taskToEdit]);
                                    Console.Write("New task name: ");
                                    string newTitle = Console.ReadLine();
                                    myTasks[taskToEdit] = newTitle;
                                    Console.WriteLine("Task has been successfully updated.");
                                }                                
                                break;
                            case 4:
                                Console.Write("Which task (number) are you deleting? ");
                                int taskToDel = 0;
                                int.TryParse(Console.ReadLine(), out taskToDel);
                                if (taskToDel >= 0 && taskToDel < myTasks.Count) {
                                    Console.Write("Preparing to delete task " + myTasks[taskToDel] + ". Continue? (y/n) ");
                                    if (Console.ReadLine() == "y") {
                                        myTasks.RemoveAt(taskToDel);
                                        Console.WriteLine("Task successfully removed.");
                                    }
                                }
                                break;
                            default:
                                break;
                        }

                    }

                    Console.WriteLine("You have been logged out.");

                    break;
                case 2:
                    Console.WriteLine("Register screen");
                    Console.Write("Email: ");
                    string regEmail = Console.ReadLine();
                    Console.Write("Password: ");
                    string regPassword = Console.ReadLine();
                    // Insert registration handling here.
                    break;
                default:
                    break;
            }
        }
        Console.WriteLine("Good bye!");
    }
}
