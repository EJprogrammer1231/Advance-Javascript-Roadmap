const user = {
  name: "Eljay",
  role: "admin"
};

const user2 = {
  name: "John",
  role: "developer"
};

function createPermissionChecker(requiredRole) {
  return function(value) {
    if (requiredRole === "admin") {
      return typeof value.role === requiredRole;
    }

    if (requiredRole === "developer") {
      return typeof value.role == user2.role;
    }
  }
}

const isAdmin = createPermissionChecker("admin");
const isDeveloper = createPermissionChecker("developer");

console.log(isAdmin(user));      // true
console.log(isDeveloper(user));  // false

console.log(isAdmin(user2));     // false
console.log(isDeveloper(user2)); // true