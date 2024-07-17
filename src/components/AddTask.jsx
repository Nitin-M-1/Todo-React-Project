import "./AddTask.css";
export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  function handleSubmit(e) {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTasks = taskList.map((todo) =>
        todo.id == task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTasks);
      setTask({});
    } else {
      if (e.target.task.value == "") return;
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}${date.toLocaleDateString()}`,
      };
      setTask({});
      setTaskList([...taskList, newTask]);
    }
  }
  return (
    <section>
      <div className="main-form-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            autoComplete="off"
            placeholder="Add Task"
            maxLength="25"
            value={task.name || ""}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <button type="">{task.id ? "UPDATE" : "ADD"}</button>
        </form>
      </div>
    </section>
  );
};
