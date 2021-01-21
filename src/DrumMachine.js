import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import DrumButton from './DrumButton'


/* array const sound w/ objects of ID and source(from fcc page) and sound description (display description to display)
id in component source of arrayitem.id, audio[0].source 
add state into onclick/keydown - state will be the obj you're handling.- reference in display id */

export default function DrumMachine(){
    const defaultSound= ''
    const [sound, setSound] = useState(defaultSound)

    const sounds = [
    {
        id: 'Q',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        description: 'Kick and Hat'
    },
    {
        id: 'W',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        description: 'Punchy Kick'
    },
    {
        id: 'E',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        description: 'Side Stick'
    },
    {
        id: 'A',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        description: 'Snare'
    },
    {
        id: 'S',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        description: 'Kick'
    },
    {
        id: 'D',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        description: 'Heater 1'
    },
    {
        id: 'Z',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        description: 'Cymbal'
    },
    {
        id: 'X',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        description: 'Heater 2'
    },
    {
        id: 'C',
        clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        description: 'Clap'
    }
    ]
    return(
        <React.Fragment>
        <Container id="drum-machine">
        <div>
                <DrumButton
                id={sounds[0].id}
                audio={sounds[0].clip}/>
                <DrumButton
                id={sounds[1].id}
                audio={sounds[1].clip}/>
                <DrumButton
                id={sounds[2].id}
                audio={sounds[2].clip}/>
        </div><div>
                <DrumButton
                id={sounds[3].id}
                audio={sounds[3].clip}/>
                <DrumButton
                id={sounds[4].id}
                audio={sounds[4].clip}/>
                <DrumButton
                id={sounds[5].id}
                audio={sounds[5].clip}/>
            </div>
                <DrumButton 
                id={sounds[6].id}
                audio={sounds[6].clip}/>
                <DrumButton
                id={sounds[7].id}
                audio={sounds[7].clip}/>
                <DrumButton
                id={sounds[8].id}
                audio={sounds[8].clip}/>
            <div id="display">{sound}</div>
        </Container>
            </React.Fragment>
    );
}