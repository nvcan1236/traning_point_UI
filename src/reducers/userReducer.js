export const initialUser = {
  id: "1",
  username: "nguyenvancanh",
  firstName: "eee",
  lastName: "nguyen van",
  role: "ROLE_ASSISTANT", // ROLE_ASSISTANT ROLE_STUDENT
  is_admin: true,
  avatar:
    "https://images.unsplash.com/photo-1548778943-5bbeeb1ba6c1?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function userReducer(state, action) {
  switch (action.type) {
    case "login":
      localStorage.setItem("USER_TOKEN", action.payload)
      return state
    case "logout":
      localStorage.removeItem("USER_TOKEN")
      return null;
    case "current":
      return action.payload
  }
}
