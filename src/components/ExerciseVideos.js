import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const ExerciseVideo = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  if (exerciseVideos.length === 0) {
    return <div>IsLoading...</div>;
  }
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos.slice(0, 3).map(
          (item, index) =>
            item.video && (
              <a
                className="exercise-video"
                key={index}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  width="350px"
                  height="300px"
                />
                <Box>
                  <Typography variant="h5" color="#000">
                    {item.video.title}
                  </Typography>
                  <Typography variant="h6" color="#000">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            )
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
