import React from 'react';

export default function DrumButton({id}, {audio}) {
    return(
        <React.Fragment>
        <audio
            src={audio}/>
            <button className="drum-pad"
            /*onClick={playAudio()}*/>{id}
            </button>
        </React.Fragment>
    );
    }