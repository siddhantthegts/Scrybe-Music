import React from 'react'

const playerContext =  {
    song : null,
    setSong : ([]),
    playing : false

}

export const PlayerContext = React.createContext(playerContext);