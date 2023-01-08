import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import fetchBlogs from "../utils/fetchBlogs";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from '@mui/material/Chip';
// import "../blog.css"
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <Stack gap={3} width="100%" paddingY="3rem" paddingX="6rem">
      <Typography variant="h4">Blogs</Typography>
      <Stack>
        {blogs.map(({ title, _id, author }) => {
          return (
            <>
              <Stack alignItems="flex-start" paddingY="10px" gap={1}>
                <Link
                  to={`/blog/${_id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ "&:hover": { color: "gray" } }}
                  >
                    {title}
                  </Typography>
                </Link>
                <Stack flexDirection="row" gap={1} alignItems="center">
                    <Typography>-by</Typography> <Chip label={author} />
                </Stack>
              </Stack>
              <Divider />
            </>
          );
        })}
      </Stack>
    </Stack>
  );
}
