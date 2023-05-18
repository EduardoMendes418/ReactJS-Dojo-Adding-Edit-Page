import Layout from "./Layout";
import { ThemeProvider } from "@sensedia-ui/core";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostsListPage from "./Pages/Posts/PostsLists";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostDelete } from "./Pages/Posts/PostDelete";
import { PostCreate } from "./Pages/Posts/PostCreate";
import { PostOverview } from "Pages/Posts/PostOverview";

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/posts" element={<PostsListPage />}>
                <Route path=":id/delete" element={<PostDelete />} />
              </Route>
              <Route path="/posts/create" element={<PostCreate />} />
              <Route path="/posts/:id/overview" element={<PostOverview />} />
              <Route path="/posts/:id/edit" element={<PostCreate />} />
              <Route path="*" element={<>Page not found</>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
