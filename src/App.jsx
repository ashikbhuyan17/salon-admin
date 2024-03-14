import { BrowserRouter } from "react-router-dom";
import BaseRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <BaseRoutes />
    </BrowserRouter>
  )
}