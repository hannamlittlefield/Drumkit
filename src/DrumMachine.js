import React from 'react';
import Container from '@material-ui/core/Container';

export default function DrumMachine(){
    function PlayClip(clip) {
        var path = "path\\to\\melody\\"
        var snd = new Audio(path + clip + ".mp3");
        snd.play();}

    return(
        <React.Fragment>
        <Container id="drum-machine">
            <div className="drum-pad"
            onClick={PlayClip()}>Q</div>
        </Container>
            </React.Fragment>
    );
}

// make drum pad div a component w/ props? id, 