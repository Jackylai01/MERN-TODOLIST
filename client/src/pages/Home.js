import React, { useState } from "react";
import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { setBoards } from "../redux/features/boardSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import boardApi from "../api/boardApi";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const createBoard = async () => {
    setLoading(true);
    try {
      const res = await boardApi.create();
      dispatch(setBoards([res]));
      navigate(`/boards/${res.id}`);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingButton
          variant="outlined"
          color="success"
          loading={loading}
          onClick={createBoard}
        >
          Click here to create your first board
        </LoadingButton>
      </Box>
    </>
  );
};

export default Home;
