import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login'
import Player from './Player'
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);  //short term memory store - losses value on refresh
  const [{}, dispatch] = useDataLayerValue(); // {} - get, dispatch - fire action
  const [playlist, setPlaylist] = useState('5zmtpUGHz5iSXQLeCi5EZ4');

  // Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";      // erase url
    const _token = hash.access_token;  
    
    if(_token){
      dispatch({
        type : 'SET_TOKEN',
        token : _token
      })
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type : 'SET_USER',
          user : user
        })
      })
      spotify.getUserPlaylists()
      .then((playlists)=>{
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists
        });
        setPlaylist(playlists[0]);
      })
      spotify.getPlaylist(playlist).then((response)=>{
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly : response
        })
      });
    }
  }, [token, dispatch]);


  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
