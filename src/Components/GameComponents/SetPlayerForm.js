import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { fetchCards } from "../../store/cards-slice";

import Toast from "../Toast";
import { gameActions } from "../../store/game-slice";
import { player1Actions } from "../../store/player1-slice";
import { player2Actions } from "../../store/player2-slice";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
} from "reactstrap";

const SetPlayerForm = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.game.players);
  const player1 = useSelector((state) => state.player1.player);
  const [player1Placeholder, setPlayer1Placeholder] = useState({});
  const [player2Placeholder, setPlayer2Placeholder] = useState({});

  const INITIAL_STATE = {};
  const [formData, setFormData] = useState(INITIAL_STATE);

  const [loading, setLoading] = useState(false);

  // Computer is added into players when computer choice is chosen.  This checks if players has anything in it, and assigns player 1 to that player("Computer")
  useEffect(() => {
    if (players.length > 0) {
      if (players[0].player1) {
        dispatch(player1Actions.addPlayer({ name: players[0].player1 }));
        setPlayer1Placeholder({ name: "Computer" });
      }
    }
  }, [players]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "player1" && player1.name !== "Computer") {
      if (value === "Computer" || value === "computer") {
        new Toast({
          message:
            '"Computer" is not a valid player name. To play against the computer, please select the play against computer option on the home screen',
          type: "danger",
        });
        setPlayer1Placeholder({});
      } else {
        setPlayer1Placeholder({ name: value });
      }
    }
    if (name === "player2") {
      if (value === "Computer" || value === "computer") {
        new Toast({
          message:
            '"Computer" is not a valid player name. To play against the computer, please select the play against computer option on the home screen',
          type: "danger",
        });
        setPlayer2Placeholder({});
      } else {
        setPlayer2Placeholder({ name: value });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!player1Placeholder.name && !player2Placeholder.name) {
      new Toast({
        message: `Please enter a name for Player 1 and Player 2.  Note: "Computer" is not a valid name, unless the play against computer option has been chosen.`,
        type: "danger",
      });
    }
    if (!player1Placeholder.name) {
      new Toast({
        message: `Please enter a name for Player 1.  Note: "Computer" is not a valid name, unless the play against computer option has been chosen.`,
        type: "danger",
      });
    }
    if (!player2Placeholder.name) {
      new Toast({
        message: `Please enter a name for Player 2.  Note: "Computer" is not a valid name.`,
        type: "danger",
      });
    }
    if (player1Placeholder.name === "Computer" && player1.name !== "Computer") {
      new Toast({
        message: `"Computer" is not a valid name for Player 1, unless the play against computer option has been chosen.`,
        type: "danger",
      });
    }
    if (player1Placeholder.name === "Computer" && player2Placeholder.name) {
      setLoading(true);
      dispatch(player2Actions.addPlayer(player2Placeholder));
      dispatch(gameActions.addPlayer({ player2: player2Placeholder.name }));
      // set current player to player 2
      dispatch(
        gameActions.setCurrentPlayer({ player2: player2Placeholder.name })
      );
      dispatch(fetchCards());
      setFormData(INITIAL_STATE);
      setPlayer1Placeholder({});
      setPlayer2Placeholder({});
      return redirect("/newGame");
    } else if (
      player1Placeholder.name !== "Computer" &&
      player1Placeholder.name &&
      player2Placeholder.name
    ) {
      setLoading(true);
      dispatch(player1Actions.addPlayer(player1Placeholder));
      dispatch(gameActions.addPlayer({ player1: player1Placeholder.name }));
      dispatch(player2Actions.addPlayer(player2Placeholder));
      dispatch(gameActions.addPlayer({ player2: player2Placeholder.name }));
      // Set current player to player 1
      dispatch(
        gameActions.setCurrentPlayer({ player1: player1Placeholder.name })
      );
      dispatch(fetchCards());
      setFormData(INITIAL_STATE);
      setPlayer1Placeholder({});
      setPlayer2Placeholder({});
      return redirect("/newGame");
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });

  useEffect(() => {
    if (loading) {
      document.getElementById("btn-login").disabled = true;
      // } else if (!loading) {
      //   document.getElementById("btn-login").disabled = false;
    }
  }, [loading]);
  return (
    <Card>
      <CardBody className="text-center">
        {loading ? (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#c19595" />
          </View>
        ) : (
          ""
        )}
        <Form onSubmit={handleSubmit}>
          {player1.name === "Computer" ? (
            <FormGroup>
              <Label htmlFor="player1">Player 1</Label>
              <Input
                className="form-control"
                onChange={handleChange}
                name="player1"
                value={player1.name}
                disabled
              />
            </FormGroup>
          ) : (
            <FormGroup>
              <Label htmlFor="player1">Player 1</Label>
              <Input onChange={handleChange} name="player1" />
            </FormGroup>
          )}
          <FormGroup>
            <Label htmlFor="player2">Player 2</Label>
            <Input onChange={handleChange} name="player2" />
          </FormGroup>
          <Button
            type="submit"
            id="btn-login"
            className="btn btn-primary btn-lg btn-block"
          >
            Let's Play!
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default SetPlayerForm;
