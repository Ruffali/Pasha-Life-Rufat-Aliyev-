import {
    FETCH_USERS_SUCCESS,
} from "./userTypes";

import topLine from "./img/topLine.svg";
import leftLine from "./img/leftLine.svg";
import rightLine from "./img/rightLine.svg";
import person from "./img/person.svg"
import lineThrow from "./img/lineThrow.png"

const initialState = {
    users: [
        {
            id: '1',
            name: 'Toghrul Rajab',
            email: 'toghrulrajab@gmail.com',
            img: person,
            position: 'Direktor',
            structure: 'Marketing',
            purpleData: 2222,
            blueData: 2222,
            greenData: 2222,
            yellowData: 2222,
            topLine: topLine,
            linePosition: 'center',
            isActive: false,
            haveWorker: true,
            workers: [
                {
                    id: '2',
                    name: 'Toghrul Rajab 2.1',
                    email: 'toghrulrajab@gmail.com',
                    img: person,
                    position: 'Direktor',
                    structure: 'Marketing',
                    purpleData: 2222,
                    blueData: 2222,
                    greenData: 2222,
                    yellowData: 2222,
                    topLine: leftLine,
                    linePosition: 'left',
                    isActive: false,
                    haveWorker: true,
                    workers: [
                        {
                            id: '02',
                            name: 'Toghrul Rajab 3.1',
                            email: 'toghrulrajab@gmail.com',
                            img: person,
                            position: 'Direktor',
                            structure: 'Marketing',
                            purpleData: 2222,
                            blueData: 2222,
                            greenData: 2222,
                            yellowData: 2222,
                            topLine: lineThrow,
                            linePosition: 'left',
                            haveWorker: false,
                        }
                    ]
                },
                {
                    id: '3',
                    name: 'Toghrul Rajab 2.2',
                    email: 'toghrulrajab@gmail.com',
                    img: person,
                    position: 'Direktor',
                    structure: 'Marketing',
                    purpleData: 2222,
                    blueData: 2222,
                    greenData: 2222,
                    yellowData: 2222,
                    topLine: rightLine,
                    linePosition: 'right',
                    isActive: false,
                    haveWorker: true,
                    workers: [
                        {
                            id: '03',
                            name: 'Toghrul Rajab 3.2',
                            email: 'toghrulrajab@gmail.com',
                            img: person,
                            position: 'Direktor',
                            structure: 'Marketing',
                            purpleData: 2222,
                            blueData: 2222,
                            greenData: 2222,
                            yellowData: 2222,
                            topLine: lineThrow,
                            linePosition: 'left',
                            haveWorker: false,
                        }
                    ]
                }
            ]
        }
    ],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        default: return state
    }
}

export default userReducer;