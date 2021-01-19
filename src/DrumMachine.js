import React from 'react';
import Container from '@material-ui/core/Container';
import DrumButton from './DrumButton'
import Grid from '@material-ui/core/Grid';


export default function DrumMachine(){
    function PlayClip(clip) {
        var path = "path\\to\\melody\\"
        var snd = new Audio(path + clip + ".mp3");
        snd.play();}

    return(
        <React.Fragment>
        <Container id="drum-machine">
        <div>
                <DrumButton/>
                <DrumButton/>
                <DrumButton/>
        </div><div>
                <DrumButton/>
                <DrumButton/>
                <DrumButton/>
                </div>
                <DrumButton/>
                <DrumButton/>
                <DrumButton/>
            <div id="display">A</div>
        </Container>
            </React.Fragment>
    );
}

// make drum pad div a component w/ props? id, 