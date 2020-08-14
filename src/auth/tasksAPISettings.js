const tasksAPIUrl = "https://jarzebak.eu/dawid/tasks";

const httpHeader = {
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: "dawid",
    password: "WAFmkpSI",
  },
};

export { tasksAPIUrl, httpHeader };
