import React, { useState } from 'react';
import './Modal.css';

interface ModalProps{
    player: any,
    onChangePlayers: (e: React.FormEvent<HTMLFormElement>, valuePlayer: any) => void
}

const Modal:React.FC<ModalProps> = ({ player, onChangePlayers }) => {

    const [valuePlayer, setValuePlayer] = useState<any>(player);

    const {
        PLAYER_NAME,
        PLAYER_AGE,
        PLAYER_OVERALL_SCORE,
        PLAYER_CONTRACT,
        PLAYER_VALUE,
        PLAYER_WAGE,
        PLAYER_NATIONALITY,
        PLAYER_JOINED,
        PLAYER_SKILLS,
        } = valuePlayer

    return (
        <div className="overlay">
            <div className="modal">
                <form className="modal-form" onSubmit={(e) => onChangePlayers(e, valuePlayer)}>
                    <div className="wrapper-control">
                        <label htmlFor="name">Name</label>
                        <input required value={PLAYER_NAME} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_NAME: e.target.value})} placeholder="Player name..." type="text" name="name" id="name" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="age">Age</label>
                        <input required value={PLAYER_AGE} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_AGE: e.target.value})} placeholder="Player age..." type="text" name="age" id="age" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="ova">Ova</label>
                        <input required value={PLAYER_OVERALL_SCORE} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_OVERALL_SCORE: e.target.value})} placeholder="Player ovarall score..." type="text" name="ova" id="ova" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="pot">Pot</label>
                        <input required value={PLAYER_SKILLS} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_SKILLS: e.target.value})} placeholder="Player pot id..." type="text" name="pot" id="pot" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="teamcon">Team Contract</label>
                        <input required value={PLAYER_CONTRACT} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_CONTRACT: e.target.value})} placeholder="Player team contract..." type="text" name="teamcon" id="teamcon" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="value">Value</label>
                        <input required value={PLAYER_VALUE} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_VALUE: e.target.value})} placeholder="Player value..." type="text" name="value" id="value" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="wage">Wage</label>
                        <input required value={PLAYER_WAGE} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_WAGE: e.target.value})} placeholder="Player wage..." type="text" name="wage" id="wage" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="nationality">Nationality</label>
                        <input required value={PLAYER_NATIONALITY} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_NATIONALITY: e.target.value})} placeholder="Player nationality..." type="text" name="nationality" id="nationality" />
                    </div>
                    <div className="wrapper-control">
                        <label htmlFor="join">Joined</label>
                        <input required value={PLAYER_JOINED} onChange={(e) => setValuePlayer({...valuePlayer, PLAYER_JOINED: e.target.value})} placeholder="Player joined date..."  type="text" name="join" id="join" />
                    </div> 
                    <div className="wrapper-control">
                        <button className="submit-btn">Sumbit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { Modal };