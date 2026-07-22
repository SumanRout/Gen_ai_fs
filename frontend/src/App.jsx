import { RouterProvider } from "react-router-dom"
import { router } from "./app.route.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import { ThemeProvider } from "./features/landingpage/context/ThemeContext.jsx"

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <InterviewProvider>
          <RouterProvider router={router} />
        </InterviewProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
